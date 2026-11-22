/* 把 tools/gloss-generated.json 合并进 words.js 的 CET6_GLOSS
   - 手写释义优先，不覆盖
   - 校验过的生成释义追加进去
   - 自动备份原 words.js 为 words.js.bak
*/
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const WORDS = path.join(ROOT, 'words.js');
const GEN = path.join(__dirname, 'gloss-generated.json');

const gen = JSON.parse(fs.readFileSync(GEN, 'utf8'));
const src = fs.readFileSync(WORDS, 'utf8');
const gm = src.match(/const CET6_GLOSS = \{([\s\S]*?)\n\};/);
if (!gm) { console.error('找不到 CET6_GLOSS'); process.exit(1); }

// 现有手写释义
const hand = {};
const re = /['"]([a-z'-]+)['"]\s*:\s*['"]([^'"]*)['"]/g;
let x;
while ((x = re.exec(gm[1]))) hand[x[1]] = x[2];

// 只取生成结果里干净、非空的
const add = {};
Object.entries(gen).forEach(([w, zh]) => {
  if (!/^[a-z][a-z'-]*$/.test(w)) return;
  if (hand[w]) return; // 手写优先
  const z = String(zh || '').trim();
  if (!z || z.length > 60 || !/[\u4e00-\u9fa5]/.test(z)) return;
  add[w] = z.replace(/'/g, "\\'").replace(/\\/g, '\\\\');
});

// 键名和值里的单引号都要转义（如 o'clock）
const q = s => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const entries = Object.entries(add).map(([w, zh]) => `  '${q(w)}': '${q(zh)}'`);
if (!entries.length) { console.log('没有可合并的新释义'); process.exit(0); }

// 插入到 CET6_GLOSS 结尾对象前（注意：手写块最后一条可能已带逗号，避免产生孤立逗号）
const insertAt = gm.index + gm[0].lastIndexOf('\n}');
let before = src.slice(0, insertAt);
const after = src.slice(insertAt);
before = before.replace(/,\s*$/, '');           // 去掉尾部逗号
const block = ',\n' + entries.join(',\n');
const out = before + block + after;

fs.copyFileSync(WORDS, WORDS + '.bak');
fs.writeFileSync(WORDS, out);
console.log(`合并完成：新增 ${entries.length} 条释义（原 ${Object.keys(hand).length} → ${Object.keys(hand).length + entries.length}）`);
console.log('原文件已备份为 words.js.bak');
