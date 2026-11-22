/* 冒烟：背词范围卡显示学习进度 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const r = await win.webContents.executeJavaScript(`(() => {
    go('study');
    const chips = [...document.querySelectorAll('#studyBody [data-scope]')];
    return {
      count: chips.length,
      allText: chips.find(c => c.dataset.scope === 'all').innerText,
      hasLearned: chips.every(c => /已学 \\d+ 个/.test(c.innerText)),
      hasBar: chips.every(c => !!c.querySelector('.study-chip-bar')),
      allBarWidth: chips.find(c => c.dataset.scope === 'all').querySelector('.study-chip-bar i').style.width
    };
  })()`);
  console.log(JSON.stringify(r, null, 1));
  const ok = r.count === 5 && r.hasLearned && r.hasBar && /共 \d+ 个 · 已学 \d+ 个/.test(r.allText);
  app.exit(ok ? 0 : 1);
});
