/* 冒烟：题目兜底 fixQ + normalize + 旧数据加载修复 */
const { app, BrowserWindow } = require('electron');
const path = require('path');
app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const win = new BrowserWindow({ show: false });
  await win.loadFile(path.join(__dirname, '..', 'index.html'));
  await new Promise(r => setTimeout(r, 400));
  const r = await win.webContents.executeJavaScript(`(() => {
    const out = {};
    // 1. 用户截图里的坏题：4 个选项、a=4 → 应收进 D(3)
    const bad = normalize({ title:'t', paras:[{en:['One two three four five six.']}], listening:[{ q:'What is the key factor?', opts:['A. Financial resources','B. Business connections','C. Technical skills','D. Ethical judgment'], a:4, exp:'x' }] });
    out.fixedA = bad.listening[0].a;                 // 期望 3（D）
    out.letter = String.fromCharCode(65 + bad.listening[0].a); // 期望 'D'
    // 2. 模型给 1-based 序号 a=1 表示第一题答案 → 1-based 情况下 a=1 且选项4个，无法区分，但越界才会触发
    const bad2 = normalize({ title:'t', paras:[{en:['One two three four five six.']}], listening:[{ q:'q?', opts:['x','y','z','w'], a:9, exp:'' }] });
    out.clamped9 = bad2.listening[0].a;              // 期望 3
    // 3. 选项里混空串/超 4 项
    const bad3 = normalize({ title:'t', paras:[{en:['One two three four five six.']}], listening:[{ q:'q?', opts:['a','','b','c','d','e'], a:0, exp:'' }] });
    out.optsLen = bad3.listening[0].opts.length;     // 期望 4
    // 4. 阅读题同样修复
    const bad4 = normalize({ title:'t', paras:[{en:['One two three four five six.']}], listening:[{q:'q?',opts:['a','b','c','d'],a:0,exp:''}], reading:{ q:'q?', opts:['a','b','c','d'], a:7, exp:'' } });
    out.readingA = bad4.reading.a;                   // 期望 3
    // 5. 完全坏掉的题被剔除
    const bad5 = normalize({ title:'t', paras:[{en:['One two three four five six.']}], listening:[null,{q:'',opts:['a'],a:0,exp:''},{q:'ok?',opts:['a','b'],a:1,exp:''}] });
    out.survived = bad5.listening.length;            // 期望 1
    return out;
  })()`);
  console.log(JSON.stringify(r, null, 1));
  const ok = r.fixedA === 3 && r.letter === 'D' && r.clamped9 === 3 && r.optsLen === 4 && r.readingA === 3 && r.survived === 1;
  app.exit(ok ? 0 : 1);
});
