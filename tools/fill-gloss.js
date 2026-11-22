/* 批量补全 CET6 词库中文释义
   数据源：智谱 GLM-4-Flash（免费）；结果写入 gloss-generated.json（断点续传）
   用法：node tools/fill-gloss.js [每批词数]  （默认 100）
*/
'use strict';
const fs = require('fs');
const path = require('path');
const db = JSON.parse(fs.readFileSync(path.join(process.env.APPDATA, 'cet6-studio', 'data.json'), 'utf8'));
const KEY = db.config.apiKey, BASE = (db.config.baseUrl || 'https://open.bigmodel.cn/api/paas/v4').replace(/\/+$/, '');
const MODEL = 'glm-4-flash';
const BATCH = Math.max(20, Math.min(150, +(process.argv[2] || 100)));
const ROOT = path.join(__dirname, '..');
const OUT = path.join(__dirname, 'gloss-generated.json');
const PROGRESS = path.join(__dirname, 'gloss-progress.json');

// 1. 从 words.js 抽取全部词头（复用 app 里的 CET6_WORDS 逻辑，但这里独立解析字符串）
const src = fs.readFileSync(path.join(ROOT, 'words.js'), 'utf8');
const m = src.match(/const CET6_RAW = `([\s\S]*?)`;/);
if (!m) { console.error('找不到 CET6_RAW'); process.exit(1); }
const allWords = [...new Set(m[1].split('\n').map(l => l.split('\t')[0].trim().toLowerCase())
  .filter(w => /^[a-z][a-z'-]*$/.test(w)))];

// 2. 已有释义：手写 CET6_GLOSS + 已生成结果 + 用户词库里的释义
const hand = {};
const gm = src.match(/const CET6_GLOSS = \{([\s\S]*?)\n\};/);
if (gm) {
  const re = /['"]([a-z'-]+)['"]\s*:\s*['"]([^'"]*)['"]/g;
  let x; while ((x = re.exec(gm[1]))) hand[x[1]] = x[2];
}
let generated = {};
if (fs.existsSync(OUT)) { try { generated = JSON.parse(fs.readFileSync(OUT, 'utf8')); } catch (e) { console.error('结果文件损坏，将重新开始'); } }
let doneBatches = [];
if (fs.existsSync(PROGRESS)) { try { doneBatches = JSON.parse(fs.readFileSync(PROGRESS, 'utf8')); } catch (e) { } }

const userZh = {};
try {
  const data = JSON.parse(fs.readFileSync(path.join(process.env.APPDATA, 'cet6-studio', 'data.json'), 'utf8'));
  Object.entries(data.words || {}).forEach(([w, r]) => { if (r && r.zh) userZh[w] = r.zh; });
  (data.books || []).forEach(b => (b.words || []).forEach(x => { if (x.w && x.zh) userZh[x.w] = x.zh; }));
} catch (e) { }

const have = w => !!(hand[w] || generated[w] || userZh[w]);
const todo = allWords.filter(w => !have(w));
console.log(`总词数 ${allWords.length} · 已有释义 ${allWords.length - todo.length} · 待补 ${todo.length} · 每批 ${BATCH}`);

function parseJSON(t) {
  let s = String(t).trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
  const a = s.indexOf('{'), b = s.lastIndexOf('}');
  if (a < 0 || b < 0) return null;
  try { return JSON.parse(s.slice(a, b + 1)); } catch (e) { return null; }
}
function cleanZh(s) {
  if (s == null) return '';
  let z = String(s).trim()
    .replace(/^[a-zA-Z][a-zA-Z\s,;:()./-]*$/g, '')   // 纯英文释义丢掉
    .replace(/[\[\]【】《》]/g, '')
    .replace(/^\d+[\.、]\s*/, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (!z || z.length > 60 || !/[\u4e00-\u9fa5]/.test(z)) return '';
  return z.slice(0, 60);
}

async function callAPI(words, attempt = 1) {
  const r = await fetch(BASE + '/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + KEY },
    body: JSON.stringify({
      model: MODEL, temperature: 0.25, max_tokens: 4096,
      messages: [
        { role: 'system', content: '你是英汉词典编纂专家。把英语单词翻译成中文释义。只输出严格合法的JSON对象，不要markdown代码块，不要任何解释。' },
        { role: 'user', content: `把这些词翻译成中文释义：${words.join(', ')}\n\n要求：每个词给最核心的1-2个中文义项，用中文分号「；」分隔；只要中文，不要英文、音标、例句；释义简洁（每个词不超过20个汉字）；JSON格式 {"word":"释义", ...}，必须包含全部 ${words.length} 个词，词头保持小写原样。` }
      ]
    })
  });
  if (r.status === 429) {
    if (attempt <= 3) { console.log(`  限流，${attempt * 4}s 后重试…`); await new Promise(r => setTimeout(r, attempt * 4000)); return callAPI(words, attempt + 1); }
    throw new Error('API 持续限流');
  }
  const j = await r.json();
  if (!j.choices || !j.choices[0]) throw new Error('API 无返回: ' + JSON.stringify(j).slice(0, 120));
  return parseJSON(j.choices[0].message.content);
}

const CONCURRENCY = 5; // 并发路数（智谱免费档 ~30 QPS，5 路安全）

async function processBatch(bi, chunk) {
  let obj = null;
  try { obj = await callAPI(chunk); }
  catch (e) { console.log(`批 ${bi + 1} 失败: ${e.message}`); return { bi, n: 0, err: true }; }
  let n = 0;
  chunk.forEach(w => {
    const zh = cleanZh(obj && (obj[w] || obj[w.toUpperCase()] || obj[w.charAt(0).toUpperCase() + w.slice(1)]));
    if (zh) { generated[w] = zh; n++; }
  });
  return { bi, n, err: false };
}

(async () => {
  const batches = [];
  for (let i = 0; i < todo.length; i += BATCH) batches.push(todo.slice(i, i + BATCH));
  const pending = batches.map((chunk, bi) => ({ bi, chunk })).filter(x => !doneBatches.includes(x.bi));
  console.log(`共 ${batches.length} 批 · 待处理 ${pending.length} 批 · 并发 ${CONCURRENCY}`);
  let filled = 0, failed = 0;
  for (let g = 0; g < pending.length; g += CONCURRENCY) {
    const group = pending.slice(g, g + CONCURRENCY);
    const results = await Promise.all(group.map(x => processBatch(x.bi, x.chunk)));
    results.forEach(r => {
      if (r.err) failed++;
      else { filled += r.n; doneBatches.push(r.bi); }
    });
    fs.writeFileSync(OUT, JSON.stringify(generated, null, 1));
    fs.writeFileSync(PROGRESS, JSON.stringify(doneBatches));
    console.log(`进度 ${Math.min(g + CONCURRENCY, pending.length)}/${pending.length} · 本组 +${results.reduce((s, r) => s + r.n, 0)} · 累计 ${Object.keys(generated).length}`);
  }
  console.log(`\n完成：本轮新增 ${filled} 条 · 失败批次 ${failed} · 生成文件共 ${Object.keys(generated).length} 条`);
})();
