/* 冒烟：独立背单词模块（配置 / 四选一 / 翻卡 / 完成） */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false, width: 1280, height: 860 });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const r = await win.webContents.executeJavaScript(`(() => {
    const out = {};
    getAudio = async () => null;
    out.navExists = !!document.querySelector('#nav a[data-v="study"]');
    go('study');
    out.setup = !!document.querySelector('.study-setup') && !!document.querySelector('#studyStart');
    out.scopeCount = document.querySelectorAll('#studyBody [data-scope]').length;
    // 选全部词书 + 10 个 + 四选一
    document.querySelector('#studyBody [data-scope="all"]').click();
    document.querySelector('#studyBody [data-n="10"]').click();
    document.querySelector('#studyBody [data-mode="choice"]').click();
    document.querySelector('#studyStart').click();
    out.started = STUDY.phase === 'play' && STUDY.items.length === 10;
    out.opts = document.querySelectorAll('#studyOpts .gopt').length;
    out.hasSpeaker = !!document.querySelector('#studySpk');
    // 故意答错第一题：选一个不是正确答案的下标
    const wrong = STUDY.items[0].a === 0 ? 1 : 0;
    document.querySelector('#studyOpts .gopt[data-i="' + wrong + '"]').click();
    out.wrongMarked = STUDY.items[0].ok === false && !!document.querySelector('#studyOpts .gopt.wrong') && !!document.querySelector('#studyOpts .gopt.right');
    out.wrongInLog = (DB.words[STUDY.items[0].w] || {}).wrong >= 1;
    // 答对第二题
    document.querySelector('#studyNext').click();
    const good = STUDY.items[1].a;
    document.querySelector('#studyOpts .gopt[data-i="' + good + '"]').click();
    out.rightMarked = STUDY.items[1].ok === true && STUDY.right === 1;
    out.xpGained = DB.progress.xp > 0;
    // 退出本组回到配置页
    document.querySelector('#studyQuit').click();
    out.quitWorks = STUDY.phase === 'setup' && !!document.querySelector('.study-setup');
    // 翻卡模式
    STUDY.mode = 'flip'; STUDY.n = 4; startStudy();
    out.flipCard = !!document.querySelector('#studyReveal') && document.querySelector('#studyRevealBox').hidden === true;
    document.querySelector('#studyReveal').click();
    out.flipRevealed = !document.querySelector('#studyRevealBox').hidden && !!document.querySelector('.study-meaning');
    document.querySelector('#studyYes').click();
    out.flipJudged = STUDY.items[0].ok === true && DB.progress.xp > 0;
    return out;
  })()`);
  console.log(JSON.stringify(r, null, 1));
  const ok = r.navExists && r.setup && r.scopeCount === 5 && r.started && r.opts === 4 && r.hasSpeaker
    && r.wrongMarked && r.wrongInLog && r.rightMarked && r.xpGained && r.quitWorks
    && r.flipCard && r.flipRevealed && r.flipJudged;
  app.exit(ok ? 0 : 1);
});
