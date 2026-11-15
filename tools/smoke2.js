/* 冒烟：顺序默认/迁移 + 摘抄收藏 + 摘抄页渲染 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false, webPreferences: { preload: path.join(__dirname, '..', 'preload.js') } });
  win.webContents.on('render-process-gone', (e, d) => { console.log('RENDERER-GONE', d.reason); app.exit(1); });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 500));
  const result = await win.webContents.executeJavaScript(`(async () => {
    const out = { errors: [] };
    const wait = ms => new Promise(r => setTimeout(r, ms));
    try {
      out.defaultEntry = flow()[0];           // 期望 read（新默认）
      out.order = DB.config.order;             // 期望 read
      // 模拟一篇文章并测试摘抄
      DB.articles = [{ id:'t1', date: TODAY, title:'Test', len: 200, paras:[{en:['The quiet harbor held its breath at dawn.'], zh:''}], words:[], listening:[{q:'',opts:['','','',''],a:0,exp:''},{q:'',opts:['','','',''],a:1,exp:''}], reading:{q:'',opts:['','','',''],a:0,exp:''}, translation:{sent:'',ref:''}, collocation:{coll:'',ref:''} }];
      openArticle(DB.articles[0]);
      out.entryAfterOpen = document.querySelector('#v-read').hidden ? 'NOT-READ' : 'read';
      out.ordToggleLabel = document.querySelector('#ordToggle').textContent;
      // 划选文本并点击收藏
      const range = document.createRange();
      const para = document.querySelector('#artBody .para');
      const walker = document.createTreeWalker(para, NodeFilter.SHOW_TEXT);
      range.selectNodeContents(walker.nextNode());
      const sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
      document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
      await wait(60);
      out.markBtnVisible = !document.querySelector('#markBtn').hidden;
      document.querySelector('#markBtn').click();
      await wait(30);
      out.marksLen = (DB.progress.marks || []).length;
      out.xpGained = DB.progress.xp;
      out.dupeRejected = (() => { const before = DB.progress.marks.length; document.querySelector('#markBtn').click(); return DB.progress.marks.length === before; })();
      // 摘抄页渲染
      go('marks');
      out.marksView = !document.querySelector('#v-marks').hidden;
      out.cardCount = document.querySelectorAll('.mk-card').length;
      out.copyBtn = !!document.querySelector('#mkCopy');
      // 删除一条
      if (document.querySelector('.mk-del')) { document.querySelector('.mk-del').click(); }
      out.afterDelete = DB.progress.marks.length;
      // 顺序切换 chip
      go('read');
      document.querySelector('#ordToggle').click();
      out.afterToggleOrder = DB.config.order;
      out.flowAfterToggle = flow()[0];
    } catch (e) { out.errors.push(String(e) + ' @ ' + (e.stack||'').split('\\n')[1]); }
    return out;
  })()`);
  console.log(JSON.stringify(result, null, 1));
  app.exit(result.errors && result.errors.length ? 1 : 0);
});
