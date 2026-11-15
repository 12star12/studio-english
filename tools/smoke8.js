/* e2e：完整复刻应用生成流程（含太短自动重写），验证 100 词档最终达标 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const db = JSON.parse(fs.readFileSync(process.env.APPDATA + '/cet6-studio/data.json', 'utf8'));
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const chat = async messages => {
    const res = await fetch(db.config.baseUrl + '/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + db.config.apiKey },
      body: JSON.stringify({ model: db.config.model, messages, temperature: 0.85, max_tokens: 4096 })
    });
    const j = await res.json();
    return (j.choices && j.choices[0] && j.choices[0].message.content) || '';
  };
  const parse = c => win.webContents.executeJavaScript(
    `(() => { try { return normalize(parseJSON(${JSON.stringify(c)})); } catch (e) { return null; } })()`);
  let pass = 0;
  for (let run = 1; run <= 3; run++) {
    const p = await win.webContents.executeJavaScript('(() => { DB.config.length = 100; return buildPrompt(); })()');
    const c1 = await chat(p.messages);
    let data = await parse(c1), extended = false, finalLen = data ? data.len : 0;
    for (let att = 0; att < 2 && data && data.len < p.minW * 0.95; att++) {
      extended = true;
      const c2 = await chat(p.messages.concat([
        { role: 'assistant', content: c1.slice(0, 4000) },
        { role: 'user', content: `这篇只有 ${data.len} 个词，太短了，达不到 ${p.minW}–${p.maxW} 词。请以它为基础重写一遍：\n- 保留原来的主题、观点和已用到的目标词\n- 每段补充具体的例子、数据、因果解释或反例，让内容真的有信息量\n- 不要注水，不要重复同一层意思，不要靠形容词凑字数\n- 总词数必须落在 ${p.minW}–${p.maxW} 之间\n只输出完整的 JSON，结构完全不变。` }
      ]));
      const d2 = await parse(c2);
      if (d2 && Math.abs(d2.len - 100) < Math.abs(data.len - 100)) { data = d2; finalLen = d2.len; }
    }
    const hit = data && finalLen >= p.minW && finalLen <= p.maxW;
    if (hit) pass++;
    console.log(`run${run}: 初稿 ${data ? 'ok' : 'parse-fail'} | ${extended ? '触发了自动补长' : '一次达标'} | 最终 ${finalLen} 词 (目标 ${p.minW}-${p.maxW}) ${hit ? '✓' : '✗'}`);
  }
  app.exit(pass >= 2 ? 0 : 1);
});
