/* 冒烟：先读后听全链路——推进按钮必须真正进入猜词/训练 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const r = await win.webContents.executeJavaScript(`(() => { try {
    const out = {};
    DB.config.order = 'read';
    DB.config.steps = { listen: true, guess: true, train: true };
    DB.articles = [{ id:'t1', date: TODAY, title:'Test', len: 200,
      paras:[{en:['The quiet harbor held its breath at dawn.','A second sentence for good measure.'], zh:''}],
      words:[{w:'harbor', p:'n.', zh:'港口'},{w:'breath', p:'n.', zh:'呼吸'}],
      listening:[{q:'q1?',opts:['a','b','c','d'],a:0,exp:'e'},{q:'q2?',opts:['a','b','c','d'],a:1,exp:'e'}],
      reading:{q:'q?',opts:['a','b','c','d'],a:0,exp:''}, translation:{sent:'',ref:''}, collocation:{coll:'',ref:''} }];
    getAudio = async () => null;
    openArticle(DB.articles[0]);
    out.entry = document.querySelector('#v-read').hidden ? 'NOT-READ' : 'read';
    // 1. 阅读页主按钮 → 应到听力页
    document.querySelector('#toGuess').click();
    out.afterReadCTA = document.querySelector('#v-listen').hidden ? 'NOT-LISTEN' : 'listen';
    // 2. 听力页"跳过" → 必须真正初始化猜词（旧 bug：go('guess') 得到空页）
    document.querySelector('#skipListen').click();
    out.afterSkip = document.querySelector('#v-guess').hidden ? 'NOT-GUESS' : 'guess';
    out.guessCard = document.querySelector('#gCard') ? document.querySelector('#gCard').textContent.slice(0,20) : null;
    out.guessItems = GUESS.items.length;   // 期望 2
    // 3. 猜词答完（每题答完需点"下一个"推进）→ 进入训练
    for (let i = 0; i < GUESS.items.length; i++) { answerGuess(GUESS.items[GUESS.i].a); document.querySelector('#gNext').click(); }
    out.guessDoneShown = !!document.querySelector('#gToTrain');
    document.querySelector('#gToTrain').click();
    out.afterGuess = document.querySelector('#v-train').hidden ? 'NOT-TRAIN' : 'train';
    // 4. 训练页可见且有翻译输入框
    out.tInput = !!document.querySelector('#tInput');
    // 5. 路径二：听力答完所有题后 toRead 也应进猜词
    openArticle(DB.articles[0]);
    document.querySelector('#toGuess').click(); // → listen
    qi = 0; answered = []; picked = [];
    renderQ();
    for (let k = 0; k < DB.articles[0].listening.length; k++) {
      document.querySelector('#qArea input').checked = true;
      document.querySelector('#qSubmit').click();
      if (k < DB.articles[0].listening.length - 1) document.querySelector('#qNext').click();
    }
    out.toReadVisible = !document.querySelector('#toRead').hidden;
    document.querySelector('#toRead').click();
    out.afterToRead = document.querySelector('#v-guess').hidden ? 'NOT-GUESS' : 'guess';
    out.guessItems2 = GUESS.items.length;   // 期望 2
    return out;
    } catch (e) { return { FATAL: String(e) + ' @ ' + (e.stack || '').split('\\n').slice(1,3).join(' | ') }; }
  })()`);
  console.log(JSON.stringify(r, null, 1));
  const ok = r.entry === 'read' && r.afterReadCTA === 'listen' && r.afterSkip === 'guess' && r.guessItems === 2 &&
             r.guessDoneShown && r.afterGuess === 'train' && r.tInput && r.toReadVisible && r.afterToRead === 'guess' && r.guessItems2 === 2;
  app.exit(ok ? 0 : 1);
});
