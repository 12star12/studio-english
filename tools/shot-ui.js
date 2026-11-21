/* 真渲染截图：检查卡通主题各页面效果 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');
app.disableHardwareAcceleration();

const OUT = path.join(__dirname, 'ui-shots');
fs.mkdirSync(OUT, { recursive: true });

app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false, width: 1280, height: 860 });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 500));

  // 造一篇文章，让各页面有内容
  await win.webContents.executeJavaScript(`(() => {
    getAudio = async () => null;
    const art = { id:'ui1', date:TODAY, title:'The Power of a Small Habit', len:200, topic:'心理',
      paras:[
        {en:['A small habit can reshape a life in ways that dramatic resolutions rarely do.','Psychologists describe this quiet power as the compounding effect of daily repetition.','What matters is not intensity but the unglamorous decision to return each morning.'],zh:'一个微小的习惯，能以宏大决心难以企及的方式重塑人生。'},
        {en:['Consider the student who reads one page of English before sleeping every night.','After a year, the pages accumulate into hundreds of unfamiliar words and ideas.','The transformation feels accidental, yet it was built from deliberate repetition.'],zh:'想想那个每晚睡前读一页英文的学生。'}
      ],
      words:[{w:'accumulate',p:'v.',zh:'积累'},{w:'deliberate',p:'adj.',zh:'刻意的'}],
      listening:[
        {q:'What does the passage say about small habits?',opts:['A. They are too weak to matter','B. They work through repetition','C. They require great intensity','D. They replace all resolutions'],a:1,exp:'第一段强调日常重复的复利效应。'},
        {q:'What is the student example meant to show?',opts:['A. Reading at night is healthier','B. One page is enough for六级','C. Small acts build up over time','D. Sleep improves memory'],a:2,exp:'一年后页数积累成词与想法。'}
      ],
      reading:{q:'What is the author’s attitude toward dramatic resolutions?',opts:['A. Enthusiastic','B. Skeptical','C. Indifferent','D. Amused'],a:1,exp:'作者认为宏大决心不如微小习惯可靠。'},
      translation:{en:'What matters is not intensity but the unglamorous decision to return each morning.',ref:'重要的不是强度，而是每天早上重新坐下来的朴素决定。',frame:'not...but...结构',err:'把 unglamorous 误译为“不光彩”'},
      collocation:{ph:'compounding effect',zh:'复利效应',ex:'the compounding effect of daily repetition',demo:'Knowledge grows through the compounding effect of daily practice.',frame:'常与 of 连用'} };
    DB.articles=[art]; DB.config.topic='心理';
    openArticle(art);
  })()`);

  async function shot(name, js, view) {
    if (js) await win.webContents.executeJavaScript(js);
    if (view) await win.webContents.executeJavaScript(`
      document.querySelectorAll('section[id^="v-"]').forEach(s => s.hidden = s.id !== 'v-' + ${JSON.stringify(view)});`);
    await new Promise(r => setTimeout(r, 900));
    if (view) console.log('view check:', view, await win.webContents.executeJavaScript(
      `document.querySelector('#v-' + ${JSON.stringify(view)}).hidden`));
    win.showInactive();
    await new Promise(r => setTimeout(r, 250));
    const buf = await win.webContents.capturePage();
    win.hide();
    fs.writeFileSync(path.join(OUT, name + '.png'), buf.toPNG());
    console.log('shot:', name);
  }

  await shot('01-home', `go('home')`);
  await shot('02-listen', `go('listen')`);
  await shot('03-read', `typeof renderArticle === 'function' ? renderArticle() : null`, 'read');
  await shot('04-guess', `startGuess(); go('guess')`);
  await shot('05-train', `typeof renderTrain === 'function' ? renderTrain() : null`, 'train');
  await shot('06-done', `go('done')`);
  await shot('08-library', `go('library')`);
  app.exit(0);
});
