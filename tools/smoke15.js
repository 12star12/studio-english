/* 冒烟：空草稿 + 阅读完成状态 + 事实/防重复提示词 */
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
      DB.config.topic = '文学';
      DB.progress.trans = '上篇文章的答案';   // 全局残留
      DB.progress.coll = '上篇的答案';
      const art = { id:'t1', date: TODAY, title:'T', len: 200,
        paras:[{en:['Sentence one here with enough words to count for the test.'], zh:''}],
        words:[], listening:[{q:'q?',opts:['a','b','c','d'],a:0,exp:''},{q:'q?',opts:['a','b','c','d'],a:1,exp:''}],
        reading:{q:'attitude?',opts:['A. Neg','B. Pos','C. Neutral','D. Critical'],a:2,exp:'解析'},
        translation:{en:'Long sentence',ref:'ref',frame:'frame',err:'err'},
        collocation:{ph:'bridge the gap',zh:'弥合',ex:'ex',demo:'demo',frame:'frame'} };
      DB.articles = [art];
      getAudio = async () => null;
      openArticle(art);
      go('train');
      // 1. 输入框应为空，不预填全局残留/答案
      out.tEmpty = document.querySelector('#tInput').value === '';
      out.cEmpty = document.querySelector('#cInput').value === '';
      // 2. 草稿按文章存
      document.querySelector('#tInput').value = '我的翻译';
      document.querySelector('#tInput').dispatchEvent(new Event('input', {bubbles:true}));
      out.draftSaved = art._tDraft === '我的翻译';
      // 3. 阅读题答错也算完成：选 A（正确 C）
      const radios = document.querySelectorAll('#ropts input');
      radios[0].checked = true;
      document.querySelector('#rSubmit').click();
      out.rDone = art._rDone === true && art._rRight === 0;
      // 4. 重开文章后状态恢复
      openArticle(art); go('train');
      out.restored = document.querySelector('#ropts input[value="0"]').checked === true && !document.querySelector('#rAns').hidden;
      out.draftRestored = document.querySelector('#tInput').value === '我的翻译';
      // 5. 完成页阅读显示 ✓（答错也算做过）
      document.querySelector('#toDone').click();
      out.doneMark = document.querySelector('#d-read').textContent;
      // 6. 提示词：事实准确性 + 段落分工
      const p = buildPrompt().messages[1].content;
      out.factRule = p.includes('严禁编造次要人物') && p.includes('事实准确性');
      out.structRule = p.includes('段落分工') && p.includes('严禁把同一观点换词重复');
      return out;
    } catch (e) { return { FATAL: String(e) + ' @ ' + (e.stack||'').split('\\n')[1] }; }
  })()`);
  console.log(JSON.stringify(r, null, 1));
  const ok = r.tEmpty && r.cEmpty && r.draftSaved && r.rDone && r.restored && r.draftRestored && r.doneMark === '✓' && r.factRule && r.structRule;
  app.exit(ok ? 0 : 1);
});
