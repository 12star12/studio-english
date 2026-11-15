/* e2e：双击查句走真实链路（preload + IPC + 主进程 fetch，与应用完全一致） */
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
app.disableHardwareAcceleration();
ipcMain.handle('ai:chat', async (e, opts) => {
  const t0 = Date.now();
  try {
    const res = await fetch(opts.baseUrl + '/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + opts.apiKey },
      body: JSON.stringify({ model: opts.model, messages: opts.messages, temperature: opts.temperature || 0.85, max_tokens: opts.maxTokens || 4096 })
    });
    const j = await res.json();
    return { ok: res.ok, content: j.choices && j.choices[0] ? j.choices[0].message.content : '', ms: Date.now() - t0, error: res.status };
  } catch (err) { return { ok: false, error: String(err) }; }
});
app.whenReady().then(async () => {
  const db = JSON.parse(fs.readFileSync(process.env.APPDATA + '/cet6-studio/data.json', 'utf8'));
  const win = new BrowserWindow({ show: false, webPreferences: { preload: path.join(__dirname, '..', 'preload.js'), contextIsolation: true } });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const r = await win.webContents.executeJavaScript(`(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    getAudio = async () => null;
    DB.config.apiKey = ${JSON.stringify(db.config.apiKey)};
    DB.config.baseUrl = ${JSON.stringify(db.config.baseUrl)};
    DB.config.model = ${JSON.stringify(db.config.model)};
    DB.articles = [{ id:'t1', date: TODAY, title:'Test', len: 200,
      paras:[{en:['The quiet harbor held its breath at dawn.'], zh:''}],
      words:[], listening:[{q:'',opts:['','','',''],a:0,exp:''},{q:'',opts:['','','',''],a:1,exp:''}],
      reading:{q:'',opts:['','','',''],a:0,exp:''}, translation:{sent:'',ref:''}, collocation:{coll:'',ref:''} }];
    openArticle(DB.articles[0]);
    await sleep(60);
    const para = document.querySelector('#artBody .para');
    const sel = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(para);
    sel.removeAllRanges(); sel.addRange(range);
    para.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
    for (let i = 0; i < 20; i++) {
      await sleep(500);
      const zh = document.querySelector('#lkZh').textContent;
      if (zh && zh !== '查询中…') return { en: document.querySelector('#lkEn').textContent, zh: zh.slice(0, 80) };
    }
    return { en: document.querySelector('#lkEn').textContent, zh: '(超时)' };
  })()`);
  console.log(JSON.stringify(r, null, 1));
  app.exit(r.zh && r.zh !== '(超时)' ? 0 : 1);
});
