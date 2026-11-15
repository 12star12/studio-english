/* 冒烟：100 词档的提示词与 UI */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const r = await win.webContents.executeJavaScript(`(() => {
    const out = { errors: [] };
    try {
      DB.config.length = 100;
      const p = buildPrompt();
      out.minW = p.minW; out.maxW = p.maxW;
      out.has3paras = p.messages[1].content.includes('写 3 段');
      out.hasShortSent = p.messages[1].content.includes('12–18 个词');
      out.noLongSentRule = !p.messages[1].content.includes('18–25 个词');
      out.targetWords = p.words.length;
      // UI 出现四档
      renderHome();
      out.lenOpts = [...document.querySelectorAll('#todayBody .len-opt')].map(e => e.textContent.trim().replace(/\\s+/g, ' '));
      // 旧档位不受影响
      DB.config.length = 250;
      const p2 = buildPrompt();
      out.mid250 = { has4paras: p2.messages[1].content.includes('写 4 段'), minW: p2.minW, words: p2.words.length };
      DB.config.length = 150;
      const p3 = buildPrompt();
      out.short150 = { has4paras: p3.messages[1].content.includes('写 4 段'), minW: p3.minW, words: p3.words.length };
    } catch (e) { out.errors.push(String(e)); }
    return out;
  })()`);
  console.log(JSON.stringify(r, null, 1));
  app.exit(r.errors && r.errors.length ? 1 : 0);
});
