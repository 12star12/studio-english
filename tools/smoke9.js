/* 冒烟：段落播放开关/段界、划选朗读+点击打断、双击查词、听力题下一题 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  win.webContents.on('render-process-gone', (e, d) => { console.log('RENDERER-GONE', d.reason); app.exit(1); });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const result = await win.webContents.executeJavaScript(`(async () => {
    const out = { errors: [] };
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    try {
      // mock 音频：getAudio 返回一个假 URL，跳过 TTS
      getAudio = async () => 'data:audio/mpeg;base64,';
      DB.articles = [{ id:'t1', date: TODAY, title:'Test', len: 200,
        paras:[
          {en:['The quiet harbor held its breath at dawn.'], zh:'安静的港湾在黎明屏息。'},
          {en:['Gulls wheeled above the sleeping boats.'], zh:'海鸥在沉睡的船上方盘旋。'}
        ],
        words:[{w:'harbor', p:'n.', zh:'港口'}],
        listening:[
          {q:'What held its breath?', opts:['The harbor','The gull','The boat','The wind'], a:0, exp:'第一句'},
          {q:'What did the gulls do?', opts:['sang','wheeled','slept','left'], a:1, exp:'第二句'}
        ],
        reading:{q:'',opts:['','','',''],a:0,exp:''}, translation:{sent:'',ref:''}, collocation:{coll:'',ref:''} }];
      openArticle(DB.articles[0]);
      await sleep(60);

      const para0 = document.querySelector('#artBody .para');
      const spk = para0.querySelector('.spk');

      // 1) 段落按钮：点=播，再点=停
      spk.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await sleep(80);
      out.spkPlaying = playing;               // true
      out.spkScope = playScope;               // 0（锁定第一段）
      spk.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      out.spkToggleStop = !playing;           // true

      // 2) 段界：段落播放到段尾自动停，不串到第二段
      spk.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await sleep(80);
      if (audioEl.onended) audioEl.onended(); // 模拟第一段最后一句播完
      out.chainStopsAtParaEnd = !playing;     // true（第二段不该接着播）

      // 3) 全文朗读无段界：第一句完 → 150ms 后接第二句
      document.querySelector('#readPlay').click();
      await sleep(80);
      if (audioEl.onended) audioEl.onended();
      await sleep(320);
      out.fullTextCrossesPara = playing && curIdx === 1; // true
      stopAudio();

      // 4) 划选自动朗读 + 点空白打断
      const sel = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(para0);
      sel.removeAllRanges(); sel.addRange(range);
      document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
      await sleep(80);
      out.selectionSpeaks = !!textAudio;      // true
      sel.removeAllRanges();
      para0.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await sleep(30);
      out.clickStopsSelection = !textAudio;   // true

      // 5) 双击 .w 词 → 查词浮窗（本地释义命中）
      const wSpan = para0.querySelector('.w');
      const range2 = document.createRange();
      range2.selectNodeContents(wSpan);
      sel.removeAllRanges(); sel.addRange(range2);
      para0.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
      await sleep(50);
      out.popVisible = !document.querySelector('#lkPop').hidden;
      out.popEn = document.querySelector('#lkEn').textContent;   // harbor
      out.popZh = document.querySelector('#lkZh').textContent;   // 港口
      // 浮窗里的喇叭
      document.querySelector('#lkSpk').click();
      await sleep(50);
      out.popSpeak = !!textAudio;             // true
      document.querySelector('#lkClose').click();
      out.popClosed = document.querySelector('#lkPop').hidden;

      // 6) 双击整句 → 走 AI 兜底（无 Key 时给提示而不是卡死）
      range.selectNodeContents(document.querySelectorAll('#artBody .para')[1]);
      sel.removeAllRanges(); sel.addRange(range);
      document.querySelectorAll('#artBody .para')[1].dispatchEvent(new MouseEvent('dblclick', { bubbles: true }));
      await sleep(60);
      out.sentencePopZh = document.querySelector('#lkZh').textContent.slice(0, 12); // 应含"本地没有"提示

      // 7) 听力题：下一题按钮
      go('listen');
      await sleep(30);
      out.qNextEnabledAtQ1 = !document.querySelector('#qNext').disabled;  // true
      document.querySelector('#qNext').click();
      out.qiAfterNext = qi;                   // 1
      out.progText = document.querySelector('#qProg').textContent;        // 2 / 2
      out.qNextDisabledAtQ2 = document.querySelector('#qNext').disabled;  // true
      document.querySelector('#qArea input[value="1"]').checked = true;
      document.querySelector('#qSubmit').click();
      out.q2ExpShown = !!document.querySelector('#qArea .exp');           // true
      out.submitDisabledAfter = document.querySelector('#qSubmit').disabled; // true
      out.toReadStillHidden = document.querySelector('#toRead').hidden;   // true（第1题还没答）
      // 回第一题：未答状态，没解析
      document.querySelector('#qPrev').click();
      out.backToQ1 = qi === 0 && !document.querySelector('#qArea .exp');  // true
      document.querySelector('#qArea input[value="0"]').checked = true;
      document.querySelector('#qSubmit').click();
      // 再回第二题：已答状态应恢复解析
      document.querySelector('#qNext').click();
      out.q2Restored = qi === 1 && !!document.querySelector('#qArea .exp'); // true
      out.toReadAfterAll = !document.querySelector('#toRead').hidden;    // true（两题都答完了）
    } catch (e) { out.errors.push(String(e) + ' @ ' + (e.stack || '').split('\\n')[1]); }
    return out;
  })()`);
  console.log(JSON.stringify(result, null, 1));
  const bad = result.errors && result.errors.length;
  for (const [k, v] of Object.entries(result)) {
    if (k !== 'errors' && v !== true && typeof v === 'boolean') console.log('FAIL:', k);
  }
  app.exit(bad ? 1 : 0);
});
