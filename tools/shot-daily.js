const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false, width: 1280, height: 860 });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const OUT = path.join(__dirname, 'ui-shots');
  // 造点进度：读1篇、答对3题、背6词，让卡片有半完成状态
  await win.webContents.executeJavaScript(`
    bumpDaily('read'); for(let i=0;i<3;i++)bumpDaily('quiz'); for(let i=0;i<6;i++)bumpDaily('words');
    document.querySelector('#achPop').hidden = true;
  `);
  async function shot(name, view) {
    await win.webContents.executeJavaScript(`
      document.querySelectorAll('section[id^="v-"]').forEach(s => s.hidden = s.id !== 'v-' + ${JSON.stringify(view)});`);
    await new Promise(r => setTimeout(r, 400));
    win.showInactive(); await new Promise(r => setTimeout(r, 200));
    const buf = await win.webContents.capturePage(); win.hide();
    fs.writeFileSync(path.join(OUT, name + '.png'), buf.toPNG());
    console.log('shot:', name);
  }
  await shot('12-daily-home', 'home');
  await win.webContents.executeJavaScript('renderGrowth(); document.querySelector("#main").scrollTop = 99999');
  await shot('13-daily-growth', 'growth');
  app.exit(0);
});
