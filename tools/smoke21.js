/* 冒烟：学过就给 1 个勾（markStudied 四种路径） */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const r = await win.webContents.executeJavaScript(`(() => {
    const out = {};
    speakText = async () => {};
    const mk = () => ({ checks:0, wrong:0, level:1 });
    // 核心函数
    let r1 = mk(); markStudied(r1, true);  out.firstRight = r1.checks;
    let r2 = mk(); markStudied(r2, false); out.firstWrong = r2.checks;
    markStudied(r1, true); out.secondRight = r1.checks;
    markStudied(r2, false); out.secondWrong = r2.checks;  // 答错不累加
    markStudied(r1, true); out.thirdRight = r1.checks;
    markStudied(r1, true); out.capped = r1.checks;         // 封顶3
    // 四选一：答错也给勾
    STUDY.scope='all'; STUDY.n=3; STUDY.mode='choice'; startStudy();
    const w = STUDY.items[0].w;
    const wrong = STUDY.items[0].a === 0 ? 1 : 0;
    document.querySelector('#studyOpts .gopt[data-i="'+wrong+'"]').click();
    out.quizWrong = (DB.words[w]||{}).checks;
    // 翻卡：点"不认识"也给勾
    STUDY.mode='flip'; STUDY.n=3; startStudy();
    const w2 = STUDY.items[0].w;
    document.querySelector('#studyReveal').click();
    document.querySelector('#studyNo').click();
    out.flipNo = (DB.words[w2]||{}).checks;
    return out;
  })()`);
  console.log(JSON.stringify(r, null, 1));
  const ok = r.firstRight === 1 && r.firstWrong === 1 && r.secondRight === 2 && r.secondWrong === 1
    && r.thirdRight === 3 && r.capped === 3 && r.quizWrong === 1 && r.flipNo === 1;
  app.exit(ok ? 0 : 1);
});
