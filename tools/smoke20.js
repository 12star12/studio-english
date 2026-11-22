/* 冒烟：背单词自动朗读 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const r = await win.webContents.executeJavaScript(`(() => {
    const out = {};
    // 用计数器替换发音函数
    window.__spoken = [];
    speakText = async t => { window.__spoken.push(t); };
    STUDY.scope='all'; STUDY.n=5; STUDY.mode='choice'; startStudy();
    out.firstWord = STUDY.items[0].w;
    out.spokenOnEnter = window.__spoken[window.__spoken.length-1] === out.firstWord;
    out.spokenCount1 = window.__spoken.length;
    // 答对 → 下一题，应自动播第二个词
    document.querySelector('#studyOpts .gopt[data-i="' + STUDY.items[0].a + '"]').click();
    document.querySelector('#studyNext').click();
    out.spokenOnNext = window.__spoken[window.__spoken.length-1] === STUDY.items[1].w;
    out.spokenCount2 = window.__spoken.length;
    // 手动点喇叭，应再播一次当前词
    document.querySelector('#studySpk').click();
    out.spokenOnButton = window.__spoken[window.__spoken.length-1] === STUDY.items[1].w;
    out.spokenCount3 = window.__spoken.length;
    // 翻卡模式进入时也应自动播
    STUDY.mode='flip'; STUDY.n=3; startStudy();
    out.flipSpoken = window.__spoken[window.__spoken.length-1] === STUDY.items[0].w;
    return out;
  })()`);
  console.log(JSON.stringify(r, null, 1));
  const ok = r.spokenOnEnter && r.spokenCount1 === 1 && r.spokenOnNext && r.spokenCount2 === 2
    && r.spokenOnButton && r.spokenCount3 === 3 && r.flipSpoken;
  app.exit(ok ? 0 : 1);
});
