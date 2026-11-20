/* 冒烟：深度锚定提示词 + 真实生成两篇（金融/文学）验证具体性 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
app.disableHardwareAcceleration();

const db = JSON.parse(fs.readFileSync(path.join(process.env.APPDATA, 'cet6-studio', 'data.json'), 'utf8'));
const KEY = db.config.apiKey, BASE = db.config.baseUrl, MODEL = db.config.model;

async function chat(messages) {
  const r = await fetch(BASE.replace(/\/+$/, '') + '/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + KEY },
    body: JSON.stringify({ model: MODEL, messages, temperature: 0.85, max_tokens: 4096 })
  });
  const j = await r.json();
  return j.choices && j.choices[0] && j.choices[0].message ? j.choices[0].message.content : null;
}

app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));

  // 1) 提示词静态检查
  const pc = await win.webContents.executeJavaScript(`(() => {
    const out = {};
    DB.config.topic = '金融与商业';
    let p = buildPrompt().messages[1].content;
    out.econAnchor = p.includes('真实、广为人知的经济金融现象或历史事件');
    out.depth = p.includes('具体的"锚"') && p.includes('开头第一句必须直接抛出这个锚');
    out.perPara = p.includes('每一段都要有至少一个具体细节');
    out.noSafeEscape = !p.includes('而不是复述具体情节');
    DB.config.topic = '文学';
    p = buildPrompt().messages[1].content;
    out.litAnchor = p.includes('一部具体作品') && p.includes('作家、时代、人物、情节、主题');
    out.litFact = p.includes('具体不等于编造');
    return out;
  })()`);

  // 2) 真实生成两篇
  const results = [];
  for (const topic of ['金融与商业', '文学']) {
    const messages = await win.webContents.executeJavaScript(`
      DB.config.topic = ${JSON.stringify(topic)};
      JSON.stringify(buildPrompt().messages)`);
    const content = await chat(JSON.parse(messages));
    if (!content) { results.push({ topic, error: 'API 无返回' }); continue; }
    const info = await win.webContents.executeJavaScript(`
      (() => {
        try {
          const d = normalize(parseJSON(${JSON.stringify(content)}));
          const text = d.paras.map(p => p.en.join(' ')).join(' ');
          const sents = d.paras[0].en;
          return JSON.stringify({
            title: d.title, len: d.len,
            firstSent: sents[0],
            hasQ: /\\?/.test(text),
            genericOpener: /^(With the development|In today'?s|Nowadays|\\w+ is important)/i.test(sents[0]),
            qlist: d.listening.map(q => q.a).join(','),
            text
          });
        } catch (e) { return JSON.stringify({ error: String(e) }); }
      })()`);
    const o = JSON.parse(info);
    o.topic = topic;
    results.push(o);
  }

  console.log(JSON.stringify({ promptChecks: pc, articles: results.map(a => ({ ...a, text: a.text })) }, null, 1));
  const ok = pc.econAnchor && pc.depth && pc.perPara && pc.noSafeEscape && pc.litAnchor && pc.litFact
    && results.every(a => !a.error && a.len >= 100 && !a.genericOpener);
  app.exit(ok ? 0 : 1);
});
