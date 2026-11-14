/* 创建桌面快捷方式
   用法：electron.exe tools/make-shortcut.js
   用 Electron 自带的 shell.writeShortcutLink / readShortcutLink，
   不走 COM、不走 cscript，避免被安全策略拦截。 */
const { app, shell } = require('electron');
const path = require('path');
const fs = require('fs');

app.disableHardwareAcceleration();

app.whenReady().then(() => {
  const root = path.join(__dirname, '..');
  const target = path.join(root, 'release', 'Studio', 'Studio English.exe');
  const icon = path.join(root, 'build', 'icon.ico');
  const lnk = path.join(app.getPath('desktop'), 'Studio English.lnk');

  if (!fs.existsSync(target)) {
    console.log('FAIL target missing:', target);
    app.exit(1);
    return;
  }

  const exists = fs.existsSync(lnk);
  const ok = shell.writeShortcutLink(lnk, exists ? 'replace' : 'create', {
    target,
    cwd: path.dirname(target),
    description: 'Studio - Daily English Reading',
    icon: fs.existsSync(icon) ? icon : target,
    iconIndex: 0,
    appUserModelId: 'com.studio.english'
  });

  console.log('WRITE', ok, '| mode', exists ? 'replace' : 'create');
  console.log('LNK  ', lnk);

  if (!ok) { app.exit(1); return; }

  try {
    const info = shell.readShortcutLink(lnk);
    console.log('READ  target=' + info.target);
    console.log('READ  cwd=' + info.cwd);
    console.log('READ  icon=' + info.icon + ' idx=' + info.iconIndex);
    console.log('READ  desc=' + info.description);
  } catch (e) {
    console.log('READ FAIL', e.message);
  }

  const st = fs.statSync(lnk);
  console.log('SIZE  ' + st.size + ' bytes');
  app.exit(0);
});
