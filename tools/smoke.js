/* 冒烟测试：加载渲染页并检查环节开关逻辑与页面结构 */
const { app, BrowserWindow } = require('electron');
const path = require('path');

app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false, webPreferences: { preload: path.join(__dirname, '..', 'preload.js') } });
  process.on('uncaughtException', e => { console.error('UNCAUGHT', e); app.exit(1); });
  win.webContents.on('console-message', (e, level, msg) => { if (level >= 2) console.log('CONSOLE-ERR:', msg); });
  win.webContents.on('render-process-gone', (e, d) => { console.log('RENDERER-GONE', d.reason); app.exit(1); });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 600));
  const result = await win.webContents.executeJavaScript(`(() => {
    const out = { errors: [] };
    try {
      // 1. 默认流程
      out.defaultFlow = flow().join(',');
      // 2. 模拟"先读后听"
      DB.config.order = 'read';
      out.readFirstFlow = flow().join(',');
      out.readFirstEntry = flow()[0];
      // 3. 模拟"关掉听力"
      DB.config.steps.listen = false;
      out.listenOffFlow = flow().join(',');
      out.listenOffEntry = flow()[0];
      // 4. 设置页能渲染出三个开关
      go('settings');
      out.toggles = [!!document.querySelector('#tgListen'), !!document.querySelector('#tgGuess'), !!document.querySelector('#tgTrain')];
      // 5. 恢复默认
      DB.config.order = 'listen'; DB.config.steps = { listen: true, guess: true, train: true };
      out.restoredFlow = flow().join(',');
    } catch (e) { out.errors.push(String(e)); }
    return out;
  })()`);
  console.log(JSON.stringify(result, null, 2));
  app.exit(result.errors && result.errors.length ? 1 : 0);
});
