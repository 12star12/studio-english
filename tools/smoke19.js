/* 冒烟：词库释义补全后，背词模块词池扩容验证 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const r = await win.webContents.executeJavaScript(`(() => {
    const out = {};
    out.glossTotal = Object.keys(CET6_GLOSS).length;
    out.wordTotal = CET6_WORDS.length;
    const pool = bookPool();
    out.poolWithZh = pool.filter(x => x.zh).length;
    out.sampleGloss = CET6_GLOSS['meticulous'] + ' / ' + CET6_GLOSS['quixotic'] + ' / ' + CET6_GLOSS['as'];
    // 背词模块：全部范围应该能取到 10 个有释义的词
    STUDY.scope='all'; STUDY.n=10; STUDY.mode='choice'; startStudy();
    out.studyItems = STUDY.items.length;
    out.studyAllHaveZh = STUDY.items.every(x => x.zh && x.opts.length===4);
    // 手写释义未被覆盖
    out.handKept = CET6_GLOSS['abandon'] === '放弃；抛弃';
    return out;
  })()`);
  console.log(JSON.stringify(r, null, 1));
  const ok = r.glossTotal >= 7700 && r.poolWithZh >= 7700 && r.studyItems === 10 && r.studyAllHaveZh && r.handKept;
  app.exit(ok ? 0 : 1);
});
