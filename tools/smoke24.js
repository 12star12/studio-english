/* 冒烟：学习时长（活跃判定 / 累计 / 格式化 / UI） */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  win.showInactive();
  await new Promise(r => setTimeout(r, 200));
  const r = await win.webContents.executeJavaScript(`(() => {
    const out = {};
    DB.progress.days = {};
    out.fmtSec = fmtDur(45);
    out.fmtMin = fmtDur(125);
    out.fmtHour = fmtDur(3720);
    // 累计秒数
    activeSeconds(120);
    out.stored = daySec(TODAY);
    // 活跃判定：home 页不算、学习页+有焦点才算
    VIEW='home'; lastActiveAt=Date.now(); out.homeNotLearning = !isLearningNow();
    VIEW='read'; const oldHasFocus=document.hasFocus; document.hasFocus=()=>true; out.readLearning = isLearningNow(); document.hasFocus=oldHasFocus;
    lastActiveAt = Date.now() - 120000; out.idleNotLearning = !isLearningNow();
    lastActiveAt = Date.now();
    // buffer 落盘
    secBuffer=30; flushSecBuffer(); out.flushed = daySec(TODAY) === 150 && secBuffer===0;
    // 造 7 天数据测图表
    for (let i=0;i<7;i++){ const d=new Date(); d.setDate(d.getDate()-i); const k=dstr(d);
      DB.progress.days[k]={words:0,n:0,sec:(i+1)*120}; }
    // UI：首页时长 + 成长页图表
    go('home'); out.homeDur = document.querySelector('#todayDur').textContent;
    go('growth');
    out.chartCols = document.querySelectorAll('#growthBody .dur-col').length;
    out.chartToday = document.querySelectorAll('#growthBody .dur-col.today').length;
    out.totalLabel = document.querySelector('#growthBody .dur-chart-h span').textContent;
    return out;
  })()`);
  console.log(JSON.stringify(r, null, 1));
  const ok = r.fmtSec === '45 秒' && r.fmtMin === '2 分 5 秒' && r.fmtHour === '1 小时 2 分'
    && r.stored === 120 && r.homeNotLearning && r.readLearning && r.idleNotLearning
    && r.flushed && /今日学习/.test(r.homeDur) && r.chartCols === 7 && r.chartToday === 1
    && /合计/.test(r.totalLabel);
  app.exit(ok ? 0 : 1);
});
