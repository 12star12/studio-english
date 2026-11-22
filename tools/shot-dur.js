const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false, width: 1280, height: 860 });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  // 造 7 天时长数据
  await win.webContents.executeJavaScript(`
    DB.progress.days={};
    [120,300,85,460,0,240,195].forEach((s,i)=>{ const d=new Date(); d.setDate(d.getDate()-(6-i));
      DB.progress.days[dstr(d)]={words:0,n:0,sec:s}; });
    document.querySelector('#achPop').hidden=true;
  `);
  const OUT=path.join(__dirname,'ui-shots');
  async function shot(name,view,js){
    await win.webContents.executeJavaScript(js||'');
    await win.webContents.executeJavaScript(`document.querySelectorAll('section[id^="v-"]').forEach(s=>s.hidden=s.id!=='v-'+${JSON.stringify(view)});`);
    await new Promise(r=>setTimeout(r,400));
    win.showInactive(); await new Promise(r=>setTimeout(r,200));
    const buf=await win.webContents.capturePage(); win.hide();
    fs.writeFileSync(path.join(OUT,name+'.png'),buf.toPNG()); console.log('shot:',name);
  }
  await shot('14-dur-home','home',`renderHome()`);
  await shot('15-dur-growth','growth',`renderGrowth();document.querySelector('#main').scrollTop=300`);
  app.exit(0);
});
