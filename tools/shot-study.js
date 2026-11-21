const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false, width: 1280, height: 860 });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const OUT = path.join(__dirname, 'ui-shots');
  fs.mkdirSync(OUT, { recursive: true });
  async function shot(name, js, view) {
    if (js) await win.webContents.executeJavaScript(js);
    if (view) await win.webContents.executeJavaScript(`
      document.querySelectorAll('section[id^="v-"]').forEach(s => s.hidden = s.id !== 'v-' + ${JSON.stringify(view)});`);
    await new Promise(r => setTimeout(r, 500));
    win.showInactive();
    await new Promise(r => setTimeout(r, 250));
    const buf = await win.webContents.capturePage();
    win.hide();
    fs.writeFileSync(path.join(OUT, name + '.png'), buf.toPNG());
    console.log('shot:', name);
  }
  await shot('09-study-setup', `getAudio=async()=>null; go('study')`, 'study');
  await shot('10-study-quiz', `STUDY.scope='all';STUDY.n=10;STUDY.mode='choice';startStudy()`, 'study');
  await shot('11-study-flip', `STUDY.mode='flip';startStudy();document.querySelector('#studyReveal').click()`, 'study');
  app.exit(0);
});
