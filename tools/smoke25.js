/* 冒烟：题目即时自洽 / 听力原文展开 / 示范句人称提示 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const r = await win.webContents.executeJavaScript(`(() => {
    const out = {};
    // 1. 打开文章即时洗题：解析说选B，a 标成 C
    const art = { id:'t25', date:TODAY, title:'T', len:100,
      paras:[{en:['A sentence with enough words to be counted here.'],zh:'翻译'}],
      words:[],
      listening:[{q:'q',opts:['A. one','B. two','C. three','D. four'],a:2,exp:'因此选B。'}],
      reading:{q:'attitude?',opts:['A. one','B. two','C. three','D. four'],a:2,exp:'这表明持积极态度，因此选B。'},
      translation:{en:'x',ref:'x',frame:'x',err:'x'},
      collocation:{ph:'shatter dreams',zh:'使梦想破灭',ex:'x',demo:'The loss of his job shattered my confidence in his own abilities.',frame:'x'} };
    DB.articles=[art];
    openArticle(art);
    out.listenFixed = cur.listening[0].a === 1;
    out.readFixed = cur.reading.a === 1;
    // 2. 听力原文就地展开
    const btn = document.querySelector('#toggleListenScript');
    out.btnExists = !!btn;
    btn.click();
    out.scriptShown = !document.querySelector('#listenScript').hidden;
    out.sentCount = document.querySelectorAll('#listenScript .ls-sent').length;
    out.speakable = !!document.querySelector('#listenScript .ls-spk');
    btn.click();
    out.scriptHidden = document.querySelector('#listenScript').hidden;
    // 3. 示范句人称提示
    go('train');
    document.querySelector('#cShow').click();
    out.demoWarn = /人称可能不一致/.test(document.querySelector('#cAns').innerHTML);
    // 改写一致的人称不报警
    cur.collocation.demo = 'The loss of his job shattered his confidence in his own abilities.';
    go('train'); document.querySelector('#cShow').click();
    out.demoNoWarn = !/人称可能不一致/.test(document.querySelector('#cAns').innerHTML);
    return out;
  })()`);
  console.log(JSON.stringify(r, null, 1));
  const ok = r.listenFixed && r.readFixed && r.btnExists && r.scriptShown && r.sentCount === 1
    && r.speakable && r.scriptHidden && r.demoWarn && r.demoNoWarn;
  app.exit(ok ? 0 : 1);
});
