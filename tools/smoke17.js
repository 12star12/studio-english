/* 冒烟：答案解析显式声明优先级（fixQ） */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const r = await win.webContents.executeJavaScript(`(() => {
    const out = {};
    const mk = (a, exp) => fixQ({ q:'q?', opts:['A. one','B. two','C. three','D. four'], a, exp });
    // 用户截图里的原题：a=2(C) 但解析写 B
    out.screenshot = mk(2, 'The author emphasizes the lessons learned from the dot-com bubble burst, focusing on the dangers of market irrationality and the importance of regulation, making option B the correct answer.').a;
    out.enIsCorrect = mk(3, 'Option A is wrong; option B is correct because the passage says so.').a;
    out.enAnswerIs = mk(0, 'The correct answer is C.').a;
    out.enAnswerColon = mk(1, 'Answer: D').a;
    out.zh = mk(0, '文章明确说的是B选项，故选B。').a;
    out.zh2 = mk(2, '正确答案是A，因为第一段就提到了。').a;
    // 回归：越界下标仍收进合法范围
    out.oob = mk(4, '').a;
    // 回归：无声明时靠内容唯一命中
    out.content = fixQ({q:'q?',opts:['A. 50 years','B. 100 years','C. 20 years','D. 5 years'],a:0,exp:'解析说 it is 100 years old'}).a;
    // 回归：两者都没有时保持原 a
    out.keep = mk(2, '这是一段没有任何答案提示的解析。').a;
    return out;
  })()`);
  console.log(JSON.stringify(r, null, 1));
  const ok = r.screenshot === 1 && r.enIsCorrect === 1 && r.enAnswerIs === 2 && r.enAnswerColon === 3
    && r.zh === 1 && r.zh2 === 0 && r.oob === 3 && r.content === 1 && r.keep === 2;
  app.exit(ok ? 0 : 1);
});
