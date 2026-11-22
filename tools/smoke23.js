/* 冒烟：每日里程碑（判定 / 奖励 / 防重复 / 重置） */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const r = await win.webContents.executeJavaScript(`(() => {
    DB.progress.daily = {}; const out = {};
    // 初始：5 个目标全未完成
    const g0 = dailyProgress();
    out.goalCount = g0.length;
    out.allZero = g0.every(g => g.cur === 0 && !g.done);
    // 读一篇 → read 达成，+5XP
    const xp0 = DB.progress.xp;
    bumpDaily('read');
    out.readDone = daily().done.read > 0;
    out.readXp = DB.progress.xp - xp0;
    // 重复 bump 不再给奖励
    const xp1 = DB.progress.xp;
    bumpDaily('read');
    out.noDoubleReward = DB.progress.xp === xp1;
    // 答对 5 题 → quiz 达成
    for (let i=0;i<5;i++) bumpDaily('quiz');
    out.quizDone = !!daily().done.quiz;
    // 背 10 词 → words 达成
    for (let i=0;i<10;i++) bumpDaily('words');
    out.wordsDone = !!daily().done.words;
    // XP 里程碑：gainXP 累计到 20
    const before = daily().done.xp ? true : false;
    if (!before) gainXP(20);
    out.xpGoalDone = !!daily().done.xp;
    // 防循环：xp 里程碑奖励不会无限递归（cur 有限）
    out.xpCur = daily().xp;
    out.finite = out.xpCur < 1000;
    // UI：首页紧凑条 & 成长页完整卡
    go('home');
    out.stripCount = document.querySelectorAll('#dailyStrip .daily-mini').length;
    go('growth');
    out.gridCount = document.querySelectorAll('#growthBody .daily-goal').length;
    out.doneShown = document.querySelectorAll('#growthBody .daily-goal.done').length;
    return out;
  })()`);
  console.log(JSON.stringify(r, null, 1));
  const ok = r.goalCount === 5 && r.allZero && r.readDone && r.readXp === 5 && r.noDoubleReward
    && r.quizDone && r.wordsDone && r.xpGoalDone && r.finite && r.stripCount === 5
    && r.gridCount === 5 && r.doneShown >= 4;
  app.exit(ok ? 0 : 1);
});
