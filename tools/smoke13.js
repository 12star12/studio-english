/* 冒烟：① fixQ 自洽校正（截图那道题）② 经济口径提示词 ③ 主题锁死 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const r = await win.webContents.executeJavaScript(`(() => {
    try {
      const out = {};
      // 1. 截图原题：4 选项 a=3(D.50 years)，解析却说 100 years → 应改判 B(1)
      const q = fixQ({ q: "How long has the artisan's workshop been in operation?",
        opts: ['A. 20 years','B. 100 years','C. 80 years','D. 50 years'], a: 3,
        exp: 'The workshop\\u2019s history is described in the second paragraph as established in 1926, making it 100 years old.' });
      out.fixedLetter = String.fromCharCode(65 + q.a);   // 期望 'B'
      // 2. 正常题不被误改：解析只命中正确选项
      const q2 = fixQ({ q: 'q?', opts: ['A. red apples','B. green tea','C. blue sky','D. black cat'], a: 2, exp: '原文第三段明确提到 blue sky，其他选项未出现。' });
      out.unchanged = q2.a;                               // 期望 2
      // 3. 解析提及多个选项时不改判（保守）
      const q3 = fixQ({ q: 'q?', opts: ['A. inflation','B. deflation'], a: 0, exp: 'inflation 是物价上涨，deflation 相反，故选 inflation。' });
      out.multiKeep = q3.a;                               // 期望 0
      // 4. 经济口径提示词
      DB.config.topic = '金融与商业';
      const p = buildPrompt().messages[1].content;
      out.econRule = p.includes('宏观') && p.includes('量化') && p.includes('严禁写成商业新闻');
      out.topicLocked = p.includes('金融与商业');
      // 5. 文学方向保持锁定且禁商业
      DB.config.topic = '文学';
      const p2 = buildPrompt().messages[1].content;
      out.litLocked = p2.includes('文学') && p2.includes('不要滑到商业');
      // 6. 出题自查在提示词里
      out.selfCheck = p2.includes('出题自查');
      return out;
    } catch (e) { return { FATAL: String(e) }; }
  })()`);
  console.log(JSON.stringify(r, null, 1));
  const ok = r.fixedLetter === 'B' && r.unchanged === 2 && r.multiKeep === 0 && r.econRule && r.topicLocked && r.litLocked && r.selfCheck;
  app.exit(ok ? 0 : 1);
});
