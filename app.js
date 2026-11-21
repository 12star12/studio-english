/* Studio - AI English Studio */
'use strict';

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function dstr(d = new Date()) {
  const p = n => String(n).padStart(2, '0');
  return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
}
const TODAY = dstr();

const PROVIDERS = {
  zhipu: { name: '智谱 GLM（推荐·永久免费）', baseUrl: 'https://open.bigmodel.cn/api/paas/v4', model: 'glm-4-flash', note: '国内直连，GLM-4-Flash 永久免费，注册即用' },
  silicon: { name: '硅基流动', baseUrl: 'https://api.siliconflow.cn/v1', model: 'Qwen/Qwen2.5-7B-Instruct', note: '部分小模型长期免费，速度较快' },
  doubao: { name: '火山方舟（豆包）', baseUrl: 'https://ark.cn-beijing.volces.com/api/v3', model: 'doubao-1-5-lite-32k-250115', note: '每天约 200 万 tokens，需先在控制台开通模型' },
  openrouter: { name: 'OpenRouter（需网络）', baseUrl: 'https://openrouter.ai/api/v1', model: 'deepseek/deepseek-chat-v3:free', note: '有 :free 模型，国内需自行解决网络' },
  custom: { name: '自定义 OpenAI 兼容接口', baseUrl: '', model: '', note: '任何 OpenAI 兼容的 base_url 都可以' }
};

const DEFAULT_DB = {
  config: {
    provider: 'zhipu', baseUrl: PROVIDERS.zhipu.baseUrl, apiKey: '', model: PROVIDERS.zhipu.model,
    interests: ['金融与商业', '科技', '艺术', '文学'],
    length: 250, topic: 'auto', accent: 'en-US', rate: 1, voice: 'en-US-AriaNeural',
    steps: { listen: true, guess: true, train: true }, order: 'read', cfgV: 2
  },
  articles: [], words: {}, books: [],
  progress: { xp: 0, listenLog: [], readLog: [], guessLog: [], days: {}, doneIds: [], trans: '', coll: '', achievements: {}, marks: [] }
};

let DB = JSON.parse(JSON.stringify(DEFAULT_DB));
let cur = null;          // 当前文章
let curIdx = 0, playing = false, loop = -1;

const ACHIEVEMENTS = [
  { id: 'first', icon: '🌱', name: '第一篇', desc: '读完第一篇文章', test: s => s.articles.filter(a => a.done).length >= 1 },
  { id: 'w10', icon: '📚', name: '十词', desc: '收集 10 个词', test: s => Object.keys(s.words).length >= 10 },
  { id: 'w50', icon: '🗂', name: '五十词', desc: '收集 50 个词', test: s => Object.keys(s.words).length >= 50 },
  { id: 'w100', icon: '💎', name: '百词', desc: '收集 100 个词', test: s => Object.keys(s.words).length >= 100 },
  { id: 'a5', icon: '📖', name: '五篇', desc: '读完 5 篇文章', test: s => s.articles.filter(a => a.done).length >= 5 },
  { id: 'a20', icon: '🏛', name: '二十篇', desc: '读完 20 篇文章', test: s => s.articles.filter(a => a.done).length >= 20 },
  { id: 'perfect', icon: '🎯', name: '全对', desc: '听力题一次全对', test: s => s.progress.listenLog.length >= 2 && s.progress.listenLog.slice(-2).every(x => x) },
  { id: 'sentence', icon: '✍️', name: '第一次造句', desc: '用搭配写出一个句子', test: s => !!s.progress.coll },
  { id: 'days5', icon: '🔥', name: '五天', desc: '在不同的 5 天里学习', test: s => Object.keys(s.progress.days).length >= 5 },
  { id: 'lv5', icon: '⭐', name: 'Lv.5', desc: '达到 5 级', test: s => level(s.progress.xp).lv >= 5 },
  { id: 'lv10', icon: '🌟', name: 'Lv.10', desc: '达到 10 级', test: s => level(s.progress.xp).lv >= 10 },
  { id: 'long', icon: '🧗', name: '啃下长文', desc: '读完一篇 400 词的长文', test: s => s.articles.some(a => a.done && a.len >= 380) },
  { id: 'first3', icon: '✅', name: '第一个三勾', desc: '有一个词拿到三个勾', test: s => Object.values(s.words).some(w => (w.checks || 0) >= 3) },
  { id: 'm10', icon: '🌾', name: '十个掌握', desc: '10 个词达到初步掌握', test: s => Object.values(s.words).filter(w => (w.checks || 0) >= 3).length >= 10 },
  { id: 'm50', icon: '🏅', name: '五十个掌握', desc: '50 个词达到初步掌握', test: s => Object.values(s.words).filter(w => (w.checks || 0) >= 3).length >= 50 },
  { id: 'guesser', icon: '🎲', name: '一轮全中', desc: '猜词全部答对', test: s => s.progress.guessLog.some(g => g.total >= 5 && g.right === g.total) }
];

/* ---------------- 存储 ---------------- */
function save() {
  if (window.studio && window.studio.saveDB) window.studio.saveDB('data', DB);
  else localStorage.setItem('studio-db', JSON.stringify(DB));
  renderSideLevel();
}
async function boot() {
  const bf = $('#bookFile');
  if (bf) bf.onchange = e => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const rd = new FileReader();
    rd.onload = () => importBook(String(rd.result || ''), f.name.replace(/\.[^.]+$/, ''));
    rd.readAsText(f, 'utf-8');
    e.target.value = '';
  };

  let data = null;
  if (window.studio && window.studio.loadDB) data = await window.studio.loadDB('data');
  else {
    try { data = JSON.parse(localStorage.getItem('studio-db')); } catch (e) { data = null; }
  }
  if (data && data.config) {
    DB = Object.assign(JSON.parse(JSON.stringify(DEFAULT_DB)), data);
    DB.config = Object.assign({}, DEFAULT_DB.config, data.config || {});
    DB.progress = Object.assign({}, DEFAULT_DB.progress, data.progress || {});
    // 一次性迁移：老数据里 order 是旧默认 listen（从未被主动选过）——按用户意愿改为先读后听
    if (!DB.config.cfgV) { DB.config.order = 'read'; DB.config.cfgV = 2; save(); }
    // 题目兜底：洗掉历史文章里 AI 写坏的题（答案下标越界等）
    DB.articles.forEach(a => {
      a.listening = (a.listening || []).map(fixQ).filter(Boolean);
      if (a.reading) { const r = fixQ(a.reading); if (r) a.reading = r; }
    });
  }
  renderHome();
  renderSideLevel();
  const h = new Date().getHours();
  $('#greet').textContent = h < 6 ? '这么晚还没睡，读一小段就去休息吧'
    : h < 11 ? '早上好，今天也为自己留一点时间吧'
    : h < 14 ? '中午好，读一小段换换脑子'
    : h < 19 ? '今天也加油呀'
    : '晚上好，读一小段就够';
  if (!DB.config.apiKey) {
    $('#greetSub').textContent = '还差一步：在设置里填一个免费 Key，就能每天自动生成文章了。';
  }
}

/* ---------------- 等级 ---------------- */
function level(xp) {
  const per = 120;
  const lv = Math.floor(xp / per) + 1;
  return { lv, cur: xp % per, need: per, pct: (xp % per) / per * 100 };
}
function renderSideLevel() {
  const L = level(DB.progress.xp || 0);
  $('#lvlMini').textContent = 'Lv.' + L.lv;
  $('#xpMini').textContent = (DB.progress.xp || 0) + ' XP';
  const b = $('#lvlBadge .lvl-num'); if (b) b.textContent = L.lv;
  const f = $('#xpFill'); if (f) f.style.width = L.pct + '%';
  const n = $('#xpNum'); if (n) n.textContent = L.cur + ' / ' + L.need + ' XP';
}

/* ---------------- 视图 ---------------- */
function go(v) {
  stopAudio();
  const lp = $('#lkPop'); if (lp) lp.hidden = true;
  ['home', 'listen', 'read', 'guess', 'train', 'done', 'library', 'words', 'study', 'marks', 'growth', 'settings']
    .forEach(k => { const el = $('#v-' + k); if (el) el.hidden = k !== v; });
  $$('#nav a').forEach(a => a.classList.toggle('on', a.dataset.v === v));
  if (v === 'library') renderLibrary();
  if (v === 'guess') renderGuess();
  if (v === 'words') renderWords();
  if (v === 'study') renderStudy();
  if (v === 'marks') renderMarks();
  if (v === 'growth') renderGrowth();
  if (v === 'settings') renderSettings();
  if (v === 'home') renderHome();
  $('#main').scrollTop = 0;
}
document.addEventListener('click', e => {
  const nav = e.target.closest('#nav a');
  if (nav) { go(nav.dataset.v); return; }
  const g = e.target.closest('[data-go]');
  if (g) { go(g.dataset.go); return; }
});

/* ---------------- 首页 ---------------- */
function todayArticle() {
  return DB.articles.find(a => a.date === TODAY) || null;
}

function renderHome() {
  const L = level(DB.progress.xp || 0);
  $('#lvlBadge .lvl-num').textContent = L.lv;
  $('#xpFill').style.width = L.pct + '%';
  $('#xpNum').textContent = L.cur + ' / ' + L.need + ' XP';

  const done = DB.articles.filter(a => a.done).length;
  $('#msArticles').textContent = done;
  $('#msWords').textContent = Object.keys(DB.words).length;
  const mEl = $('#msMastered');
  if (mEl) mEl.textContent = Object.values(DB.words).filter(w => (w.checks || 0) >= 3).length;
  const ll = DB.progress.listenLog;
  const accEl = $('#msAcc');
  if (accEl) accEl.textContent = ll.length ? Math.round(ll.reduce((a, b) => a + b, 0) / ll.length * 100) + '%' : '—';

  renderSpark();
  renderCollectionPreview();
  renderCollFoot();
  renderToday();
}

function renderToday() {
  const a = todayArticle();
  const box = $('#todayBody');
  $('#todayTag').textContent = a ? (a.done ? '今天已完成' : '待读') : '还没生成';

  if (!a) { box.innerHTML = genFormHTML(); bindGenForm(); return; }

  const img = artThumb(a.topic);
  box.innerHTML = `
    <div class="today-mini">
      <div class="today-thumb">${img}</div>
      <div class="today-info">
        <h2>${esc(a.title)}</h2>
        <div class="preview">${esc((a.paras[0] && a.paras[0].en.join(' ')) || '')}</div>
        <div class="tags">
          <span class="pill">${esc(a.topic || '综合')}</span>
          <span class="pill">${a.len} 词</span>
          <span class="pill">约 ${Math.max(6, Math.round(a.len / 22) + 5)} 分钟</span>
          ${a.done ? '<span class="pill" style="color:#4E7A3C;background:#EDF7E8">已完成</span>' : ''}
        </div>
        <div class="today-acts">
          <button class="btn b sm" id="continueBtn">${a.done ? '再读一遍' : '继续读'}</button>
          <button class="btn sm" id="regenBtn">换一篇</button>
        </div>
      </div>
    </div>`;
  $('#continueBtn').onclick = () => openArticle(a);
  $('#regenBtn').onclick = () => {
    DB.articles = DB.articles.filter(x => x.id !== a.id);
    save(); renderToday();
  };
}

function genFormHTML() {
  const LEN = [
    { n: 100, t: '超短', d: '一分钟' },
    { n: 150, t: '短', d: '碎片时间' },
    { n: 250, t: '中', d: '日常一篇' },
    { n: 400, t: '长', d: '深度阅读' }
  ];
  const cfg = DB.config;
  return `
    <div class="gen-empty">
      <div>
        <div class="card-h" style="margin-bottom:9px;font-size:12px;color:var(--sub);font-weight:400">今天想读多长</div>
        <div class="len-row">
          ${LEN.map(x => `<div class="len-opt ${cfg.length === x.n ? 'on' : ''}" data-len="${x.n}">
            <b>${x.t} · ${x.n} 词</b><span>${x.d}</span></div>`).join('')}
        </div>
      </div>
      <div>
        <div class="card-h" style="margin-bottom:9px;font-size:12px;color:var(--sub);font-weight:400">写什么</div>
        <div class="topic-row">
          <div class="topic ${cfg.topic === 'auto' ? 'on' : ''}" data-topic="auto">让我挑</div>
          ${cfg.interests.map(t => `<div class="topic ${cfg.topic === t ? 'on' : ''}" data-topic="${esc(t)}">${esc(t)}</div>`).join('')}
        </div>
      </div>
      <div class="gen-actions">
        <button class="btn b" id="genBtn">生成今天这篇</button>
        <span class="gen-hint" id="genHint">${cfg.apiKey ? '会用你喜欢的题材，挑几个你还没掌握的六级词' : '需要先在设置里填一个免费 API Key'}</span>
      </div>
    </div>`;
}

function bindGenForm() {
  $$('#todayBody .len-opt').forEach(el => el.onclick = () => {
    DB.config.length = +el.dataset.len; save();
    $$('#todayBody .len-opt').forEach(x => x.classList.toggle('on', x === el));
  });
  $$('#todayBody .topic').forEach(el => el.onclick = () => {
    DB.config.topic = el.dataset.topic; save();
    $$('#todayBody .topic').forEach(x => x.classList.toggle('on', x === el));
  });
  const btn = $('#genBtn');
  if (btn) btn.onclick = () => {
    if (!DB.config.apiKey) { toast('先去设置里填 API Key，免费的'); go('settings'); return; }
    generate();
  };
}

function renderSpark() {
  const days = {};
  (DB.articles || []).forEach(a => { if (a.done) days[a.date] = (days[a.date] || 0) + a.len; });
  const vals = [];
  for (let i = 13; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    vals.push(days[dstr(d)] || 0);
  }
  if (!vals.reduce((a, b) => a + b, 0)) {
    $('#sparkline').style.display = 'none';
    let e = document.querySelector('.spark-empty');
    if (!e) { e = document.createElement('div'); e.className = 'spark-empty'; $('.spark-wrap').appendChild(e); }
    e.textContent = '读完第一篇，这里会长出一条线';
    return;
  }
  $('#sparkline').style.display = '';
  const se = document.querySelector('.spark-empty'); if (se) se.remove();
  const max = Math.max(60, ...vals);
  const W = 260, H = 70, pad = 4;
  const step = (W - pad * 2) / (vals.length - 1);
  const pts = vals.map((v, i) => [pad + i * step, H - pad - (v / max) * (H - pad * 2)]);
  const line = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const area = line + ` L${pts[pts.length - 1][0].toFixed(1)} ${H - pad} L${pts[0][0].toFixed(1)} ${H - pad} Z`;
  const last = pts[pts.length - 1];
  $('#sparkline').innerHTML = `
    <defs><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#A8823F" stop-opacity=".16"/><stop offset="1" stop-color="#A8823F" stop-opacity="0"/>
    </linearGradient></defs>
    <path d="${area}" fill="url(#sg)"/>
    <path d="${line}" fill="none" stroke="#A8823F" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
    <circle cx="${last[0].toFixed(1)}" cy="${last[1].toFixed(1)}" r="3" fill="#A8823F"/>`;
}

function renderCollectionPreview() {
  const ws = Object.entries(DB.words).slice(-14);
  if (!ws.length) {
    $('#collectionPreview').innerHTML =
      '<div class="coll-empty">还没有收集到词。读文章时点一下橙色的词，它就会留在这里。</div>';
    return;
  }
  $('#collectionPreview').innerHTML = '<div class="chips">' + ws.map(([w, v]) =>
    `<span class="chip l${(v.checks || 0) >= 3 ? 3 : (v.checks || 0) > 0 ? 2 : 1}"><i></i>${esc(w)}<span style="color:#B5AFA4;font-size:10.5px">${esc(v.zh || '')}</span></span>`
  ).join('') + '</div>';
}

function renderCollFoot() {
  const foot = $('#collFoot');
  if (!foot) return;
  const m = masteredCount();
  const learning = Object.values(DB.words).filter(w => { const c = w.checks || 0; return c > 0 && c < 3; }).length;
  const total = bookPool().length;
  foot.innerHTML = `
    <div class="cfs">已初步掌握 <b style="color:#5E7A55">${m}</b> 个</div>
    <div class="cfs">学习中 <b style="color:#A8823F">${learning}</b> 个</div>
    <div class="cfs" style="margin-left:auto">词书共 <b>${total}</b> 个词</div>`;
}

function artThumb(topic) {
  const palettes = {
    '艺术': ['#1B2A4A', '#3E5C86', '#F2E6B8'],
    '金融与商业': ['#1F3A2E', '#3D6B52', '#EADFC0'],
    '科技': ['#1A2540', '#3B5AA8', '#C6D8F5'],
    '文学': ['#3A2430', '#6B4457', '#F0DCC8'],
    '历史': ['#33281C', '#6B5540', '#E8D6B4']
  };
  const p = palettes[topic] || ['#22303F', '#465A72', '#E4DCC8'];
  return `<svg viewBox="0 0 120 92" preserveAspectRatio="none">
    <defs><linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${p[0]}"/><stop offset="1" stop-color="${p[1]}"/></linearGradient></defs>
    <rect width="120" height="92" fill="url(#tg)"/>
    <path d="M-6 28 q20-14 40 0 t40 0 t40 0" stroke="${p[2]}" stroke-width="1" fill="none" opacity=".45"/>
    <path d="M-6 44 q20-12 40 0 t40 0 t40 0" stroke="${p[2]}" stroke-width="1" fill="none" opacity=".3"/>
    <g fill="${p[2]}" opacity=".85">
      <circle cx="24" cy="18" r="2"/><circle cx="52" cy="30" r="1.4"/><circle cx="86" cy="16" r="1.7"/>
      <circle cx="102" cy="34" r="1.2"/><circle cx="66" cy="48" r="1.1"/>
    </g>
    <path d="M0 92 L0 72 q16-9 30-2 q12 7 26-4 q14-9 26 2 q12 9 30 0 l8-3 L120 92 Z" fill="${p[0]}" opacity=".85"/>
  </svg>`;
}

/* ---------------- 生成 ---------------- */
/* 释义来源优先级：用户导入的词书 > 手写释义表 > 读文章时补进来的释义 */
function glossOf(w) {
  const r = DB.words[w];
  if (r && r.zh) return r.zh;
  if (typeof CET6_GLOSS !== 'undefined' && CET6_GLOSS[w]) return CET6_GLOSS[w];
  return '';
}
function phOf(w) {
  const r = DB.words[w];
  if (r && r.ph) return r.ph;
  if (typeof CET6_WORDS !== 'undefined') {
    const hit = CET6_WORDS.find(x => x[0] === w);
    if (hit && hit[1]) return hit[1];
  }
  return '';
}

/* 词书池：docx 词表（7779）+ 用户导入词书，去重 */
function bookPool() {
  const seen = new Set(), out = [];
  const push = (w, ph, zh) => {
    const k = String(w || '').toLowerCase().trim();
    if (!k || seen.has(k) || !/^[a-z][a-z'-]*$/.test(k)) return;
    seen.add(k);
    out.push({ w: k, ph: ph || '', zh: zh || '' });
  };
  (typeof CET6_WORDS !== 'undefined' ? CET6_WORDS : []).forEach(x => push(x[0], x[1], x[2]));
  (DB.books || []).forEach(b => (b.words || []).forEach(x => push(x.w, x.ph, x.zh)));
  out.forEach(x => { if (!x.zh) x.zh = glossOf(x.w); });
  return out;
}

/* 选词：优先「还没拿满三个勾」的词，其余用没见过的；都够就随机 */
function pickWords(n) {
  const pool = bookPool();
  if (!pool.length) return [];
  const rec = DB.words;
  const reviewing = pool.filter(x => rec[x.w] && (rec[x.w].checks || 0) < 3);
  const unseen = pool.filter(x => !rec[x.w]);
  const mastered = pool.filter(x => rec[x.w] && (rec[x.w].checks || 0) >= 3);
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };
  shuffle(reviewing); shuffle(unseen); shuffle(mastered);

  const out = [];
  const wantReview = Math.min(reviewing.length, Math.ceil(n * 0.6));
  out.push(...reviewing.slice(0, wantReview));
  out.push(...unseen.slice(0, n - out.length));
  if (out.length < n) out.push(...reviewing.slice(wantReview, wantReview + (n - out.length)));
  if (out.length < n) out.push(...mastered.slice(0, n - out.length));
  return out.map(x => x.w);
}

function buildPrompt() {
  const c = DB.config;
  const len = c.length;
  const topic = c.topic === 'auto' ? '你自己挑一个最适合今天读的方向' : c.topic;
  // 尽量多用词书里的词，但句子自然度优先
  const nWords = len <= 120 ? 8 : len <= 180 ? 10 : len <= 320 ? 14 : 18;
  const needWords = Math.max(5, nWords - 5);
  const words = pickWords(nWords);
  const minW = Math.round(len * 0.88), maxW = Math.round(len * 1.12);
  const tiny = len <= 120;
  const paraRule = tiny ? '写 3 段，每段正好 3 个句子，全文一共 9 句。' : '写 4 段，每段 3–4 个句子。';
  const sentRule = tiny
    ? '每个英文句子 13–16 个词（往长了写，宁可超不可短）。写完必须数总词数：不足 88 就补细节，超过 112 就删修饰。'
    : '每个英文句子必须写够 18–25 个词，用从句、非谓语结构、插入语把意思说完整。\n不要写 "Art is important." 这种短句；六级阅读里的句子本来就是长的。';
  // 主题锚定：模型很容易滑回商业/创业题材，经济类尤其要按用户的口径写
  const topicRule = c.topic === 'auto'
    ? '方向你自己挑（文学、历史、科技、经济学科普、心理等都可以轮换），但今天只写一个方向，写透。'
    : /金融|商业|经济|量化|投资/.test(c.topic)
      ? `文章必须属于「${topic}」，并按下面的口径写：
- 必须围绕一个真实、广为人知的经济金融现象或历史事件展开（例如：郁金香泡沫、恶性通胀、滞胀、2008 年次贷危机、美联储加息的传导、幸存者偏差、价格弹性在现实中的表现），先讲故事/现象，再拆解背后的经济学机制，让读者读完理解一个概念是如何在真实世界里发生的
- 严禁写成商业新闻、公司案例、创业故事、行业报道——读者不想看商业故事，想看的是经济学原理在真实事件中的体现
- 事件的细节只用公认事实，不编造数字、日期和人物言论`
      : `文章必须紧扣「${topic}」这个方向：题材、人物、例子都要服务它。不要滑到商业/创业/公司题材，除非用户选的方向就是它。`;
  // 深度锚定：枯燥的根源是"什么都说一点、什么都不具体"，必须逼模型先选一个具体的锚
  const depthRule = `具体化与深度（与字数同等重要）：
- 动笔前先确定一个具体的"锚"，整篇文章只围绕它展开：文学＝一部具体作品（作家、时代、人物、情节、主题）；历史＝一个具体事件；科技＝一项具体技术及其真实影响；心理/科学＝一个具体实验或发现；经济＝一个具体现象或事件（见上文）。
- 开头第一句必须直接抛出这个锚——一个具体的场景、数字、事件或作品，禁止"XX is important / With the development of..."式空泛开头。
- 每一段都要有至少一个具体细节（人名、书名、数字、事件、情节），整篇不许都是抽象议论。
- 结尾给出一个不落俗套的观察或反转，不要用"In conclusion"式总结。`;
  // 事实准确性：改成"要具体，但只写确凿事实"——之前的版本把具体情节禁了，导致文章空洞
  const factRule = /文学|艺术|历史|科学|心理|社会/.test(c.topic === 'auto' ? '' : c.topic)
    ? `事实准确性（最高优先级之一）：具体不等于编造。
- 涉及具体作品、作家、事件时，只写广为人知、确凿无误的内容（公认的人物、年代、著名情节、公认结论）。
- 名著的情节只写最著名、最有把握的部分：核心人物及其关系、最著名的场面、结局。严禁编造次要人物、次要情节或原著里没有的场景设定（如虚构的家族、工厂、庄园、事件）——没把握的细节宁可略写，只谈主题与影响。
- 拿不准的年代、人名、事件归属，就不要写具体值，换成一个你确凿知道的角度。`
    : '';
  // 段落分工：模型爱把同一层意思换个说法重复一遍
  const structureRule = `
段落分工（防重复）：每一段必须推进一层新的意思——第 1 段引出话题并给出核心判断，中间各段分别展开不同的原因/例子/反面，最后一段收束或给出新的启示。
严禁把同一观点换词重复（比如反复说"Technology changes the world"）；写完通读一遍，删掉意思重复的段落或句子，用新的信息替换。`;
  return {
    words, minW, maxW,
    messages: [
      {
        role: 'system',
        content: '你是一位英语教学材料作者，为一位中国大学生写沉浸式英语阅读材料。你只输出严格合法的 JSON，不输出任何解释、不输出 markdown 代码块。'
      },
      {
        role: 'user',
        content:
`写一篇英文短文，并配套练习。严格按下面要求。

读者：中国大学生，计算机专业，正在准备六级，但不喜欢应试材料，喜欢有真实信息量的内容。
${topicRule}
${depthRule}
${factRule}
${structureRule}
字数是最重要的一条，比其它所有要求都重要：
正文总词数必须在 ${minW}–${maxW} 词之间。
写法：${paraRule}
${sentRule}
写完数一遍总词数，不足 ${minW} 就补一个具体例子或一层解释进去。

难度：六级水平，但必须自然好读，不能为了难而难。
必须自然用到这 ${nWords} 个词中的至少 ${needWords} 个：${words.join(', ')}
如果某个词会毁掉一句自然的英文，就不要用它——读得下去比用上更多生词重要得多。
除了这几个，正文里能自然用上更多六级词汇就更好，不必拘泥于数量。

写作要求：
- 要有真实的信息价值或文学性：读完要能带走一个具体的知识点或一段具体的故事，而不是一堆正确的废话。
- 不要为了塞词而生硬拼接句子。
- 每个句子单独作为一个数组元素，方便逐句朗读。

出题自查（做完必须逐条核对）：
- listening 和 reading 的 a 必须指向"与 exp 解析一致"的选项：解析里提到的数字、事实、结论，必须就是 opts[a] 那一项的内容。写完一题就核对一题，这是最容易出错的地方。
- exp 一律用中文写（引述原文依据时可以带英文短语）。
- 正确答案四个位置都要用到，不要都挤在同一个字母上。

只输出这个结构的 JSON：
注意：paras 的每一项必须是 {"en": ["句子", ...], "zh": "整段中文"} 这样的对象，不要把段落写成嵌套数组。
{
  "title": "英文标题（不超过 8 个词）",
  "topic": "两个汉字以内的主题标签",
  "paras": [{"en": ["第一句", "第二句"], "zh": "这一整段的中文翻译"}],
  "words": [{"w": "原文中的单词原形", "p": "n./v./adj./adv.", "zh": "中文释义"}],
  "listening": [
    {"q": "英文问题", "opts": ["A. ...", "B. ...", "C. ...", "D. ..."], "a": 1, "exp": "中文解析，指出依据在原文哪一处"},
    {"q": "英文问题", "opts": ["A. ...", "B. ...", "C. ...", "D. ..."], "a": 2, "exp": "中文解析"}
  ],
  "reading": {"q": "英文题干，考查推理或作者态度", "opts": ["A. ...", "B. ...", "C. ...", "D. ..."], "a": 2, "exp": "中文解析，说明为什么其他三项错"},
  "translation": {"en": "从原文挑一个长难句", "ref": "参考译文", "frame": "主干是什么、修饰成分是什么", "err": "学习者常见的译错点"},
  "collocation": {"ph": "一个值得积累的搭配", "zh": "中文含义", "ex": "原文中的例句", "demo": "一个新的示范句", "frame": "用法要点和常见错误"}
}

words 给 ${Math.max(8, needWords)}–${nWords} 个，必须是正文里真实出现的词，并给每个词配中文释义。listening 必须 2 道题。a 是正确选项的下标（0–3）。所有 opts 必须 4 项，且以 "A. " "B. " "C. " "D. " 开头。`
      }
    ]
  };
}

function parseJSON(text) {
  let t = String(text).trim();
  t = t.replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
  const s = t.indexOf('{'), e = t.lastIndexOf('}');
  if (s < 0 || e < 0) throw new Error('没有找到 JSON');
  let body = t.slice(s, e + 1);
  try { return JSON.parse(body); }
  catch (err) {
    body = body.replace(/,\s*([}\]])/g, '$1').replace(/[\u201c\u201d]/g, '"');
    return JSON.parse(body);
  }
}

function normalize(obj) {
  if (!obj || !Array.isArray(obj.paras) || !obj.paras.length) throw new Error('缺少 paras');
  let count = 0;
  obj.paras = obj.paras.map(p => {
    // 模型偶尔把段落输出成数组：[{en,zh},...] 或 ["句子",...]，都拍平
    if (Array.isArray(p)) {
      const en = p.map(x => typeof x === 'string' ? x : String(x.en || '').trim()).filter(Boolean);
      count += en.join(' ').split(/\s+/).filter(Boolean).length;
      const zh = p.map(x => typeof x === 'string' ? '' : String(x.zh || '')).filter(Boolean).join(' ');
      return { en, zh };
    }
    const en = Array.isArray(p.en) ? p.en : String(p.en || '').split(/(?<=[.!?])\s+/);
    const clean = en.map(s => String(s).trim()).filter(Boolean);
    count += clean.join(' ').split(/\s+/).length;
    return { en: clean, zh: String(p.zh || '') };
  });
  obj.len = count;
  obj.title = obj.title || 'Untitled';
  obj.words = Array.isArray(obj.words) ? obj.words.filter(w => w && w.w) : [];
  obj.listening = (Array.isArray(obj.listening) ? obj.listening : []).map(fixQ).filter(Boolean);
  if (obj.reading) { const r = fixQ(obj.reading); if (r) obj.reading = r; else obj.reading = null; }
  return obj;
}

// 题目兜底：AI 偶尔把答案下标写越界（4 个选项却给 a=4 → 渲染成"E"）、选项数不足、缺题干等
function fixQ(q) {
  if (!q || !q.q || !Array.isArray(q.opts)) return null;
  let opts = q.opts.map(o => String(o || '').trim()).filter(Boolean).slice(0, 4);
  if (opts.length < 2) return null;
  let a = Math.round(Number(q.a));
  // 下标越界：模型常把 1-based 序号当 0-based 下标（4 个选项给 a=4）→ 按 0-based 收进去
  if (!(a >= 0 && a < opts.length)) a = a === opts.length ? opts.length - 1 : Math.min(Math.max(0, a), opts.length - 1);
  // 自洽性校正：模型偶尔把 a 标错，解析却说出了真正的答案。
  const exp = String(q.exp || '');
  if (exp) {
    // ① 最高优先级：解析里直接声明答案（"making option B the correct answer" / "正确答案是B"）。
    //    这类显式声明比 a 下标可靠——AI 经常在 exp 里自己写出正确字母，却把 a 标成别的。
    const declared = declaredAnswer(exp, opts.length);
    if (declared >= 0) {
      a = declared;
    } else {
      // ② 次优先：解析整句复述了某个选项的内容（"making it 100 years old" vs "50 years"）。
      //    只有唯一命中时才改判，避免误伤。
      const low = exp.toLowerCase();
      const hits = [];
      opts.forEach((o, i) => {
        const core = o.replace(/^\s*[A-Da-d][.、:：]\s*/, '').trim().toLowerCase();
        if (core.length >= 2 && low.includes(core)) hits.push(i);
      });
      if (hits.length === 1) a = hits[0];
    }
  }
  return { q: String(q.q), opts, a, exp };
}

// 从解析文本里抽取"显式答案声明"；没有则返回 -1。
// 覆盖：making option B the correct answer / option B is correct / the correct answer is B /
//       answer: B / 正确答案是B / 选B。多处声明冲突时取最后一句（通常是结论）。
function declaredAnswer(exp, n) {
  const s = String(exp || '');
  const pats = [
    /\b(?:making\s+)?(?:option|choice)\s+([A-Da-d])\b[^.]{0,40}?\b(?:correct|right|best)\b/gi,
    /\b(?:the\s+)?correct\s+(?:answer|option|choice)\s+is\s+(?:option\s+)?([A-Da-d])\b/gi,
    /\b(?:the\s+)?(?:answer|option|choice)\s+is\s+(?:option\s+)?([A-Da-d])\b/gi,
    /\b(?:answer|ans|key)\s*[:：]\s*(?:option\s+)?([A-Da-d])\b/gi,
    /\b([A-Da-d])\s+is\s+(?:the\s+)?(?:correct|right)\b/gi,
    /正确(?:答案)?\s*(?:是|为)?\s*(?:选项)?\s*([A-Da-d])/gi,
    /(?:答案|选)\s*[:：]?\s*(?:选项)?\s*([A-Da-d])/gi
  ];
  const found = [];
  pats.forEach(re => {
    let m;
    while ((m = re.exec(s))) {
      // "option A is wrong because B is correct" 里的 A 要排除
      if (/\b(?:wrong|incorrect|false)\b|不(?:对|正确)/i.test(m[0])) continue;
      const i = m[1].toUpperCase().charCodeAt(0) - 65;
      if (i >= 0 && i < n) found.push({ i, pos: m.index });
    }
  });
  if (!found.length) return -1;
  found.sort((x, y) => x.pos - y.pos);
  return found[found.length - 1].i;
}

async function generate() {
  const overlay = $('#genOverlay');
  overlay.hidden = false;
  const steps = $$('.gen-step');
  steps.forEach(s => s.classList.remove('on'));
  let si = 0, pct = 4;
  steps[0].classList.add('on');
  $('#genFill').style.width = pct + '%';
  const timer = setInterval(() => {
    pct = Math.min(92, pct + Math.random() * 7);
    $('#genFill').style.width = pct + '%';
    if (pct > (si + 1) * 22 && si < steps.length - 1) {
      si++; steps.forEach((s, i) => s.classList.toggle('on', i <= si));
    }
  }, 1300);

  const { messages, words, minW, maxW } = buildPrompt();
  const c = DB.config;
  let res = await window.studio.chat({ baseUrl: c.baseUrl, apiKey: c.apiKey, model: c.model, messages, temperature: 0.85, maxTokens: 4096 });

  clearInterval(timer);
  if (!res.ok) {
    overlay.hidden = true;
    $('#genFill').style.width = '0';
    alert('生成失败：' + res.error + '\n\n可以去设置里检查 Key、接口地址和模型名。');
    return;
  }

  let data = null, errMsg = '';
  try { data = normalize(parseJSON(res.content)); }
  catch (e) {
    errMsg = e.message;
    // 重试一次，强制只要 JSON
    const retry = await window.studio.chat({
      baseUrl: c.baseUrl, apiKey: c.apiKey, model: c.model, temperature: 0.6,
      maxTokens: 4096,
      messages: messages.concat([
        { role: 'assistant', content: res.content.slice(0, 1200) },
        { role: 'user', content: '你的输出不能被解析为 JSON。请重新输出，只输出 JSON 本身，不要任何其他文字、不要 markdown 代码块。' }
      ])
    });
    if (retry.ok) { try { data = normalize(parseJSON(retry.content)); } catch (e2) { errMsg = e2.message; } }
  }

  // 太短就自动补长重写，最多两轮，只接受"更接近目标词数"的结果（防补过头）
  if (data) {
    const cut = DB.config.length <= 120 ? 0.95 : 0.85;
    const target = DB.config.length;
    for (let att = 0; att < 2 && data.len < minW * cut; att++) {
      const r2 = await window.studio.chat({
        baseUrl: c.baseUrl, apiKey: c.apiKey, model: c.model, temperature: 0.75, maxTokens: 4096,
        messages: messages.concat([
          { role: 'assistant', content: res.content.slice(0, 4000) },
          { role: 'user', content: `这篇只有 ${data.len} 个词，太短了，达不到 ${minW}–${maxW} 词。请以它为基础重写一遍：
- 保留原来的主题、观点和已用到的目标词
- 每段补充具体的例子、数据、因果解释或反例，让内容真的有信息量
- 不要注水，不要重复同一层意思，不要靠形容词凑字数
- 总词数必须落在 ${minW}–${maxW} 之间
只输出完整的 JSON，结构完全不变。` }
        ])
      });
      if (r2.ok) {
        try {
          const d2 = normalize(parseJSON(r2.content));
          if (Math.abs((d2.len || 0) - target) < Math.abs(data.len - target)) data = d2;
        } catch (e) { }
      }
    }
  }

  $('#genFill').style.width = '100%';
  setTimeout(() => { overlay.hidden = true; $('#genFill').style.width = '0'; }, 260);

  if (!data) {
    alert('AI 返回的内容没能解析成文章（' + errMsg + '）。\n换个模型或再试一次通常就好了。');
    return;
  }

  data.id = 'a' + Date.now();
  data.date = TODAY;
  data.topic = data.topic || (c.topic === 'auto' ? '综合' : c.topic);
  data.createdAt = Date.now();
  data.done = false;
  data.seed = words;
  DB.articles.unshift(data);
  bumpDay(data.len);
  save();
  renderHome();
  toast('写好了 · ' + data.len + ' 词');
}

function bumpDay(n) {
  const d = DB.progress.days[TODAY] || { words: 0, n: 0 };
  d.words += n; d.n += 1;
  DB.progress.days[TODAY] = d;
}

/* ---------------- 打开文章 ---------------- */
/* 环节开关：steps 里关掉的环节不进流程；order 决定听力和阅读谁先 */
function flow() {
  const s = DB.config.steps || {};
  const f = [];
  if (s.listen !== false && DB.config.order !== 'read') f.push('listen');
  f.push('read');
  if (s.listen !== false && DB.config.order === 'read') f.push('listen');
  if (s.guess !== false) f.push('guess');
  if (s.train !== false) f.push('train');
  f.push('done');
  return f;
}
function nextStep(k) {
  const f = flow();
  const i = f.indexOf(k);
  return i >= 0 && i + 1 < f.length ? f[i + 1] : 'done';
}
function prevStep(k) {
  const f = flow();
  const i = f.indexOf(k);
  return i > 0 ? f[i - 1] : null;
}
/* 进入某个环节的正确入口：猜词必须先 startGuess() 初始化题目，直接 go() 会得到空页 */
function enterStep(n) {
  if (!n || n === 'done') { $('#toDone').click(); return; }
  if (n === 'guess') { startGuess(); return; }
  go(n);
}
const STEPN = { listen: '听力', read: '原文', guess: '猜词', train: '训练' };
function ctaFor(k) {
  const n = nextStep(k);
  if (n === 'read') return '看原文 →';
  if (n === 'listen') return k === 'read' ? '去听这篇 →' : '听这篇的朗读 →';
  if (n === 'guess') return k === 'read' ? '先猜词，再翻译 →' : '去猜词 →';
  if (n === 'train') return '去做练习 →';
  return '完成这篇 →';
}

/* 依据当前开关刷新四张页面的返回按钮 / 主按钮文案 */
function updateFlowUI() {
  const f = flow();
  const set = (id, label, target) => {
    const b = $(id); if (!b) return;
    b.textContent = label;
    b.onclick = target === 'home' ? () => go('home') : () => go(target);
  };
  // 听力页返回：先听 → 返回首页；先读 → 回到原文
  const lvPrev = prevStep('listen');
  set('#backListen', lvPrev === 'read' ? '← 回到原文' : '← 返回', lvPrev || 'home');
  // 阅读页返回
  const rdPrev = prevStep('read');
  set('#backRead', rdPrev === 'listen' ? '← 回到听力' : '← 返回', rdPrev || 'home');
  // 猜词页返回
  const gsPrev = prevStep('guess');
  set('#backGuess', gsPrev ? '← 回到' + (STEPN[gsPrev] || '') : '← 返回', gsPrev || 'home');
  // 训练页返回
  const trPrev = prevStep('train');
  set('#backTrain', trPrev ? '← 返回' + (STEPN[trPrev] || '') : '← 返回', trPrev || 'home');
  // 听力页主按钮与跳过
  $('#toRead').textContent = ctaFor('listen');
  $('#skipListen').textContent = nextStep('listen') === 'read' ? '不想做题，直接看原文 →' : '不想做题，直接进行下一步 →';
  // 阅读页主按钮
  $('#toGuess').textContent = ctaFor('read');
  // 阅读页快捷切换听力顺序
  const ob = $('#ordToggle');
  if (ob) {
    ob.textContent = '顺序 · ' + (DB.config.order === 'read' ? '先读后听' : '先听后读');
    ob.title = '点击切换：听力放在阅读前还是后';
    ob.onclick = () => {
      DB.config.order = DB.config.order === 'read' ? 'listen' : 'read';
      save(); updateFlowUI();
      toast(DB.config.order === 'read' ? '已切换：先读文章，再听朗读' : '已切换：先听朗读，再看原文');
    };
  }
}

function openArticle(a) {
  cur = a; curIdx = 0; loop = -1;
  $('#artTitle').textContent = a.title;
  $('#accent').value = curVoice();
  $('#rate').value = String(DB.config.rate || 1);
  $('#readRate').value = String(DB.config.rate || 1);
  buildSents();
  qi = 0; answered = []; picked = [];
  $('#toRead').hidden = true;
  renderListen();
  renderQ();
  renderRead();
  renderTrain();
  updateFlowUI();
  go(flow()[0]);
  prefetch(0, 4);
}

function buildSents() {
  cur._sents = [];
  cur.paras.forEach((p, pi) => p.en.forEach(en => cur._sents.push({ en, p: pi })));
}

/* ---------------- 语音 ---------------- */
const VOICES = [
  { id: 'en-US-AriaNeural', name: 'Aria · 美式女声', acc: 'en-US' },
  { id: 'en-US-JennyNeural', name: 'Jenny · 美式女声（轻）', acc: 'en-US' },
  { id: 'en-US-GuyNeural', name: 'Guy · 美式男声', acc: 'en-US' },
  { id: 'en-US-AndrewNeural', name: 'Andrew · 美式男声（沉）', acc: 'en-US' },
  { id: 'en-GB-SoniaNeural', name: 'Sonia · 英式女声', acc: 'en-GB' },
  { id: 'en-GB-RyanNeural', name: 'Ryan · 英式男声', acc: 'en-GB' }
];
const audioCache = new Map();
const audioEl = new Audio();
audioEl.preload = 'auto';
let ttsWarned = false;

function curVoice() { return DB.config.voice || 'en-US-AriaNeural'; }

async function getAudio(text, voice) {
  const v = voice || curVoice();
  const key = v + '|' + text;
  if (audioCache.has(key)) return audioCache.get(key);
  if (!window.studio || !window.studio.tts) return null;
  const res = await window.studio.tts({ text, voice: v });
  if (!res.ok) {
    if (!ttsWarned) { ttsWarned = true; toast('在线语音不可用：' + res.error); }
    return null;
  }
  const bin = atob(res.data);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  const url = URL.createObjectURL(new Blob([arr], { type: 'audio/mpeg' }));
  audioCache.set(key, url);
  return url;
}

let prefetchChain = Promise.resolve();
function prefetch(from, n) {
  const sents = cur && cur._sents; if (!sents) return;
  const end = Math.min(sents.length, from + n);
  for (let i = from; i < end; i++) {
    const txt = sents[i].en;
    prefetchChain = prefetchChain
      .then(() => getAudio(txt))
      .catch(() => { })
      .then(() => new Promise(r => setTimeout(r, 120)));
  }
}

function fmt(s) { return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(Math.floor(s % 60)).padStart(2, '0'); }

function setPlayIcon(isPlaying) {
  const ic = $('#playIcon');
  if (ic) ic.innerHTML = isPlaying
    ? '<path d="M7 5h4v14H7zM13 5h4v14h-4z"/>'
    : '<path d="M8.5 5.5v13l10.5-6.5z" fill="#2A2825"/>';
  const rp = $('#readPlay');
  if (rp) rp.textContent = isPlaying ? '⏸ 停止' : '▶ 全文朗读';
}

let playScope = null; // 段落播放时锁定在该段内，播完自动停，不串到后面段落
async function speak(i, scope) {
  const sents = cur && cur._sents;
  if (!sents || i < 0 || i >= sents.length) { stopAudio(); return; }
  playScope = (scope === undefined) ? null : scope;
  stopAudio();
  curIdx = i; playing = true;
  paint(); setPlayIcon(true);

  const url = await getAudio(sents[i].en);
  if (!playing) return;
  if (!url) { fallbackSpeak(sents[i].en, i); return; }

  audioEl.src = url;
  audioEl.playbackRate = DB.config.rate || 1;
  audioEl.onended = () => {
    if (!playing) return;
    const n = loop >= 0 ? loop : i + 1;
    if (n >= sents.length) { stopAudio(); return; }
    if (playScope !== null && sents[n].p !== playScope) { stopAudio(); return; }
    setTimeout(() => { if (playing) speak(n, playScope); }, 150);
  };
  audioEl.play().catch(() => { });
  prefetch(i + 1, 3);
}

function fallbackSpeak(text, i) {
  const ss = window.speechSynthesis;
  if (!ss) { toast('这台机器没有可用的语音引擎'); stopAudio(); return; }
  const v = ss.getVoices().find(x => /^en/i.test(x.lang));
  if (!v) { toast('没有英文语音，请检查系统语音包'); stopAudio(); return; }
  const u = new SpeechSynthesisUtterance(text);
  u.voice = v; u.lang = v.lang; u.rate = DB.config.rate || 1;
  u.onend = () => {
    if (!playing) return;
    const sents = cur._sents;
    const n = loop >= 0 ? loop : i + 1;
    if (n >= sents.length) { stopAudio(); return; }
    if (playScope !== null && sents[n].p !== playScope) { stopAudio(); return; }
    setTimeout(() => { if (playing) speak(n, playScope); }, 150);
  };
  ss.speak(u);
}

function stopAudio() {
  playing = false;
  try { audioEl.pause(); audioEl.currentTime = 0; } catch (e) { }
  stopText();
  setPlayIcon(false);
}

/* 划词/点词的声音：全局只允许一个在响，任何新声音都会顶掉旧的 */
let textAudio = null, textToken = 0;
function stopText() {
  textToken++;
  if (textAudio) { try { textAudio.pause(); } catch (e) { } textAudio = null; }
  try { window.speechSynthesis.cancel(); } catch (e) { }
}
async function speakText(t) {
  stopAudio();
  const tok = textToken;
  const url = await getAudio(t);
  if (tok !== textToken) return;
  if (url) {
    const a = new Audio(url);
    a.playbackRate = DB.config.rate || 1;
    a.onended = () => { if (textAudio === a) textAudio = null; };
    textAudio = a;
    a.play().catch(() => { });
    return;
  }
  const ss = window.speechSynthesis;
  const v = ss.getVoices().find(x => /^en/i.test(x.lang));
  if (!v) return;
  const u = new SpeechSynthesisUtterance(t);
  u.voice = v; u.lang = v.lang; u.rate = DB.config.rate || 1;
  ss.speak(u);
}

function paint() {
  const sents = cur && cur._sents; if (!sents) return;
  const pct = (curIdx + 1) / sents.length * 100;
  const f = $('#fill'); if (f) f.style.width = pct + '%';
  if ($('#tNow')) { $('#tNow').textContent = fmt(curIdx * 11); $('#tAll').textContent = fmt(sents.length * 11); }
  $$('#sentNav b').forEach(b => {
    const i = +b.dataset.i;
    b.classList.toggle('on', i === curIdx);
    if (i < curIdx) b.classList.add('seen');
  });
  const cp = sents[curIdx].p;
  $$('#artBody .para').forEach(el => el.classList.toggle('talking', playing && +el.dataset.p === cp));
}

/* ---------------- 听力页 ---------------- */
function renderListen() {
  if (!cur) return;
  $('#btnLoop').classList.remove('on');
  const groups = [];
  cur._sents.forEach((s, i) => { (groups[s.p] = groups[s.p] || []).push(i); });
  $('#sentNav').innerHTML = groups.map((arr, pi) =>
    `<div class="prow"><span class="plabel">第 ${pi + 1} 段</span>` +
    arr.map(i => `<b data-i="${i}">${i + 1}</b>`).join('') + '</div>'
  ).join('');
  $$('#sentNav b').forEach(b => b.onclick = () => speak(+b.dataset.i));
  paint();
}

$('#playBtn').onclick = () => playing ? stopAudio() : speak(curIdx);
$('#btnPrev').onclick = () => speak(Math.max(0, curIdx - 1));
$('#btnNext').onclick = () => speak(Math.min(cur._sents.length - 1, curIdx + 1));
$('#btnLoop').onclick = e => {
  loop = loop === curIdx ? -1 : curIdx;
  e.currentTarget.classList.toggle('on', loop >= 0);
  if (loop >= 0) speak(curIdx);
  toast(loop >= 0 ? '这一句会一直重复' : '取消循环');
};
$('#track').onclick = e => {
  const r = e.currentTarget.getBoundingClientRect();
  speak(Math.min(cur._sents.length - 1, Math.floor((e.clientX - r.left) / r.width * cur._sents.length)));
};
$('#accent').onchange = e => { DB.config.voice = e.target.value; save(); };
$('#rate').onchange = e => { DB.config.rate = parseFloat(e.target.value); save(); };
$('#readRate').onchange = e => { DB.config.rate = parseFloat(e.target.value); save(); };

let qi = 0, answered = [], picked = [];
function renderQ() {
  if (!cur) return;
  if (answered.length !== cur.listening.length) { answered = cur.listening.map(() => false); picked = cur.listening.map(() => -1); }
  const q = cur.listening[qi];
  if (!q) { $('#qArea').innerHTML = '<div class="empty-note">这篇文章没有听力题</div>'; $('#toRead').hidden = false; return; }
  $('#qProg').textContent = (qi + 1) + ' / ' + cur.listening.length;
  $('#qArea').innerHTML = `<div class="qn">Q${qi + 1}</div><div class="qtext">${esc(q.q)}</div>` +
    q.opts.map((o, i) => `<label class="opt" data-i="${i}"><input type="radio" name="q${qi}" value="${i}">${esc(o)}</label>`).join('');
  $('#qPrev').disabled = qi === 0;
  $('#qNext').disabled = qi >= cur.listening.length - 1;
  // 答过的题恢复状态：选中项、对错标色、解析
  const done = !!answered[qi];
  $('#qSubmit').disabled = done;
  $('#qSubmit').classList.toggle('b', !done);
  $('#qNext').classList.toggle('b', done && qi < cur.listening.length - 1);
  if (done) {
    const radio = $('#qArea input[value="' + picked[qi] + '"]');
    if (radio) radio.checked = true;
    applyAnswer();
  }
}
function applyAnswer() {
  const q = cur.listening[qi], pick = picked[qi];
  $$('#qArea .opt').forEach((el, i) => {
    el.classList.remove('right', 'wrong');
    if (i === q.a) el.classList.add('right');
    else if (i === pick) el.classList.add('wrong');
  });
  const old = $('#qArea .exp'); if (old) old.remove();
  const box = document.createElement('div');
  box.className = 'exp';
  box.innerHTML = `<b>${pick === q.a ? '答对了' : '正确是 ' + String.fromCharCode(65 + q.a)}</b><br>${esc(q.exp)}`;
  $('#qArea').appendChild(box);
}
$('#qPrev').onclick = () => { if (qi > 0) { qi--; renderQ(); } };
$('#qNext').onclick = () => { if (qi < cur.listening.length - 1) { qi++; renderQ(); } };
$('#qSubmit').onclick = () => {
  const sel = $('#qArea input:checked');
  if (!sel) { toast('先选一个'); return; }
  const q = cur.listening[qi], pick = +sel.value;
  picked[qi] = pick;
  if (!answered[qi]) {
    answered[qi] = true;
    DB.progress.listenLog.push(pick === q.a ? 1 : 0);
    save();
  }
  applyAnswer();
  $('#qSubmit').disabled = true;
  $('#qSubmit').classList.remove('b');
  $('#qNext').classList.toggle('b', qi < cur.listening.length - 1);
  if (answered.every(Boolean)) { $('#toRead').hidden = false; checkAch(); }
};
$('#toRead').onclick = () => enterStep(nextStep('listen'));
$('#skipListen').onclick = () => enterStep(nextStep('listen'));

/* ---------------- 阅读页 ---------------- */
function mark(text) {
  let out = esc(text);
  (cur.words || []).forEach(x => {
    const re = new RegExp('\\b(' + x.w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\w*)\\b', 'gi');
    out = out.replace(re, m => `<span class="w" data-w="${esc(x.w)}">${m}</span>`);
  });
  return out;
}
function renderRead() {
  if (!cur) return;
  $('#artBody').innerHTML = cur.paras.map((p, i) =>
    `<p class="para" data-p="${i}"><button class="spk" data-sp="${i}" title="读这一段"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>${mark(p.en.join(' '))}</p>`
  ).join('');
  $('#zhText').innerHTML = cur.paras.map(p => `<p style="margin:0 0 10px">${esc(p.zh)}</p>`).join('');

  $$('#artBody .para').forEach(el => el.addEventListener('click', e => {
    const sp = e.target.closest('.spk');
    if (sp) {
      const pi = +sp.dataset.sp;
      const cs = cur._sents[curIdx];
      if (playing && cs && cs.p === pi) { stopAudio(); return; } // 再点一次 = 停
      const idx = cur._sents.findIndex(s => s.p === pi);
      if (idx >= 0) speak(idx, pi); // 只播这一段，段尾自动停
      return;
    }
    const w = e.target.closest('.w');
    if (w) { addWord(w.dataset.w); speakText(w.textContent); return; }
    // 划选的朗读交给 mouseup 处理；单纯点一下正文 = 打断当前所有声音
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) stopAudio();
  }));

  // 双击 = 查词/查句（浮窗显示翻译）
  $('#artBody').addEventListener('dblclick', e => {
    if (e.target.closest('.spk')) return;
    const s = window.getSelection();
    const t = s ? String(s).trim() : '';
    if (t && t.length > 1 && t.length < 600) showLookup(t);
  });

  $('#wordList').innerHTML = (cur.words || []).map(x =>
    `<div class="wordrow ${DB.words[x.w] ? 'hit' : ''}" data-w="${esc(x.w)}"><b>${esc(x.w)}</b><span>${esc(x.p || '')} ${esc(x.zh || '')}</span></div>`
  ).join('') || '<div class="empty-note">这篇没有标注词汇</div>';
  $$('#wordList .wordrow').forEach(el => el.onclick = () => {
    addWord(el.dataset.w); speakText(el.dataset.w); el.classList.add('hit');
  });
}
$('#readPlay').onclick = () => {
  if (playing) { stopAudio(); return; }
  speak(0);
};
$('#zhToggle').onclick = () => { const z = $('#zhAll'); z.hidden = !z.hidden; };
$('#toGuess').onclick = () => {
  stopAudio();
  enterStep(nextStep('read'));
};

function addWord(w) {
  const meta = (cur.words || []).find(x => x.w === w) || { p: '', zh: '' };
  const bk = (typeof CET6_WORDS !== 'undefined' ? CET6_WORDS : []).find(x => x[0] === w);
  const old = DB.words[w];
  const checks = old ? (old.checks || 0) : 0;
  DB.words[w] = {
    p: meta.p || (old && old.p) || '',
    zh: meta.zh || (old && old.zh) || glossOf(w) || '',
    ph: (old && old.ph) || phOf(w) || '',
    checks,
    wrong: old ? (old.wrong || 0) : 0,
    count: (old ? old.count : 0) + 1,
    level: checks >= 3 ? 3 : checks > 0 ? 2 : 1,
    firstAt: old ? old.firstAt : Date.now(), at: Date.now()
  };
  save(); toast(w + ' 已收进词书'); checkAch();
}

/* ---------------- 猜词：三个勾 = 初步掌握 ---------------- */
const GUESS = { items: [], i: 0, right: 0, gained: 0, mastered: 0, saved: false };

function masteredCount() {
  return Object.values(DB.words).filter(w => (w.checks || 0) >= 3).length;
}

/* 取词的记录，没有就建一条 */
function recOf(w, p, zh) {
  let r = DB.words[w];
  if (!r) {
    r = DB.words[w] = {
      p: p || '', zh: zh || '', ph: '', checks: 0, wrong: 0, count: 0,
      firstAt: Date.now(), at: Date.now(), level: 1
    };
  }
  if (!r.zh && zh) r.zh = zh;
  if (!r.zh) { const g = glossOf(w); if (g) r.zh = g; }
  if (!r.p && p) r.p = p;
  if (!r.ph) { const h = phOf(w); if (h) r.ph = h; }
  if (typeof r.checks !== 'number') r.checks = 0;
  return r;
}

function checks3(n) {
  n = Math.max(0, Math.min(3, n || 0));
  return [0, 1, 2].map(i => '<b class="' + (i < n ? 'on' : '') + '">✓</b>').join('');
}

function statText(n) {
  n = n || 0;
  if (n >= 3) return '已初步掌握';
  if (n === 0) return '还没拿到勾';
  return '还差 ' + (3 - n) + ' 个勾';
}

function startGuess() {
  if (!cur) return;
  const pool = bookPool();
  const items = (cur.words || []).map(x => {
    const r = recOf(x.w, x.p, x.zh);
    const zh = r.zh || x.zh || '';
    const used = new Set([zh]);
    const dist = [];
    let guard = 0;
    while (dist.length < 3 && guard++ < 400) {
      const c = pool[Math.floor(Math.random() * pool.length)];
      if (!c || !c.zh || used.has(c.zh)) continue;
      used.add(c.zh); dist.push(c.zh);
    }
    if (dist.length < 3) {
      const fb = ['完全相反的意思', '一个不相关的名词', '另一种常见但不对的解释'];
      for (const f of fb) { if (dist.length < 3 && !used.has(f)) { used.add(f); dist.push(f); } }
    }
    const opts = [zh, ...dist].sort(() => Math.random() - 0.5);
    return { w: x.w, p: x.p || r.p || '', ph: phOf(x.w), zh, opts, a: opts.indexOf(zh), ok: null };
  }).filter(it => it.zh && it.opts.length === 4);

  if (items.length > 10) {
    items.sort((a, b) => ((DB.words[a.w] || {}).checks || 0) - ((DB.words[b.w] || {}).checks || 0));
    items.length = 10;
  }
  if (!items.length) {
    toast('这篇没有可猜的词');
    enterStep(nextStep('guess'));
    return;
  }
  GUESS.items = items; GUESS.i = 0; GUESS.right = 0;
  GUESS.gained = 0; GUESS.mastered = 0; GUESS.saved = false;
  go('guess');
}

function renderGuess() {
  const card = $('#gCard');
  if (!card) return;
  if (!GUESS.items.length) {
    $('#gCount').textContent = '';
    card.innerHTML = `<div class="gdone"><div class="gdone-ico">📖</div>
      <h2>还没有可以猜的词</h2>
      <p class="glead">先读完一篇文章，词会跟着文章一起来到这里。</p>
      <button class="btn b" data-go="read">回到原文</button></div>`;
    return;
  }
  const it = GUESS.items[GUESS.i];
  if (!it) return renderGuessDone();
  const r = recOf(it.w, it.p, it.zh);
  $('#gCount').textContent = (GUESS.i + 1) + ' / ' + GUESS.items.length;

  const dots = GUESS.items.map((x, k) =>
    `<i class="${x.ok === true ? 'ok' : x.ok === false ? 'no' : k === GUESS.i ? 'cur' : ''}"></i>`).join('');

  card.innerHTML = `
    <div class="gdots">${dots}</div>
    <div class="gword" id="gWord">${esc(it.w)}</div>
    <div class="gpos">${esc(it.ph || '')}${it.ph && it.p ? ' · ' : ''}${esc(it.p || '')}</div>
    <div class="gask">它最接近哪个意思？</div>
    <div class="gopts" id="gOpts">
      ${it.opts.map((o, i) => `<button class="gopt" data-i="${i}"><i>${'ABCD'[i]}</i><span>${esc(o)}</span></button>`).join('')}
    </div>
    <div class="gfb" id="gFb" hidden></div>
    <div class="gfacts">
      <div class="gchecks" id="gChecks">${checks3(r.checks)}</div>
      <div class="gstat" id="gStat">${statText(r.checks)}</div>
      <button class="gspk" id="gSpk" title="听一下"><svg viewBox="0 0 24 24"><path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg></button>
    </div>
    <div class="gfoot">
      <button class="btn sm" id="gSkip">不会，直接看</button>
      <button class="btn b" id="gNext" hidden>下一个 →</button>
    </div>`;

  $$('#gOpts .gopt').forEach(b => b.onclick = () => answerGuess(+b.dataset.i));
  $('#gSkip').onclick = () => answerGuess(-1);
  $('#gNext').onclick = () => { GUESS.i++; renderGuess(); };
  $('#gSpk').onclick = () => speakText(it.w);
  speakText(it.w);
}

function answerGuess(choice) {
  const it = GUESS.items[GUESS.i];
  if (!it || it.ok !== null) return;
  const r = recOf(it.w, it.p, it.zh);
  const ok = choice === it.a;
  it.ok = ok;
  if (ok) {
    GUESS.right++;
    if ((r.checks || 0) < 3) {
      r.checks = (r.checks || 0) + 1;
      GUESS.gained++;
      if (r.checks === 3) GUESS.mastered++;
    }
    DB.progress.xp = (DB.progress.xp || 0) + 5;
  } else {
    r.wrong = (r.wrong || 0) + 1;
  }
  r.at = Date.now();
  r.level = r.checks >= 3 ? 3 : r.checks > 0 ? 2 : 1;
  save();

  $$('#gOpts .gopt').forEach((el, k) => {
    el.disabled = true;
    if (k === it.a) el.classList.add('right');
    else if (k === choice) el.classList.add('wrong');
  });
  const fb = $('#gFb');
  fb.hidden = false;
  fb.className = 'gfb ' + (ok ? 'ok' : 'no');
  fb.innerHTML = ok
    ? `<b>✓ 对了</b><span>${esc(it.w)} · ${esc(it.zh)}${r.checks >= 3 ? ' —— 三个勾拿满，这个词可以算初步掌握了' : ''}</span>`
    : `<b>✗ 差一点</b><span>${esc(it.w)} 是「${esc(it.zh)}」。这次不给勾，下次读到它再试一次。</span>`;
  $('#gChecks').innerHTML = checks3(r.checks);
  $('#gStat').textContent = statText(r.checks);
  $('#gSkip').hidden = true;
  const next = $('#gNext');
  next.hidden = false;
  next.textContent = GUESS.i + 1 >= GUESS.items.length ? '看这一轮结果 →' : '下一个 →';
  checkAch();
}

function renderGuessDone() {
  const total = GUESS.items.length;
  const pct = Math.round(GUESS.right / total * 100);
  if (!GUESS.saved) {
    DB.progress.guessLog.push({ date: TODAY, total, right: GUESS.right });
    GUESS.saved = true;
    save();
  }
  $('#gCount').textContent = '完成';
  const icon = pct >= 80 ? '🎯' : pct >= 50 ? '🌱' : '📖';
  const lead = pct >= 80
    ? '这一轮几乎都认识。词不是背下来的，是在语境里反复认出它的。'
    : pct >= 50
      ? '猜对了一半多。错的那几个不是笨，只是还没在文章里见过足够多次。'
      : '这一轮错得比较多，很正常——这些词你大多是第一次见。明天它们还会出现。';
  $('#gCard').innerHTML = `
    <div class="gdone">
      <div class="gdone-ico">${icon}</div>
      <h2>猜对 ${GUESS.right} / ${total}</h2>
      <p class="glead">${lead}</p>
      <div class="gsum">
        <div><b>+${GUESS.gained}</b><span>新拿到的勾</span></div>
        <div><b>${GUESS.mastered}</b><span>这轮新掌握</span></div>
        <div><b>${masteredCount()}</b><span>累计掌握</span></div>
      </div>
      <button class="btn b" id="gToTrain">${nextStep('guess') === 'train' ? '进入综合训练 →' : '完成这篇 →'}</button>
    </div>`;
  $('#gToTrain').onclick = () => enterStep(nextStep('guess'));
  checkAch();
}

/* ---------------- 训练 ---------------- */
function renderTrain() {
  if (!cur) return;
  const r = cur.reading || { q: '', opts: [], a: 0, exp: '' };
  $('#rq').textContent = r.q;
  $('#ropts').innerHTML = (r.opts || []).map((o, i) =>
    `<label class="opt" data-i="${i}"><input type="radio" name="rq" value="${i}">${esc(o)}</label>`).join('');
  $('#rAns').hidden = true; $('#tAns').hidden = true; $('#cAns').hidden = true;
  // 恢复已答的阅读题：选中项、对错标色、解析
  if (cur._rDone && cur._rPick >= 0) {
    const radio = $('#ropts input[value="' + cur._rPick + '"]');
    if (radio) radio.checked = true;
    $$('#ropts .opt').forEach((el, k) => {
      if (k === r.a) el.classList.add('right');
      else if (k === cur._rPick) el.classList.add('wrong');
    });
    $('#rAns').hidden = false;
    $('#rAns').innerHTML = `<b>${cur._rPick === r.a ? '答对了' : '正确是 ' + String.fromCharCode(65 + r.a)}</b><br>${esc(r.exp || '')}`;
  }

  const t = cur.translation || {};
  $('#tq').textContent = t.en || '';
  // 草稿按文章存，首次打开是空的——不要把答案或别的文章写过的东西预填进去
  $('#tInput').value = cur._tDraft || '';

  const c = cur.collocation || {};
  $('#cq').innerHTML = `用 <b style="color:#C67C2A">"${esc(c.ph || '')}"</b> 造一个句子<div style="font-size:11.5px;color:var(--sub);margin-top:5px">${esc(c.zh || '')}</div>`;
  $('#cInput').value = cur._cDraft || '';
}
$('#rSubmit').onclick = () => {
  const sel = $('#ropts input:checked');
  if (!sel) { toast('先选一个'); return; }
  const i = +sel.value, a = cur.reading.a;
  $$('#ropts .opt').forEach((el, k) => { if (k === a) el.classList.add('right'); else if (k === i) el.classList.add('wrong'); });
  if (!cur._rDone) {
    cur._rDone = true;
    cur._rPick = i;
    cur._rRight = i === a ? 1 : 0;
    DB.progress.readLog.push(cur._rRight);
    save();
  }
  $('#rAns').hidden = false;
  $('#rAns').innerHTML = `<b>${i === a ? '答对了' : '正确是 ' + String.fromCharCode(65 + a)}</b><br>${esc(cur.reading.exp || '')}`;
};
$('#rShow').onclick = () => {
  const a = cur.reading.a;
  $$('#ropts .opt').forEach((el, k) => { if (k === a) el.classList.add('right'); });
  $('#rAns').hidden = false;
  $('#rAns').innerHTML = `<b>答案 ${String.fromCharCode(65 + a)}</b><br>${esc(cur.reading.exp || '')}`;
};
$('#tInput').oninput = e => { if (cur) { cur._tDraft = e.target.value; save(); } };
$('#cInput').oninput = e => { if (cur) { cur._cDraft = e.target.value; save(); } };
$('#tSubmit').onclick = () => {
  if (!$('#tInput').value.trim()) { toast('先写一句'); return; }
  const t = cur.translation || {};
  $('#tAns').hidden = false;
  $('#tAns').innerHTML = `<b>参考译文</b><br>${esc(t.ref || '')}<br><br><b>句子结构</b><br>${esc(t.frame || '')}<br><br><b>常见错误</b><br>${esc(t.err || '')}`;
};
$('#tShow').onclick = $('#tSubmit').onclick;
$('#cSubmit').onclick = () => {
  if (!$('#cInput').value.trim()) { toast('先写一句'); return; }
  const c = cur.collocation || {};
  $('#cAns').hidden = false;
  $('#cAns').innerHTML = `<b>示范句</b><br>${esc(c.demo || '')}<br><br><b>原文</b><br>${esc(c.ex || '')}<br><br>${esc(c.frame || '')}`;
  checkAch();
};
$('#cShow').onclick = $('#cSubmit').onclick;

/* ---------------- 完成 ---------------- */
$('#toDone').onclick = () => {
  if (!cur) return;
  const ll = DB.progress.listenLog.slice(-cur.listening.length);
  const acc = ll.length ? ll.reduce((a, b) => a + b, 0) / ll.length : 0;
  const hasT = !!($('#tInput').value || '').trim();
  const hasC = !!($('#cInput').value || '').trim();
  const rAcc = cur._rRight || 0;  // 本篇阅读结果，不是全局最后一条

  let gain = 40 + Math.round(acc * 35) + (cur._rDone ? (rAcc ? 18 : 9) : 0) + (hasT ? 12 : 0) + (hasC ? 18 : 0) + Math.round(cur.len / 400 * 20);
  const first = !cur.done;
  if (first) cur.done = true;
  DB.progress.xp += first ? gain : Math.round(gain * 0.3);
  DB.progress.doneIds = DB.progress.doneIds || [];
  if (!DB.progress.doneIds.includes(cur.id)) DB.progress.doneIds.push(cur.id);
  bumpDay(cur.len);
  save();

  $('#d-listen').textContent = ll.length ? Math.round(acc * 100) + '%' : '—';
  // 完成状态看"是否做过"，不是"是否答对"——答错了也算读完这一环
  const dRead = $('#d-read');
  dRead.textContent = cur._rDone ? '✓' : '—';
  dRead.title = cur._rDone ? (rAcc ? '阅读理解答对了' : '阅读理解做过了（答错，已显示解析）') : '还没做阅读理解';
  $('#d-trans').textContent = hasT ? '✓' : '—';
  $('#d-coll').textContent = hasC ? '✓' : '—';
  $('#xpGain').textContent = '+' + (first ? gain : Math.round(gain * 0.3)) + ' XP' + (first ? '' : '（复习）');
  const ws = (cur.words || []).map(x => x.w);
  const got3 = ws.filter(w => ((DB.words[w] || {}).checks || 0) >= 3);
  $('#d-words').innerHTML = `<div class="lbl">这一篇的词</div>` +
    (ws.length ? ws.map(w => `<span class="wtag"${got3.includes(w) ? ' style="background:#EAF6E4;color:#4B8A38"' : ''}>${esc(w)}${got3.includes(w) ? ' ✓' : ''}</span>`).join('') : '<span style="font-size:12px;color:var(--sub)">没有标注词汇</span>');

  $('#doneArt').innerHTML = doneCat();
  const L = level(DB.progress.xp);
  $('#doneTitle').textContent = first ? '又读完一篇' : '复习完了';
  $('#doneSub').textContent = `现在 ${L.lv} 级 · 累计 ${DB.progress.xp} XP · 读过 ${DB.articles.filter(a => a.done).length} 篇`;

  go('done');
  checkAch();
};

function doneCat() {
  return `<svg width="78" height="68" viewBox="0 0 78 68">
    <ellipse cx="39" cy="43" rx="22" ry="18" fill="#F5DFC4"/>
    <path d="M19 31 L20 13 L31 23 Z" fill="#F5DFC4" stroke="#E8CBA6" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M59 31 L58 13 L47 23 Z" fill="#F5DFC4" stroke="#E8CBA6" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M21 14 L22 22 L28 21 Z" fill="#F0B9B0"/><path d="M57 14 L56 22 L50 21 Z" fill="#F0B9B0"/>
    <path d="M30 39 q3.5 3 7 0" stroke="#8A6A4B" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M41 39 q3.5 3 7 0" stroke="#8A6A4B" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M37 45 q2 2.4 4 0" stroke="#C99180" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <ellipse cx="25" cy="46" rx="4.5" ry="3" fill="#F7C3BC" opacity=".6"/>
    <ellipse cx="53" cy="46" rx="4.5" ry="3" fill="#F7C3BC" opacity=".6"/>
    <path d="M57 47 q10-4 14 2" stroke="#F5DFC4" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M65 21l2.2 6 6 1.6-6 1.8-2.2 6-2.2-6-6-1.8 6-1.6z" fill="#F2C14E"/>
  </svg>`;
}

/* ---------------- 成就 ---------------- */
function checkAch() {
  const s = { articles: DB.articles, words: DB.words, progress: DB.progress };
  ACHIEVEMENTS.forEach(a => {
    if (DB.progress.achievements[a.id]) return;
    let ok = false;
    try { ok = a.test(s); } catch (e) { }
    if (ok) {
      DB.progress.achievements[a.id] = Date.now();
      save();
      popAch(a);
    }
  });
}
function popAch(a) {
  const p = $('#achPop');
  p.innerHTML = `<div class="ai">${a.icon}</div><div><b>解锁：${a.name}</b><span>${a.desc}</span></div>`;
  p.hidden = false;
  clearTimeout(p._t);
  p._t = setTimeout(() => { p.hidden = true; }, 3600);
}

/* ---------------- 文库 ---------------- */
function renderLibrary() {
  const list = DB.articles;
  if (!list.length) {
    $('#libBody').innerHTML = `<div class="simple"><h2>文库还是空的</h2><p class="lead">在「今日」页生成第一篇文章，它就会存在这里。</p></div>`;
    return;
  }
  $('#libBody').innerHTML = `<div class="simple">
    <h2>读过和没读过的</h2><p class="lead">共 ${list.length} 篇 · 已完成 ${list.filter(a => a.done).length} 篇</p>
    <div class="libgrid">
      ${list.map(a => `<div class="libcard" data-id="${a.id}">
        <b>${esc(a.title)}${a.done ? '<span class="done">已完成</span>' : ''}</b>
        <div class="m">${esc(a.date)} · ${esc(a.topic || '')} · ${a.len} 词</div>
      </div>`).join('')}
    </div></div>`;
  $$('#libBody .libcard').forEach(el => el.onclick = () => {
    const a = DB.articles.find(x => x.id === el.dataset.id);
    if (a) openArticle(a);
  });
}


let BOOK = { tab: 'cet6', filter: 'all', q: '', page: 0 };
const BOOK_PER = 120;

function statusKey(w) {
  const r = DB.words[w];
  if (!r) return 'none';
  const c = r.checks || 0;
  if (c >= 3) return 'mastered';
  if (c > 0) return 'learning';
  return 'seen';
}

function cellHTML(w, ph, zh) {
  const rec = DB.words[w] || {};
  return `<div class="bcell st-${statusKey(w)}" data-w="${esc(w)}">
    <div class="bw">${esc(w)}</div>
    <div class="bph">${esc(ph || '')}</div>
    ${zh ? `<div class="bz">${esc(zh)}</div>` : ''}
    <div class="bc">${checks3(rec.checks || 0)}</div>
  </div>`;
}

function pagerHTML(pages) {
  if (pages <= 1) return '';
  return `<div class="pager">
    <b class="${BOOK.page === 0 ? 'off' : ''}" data-pg="-1">← 上一页</b>
    <span>${BOOK.page + 1} / ${pages}</span>
    <b class="${BOOK.page >= pages - 1 ? 'off' : ''}" data-pg="1">下一页 →</b>
  </div>`;
}

function renderWords() {
  const pool = bookPool();
  const total = pool.length;
  const m = masteredCount();
  const learning = Object.values(DB.words).filter(w => { const c = w.checks || 0; return c > 0 && c < 3; }).length;
  const touched = Object.keys(DB.words).length;
  const withZh = pool.filter(x => x.zh).length;
  const pct = total ? Math.round(m / total * 100) : 0;

  const head = `
    <div class="simple book-head">
      <div class="bh-top">
        <div>
          <h2>词书</h2>
          <p class="lead" style="margin-bottom:0">三个勾算初步掌握。勾只在「猜词」里猜对时给，猜错不给。</p>
        </div>
        <button class="btn sm" id="bookImport">导入我的词表</button>
      </div>
      <div class="bh-stats">
        <div><b>${total}</b><span>词书总量</span></div>
        <div><b style="color:#5E7A55">${m}</b><span>已初步掌握</span></div>
        <div><b style="color:#A8823F">${learning}</b><span>学习中</span></div>
        <div><b>${touched}</b><span>遇到过的词</span></div>
      </div>
      <div class="bh-bar"><i style="width:${pct}%"></i></div>
      <div class="bh-note">已掌握 ${pct}% · 带释义 ${withZh} 个${(DB.books && DB.books.length) ? ' · 另有 ' + DB.books.length + ' 本导入词书' : ''}</div>
    </div>`;

  const tabs = `
    <div class="book-tabs">
      <b class="${BOOK.tab === 'cet6' ? 'on' : ''}" data-t="cet6">六级词汇 ${total}</b>
      <b class="${BOOK.tab === 'mine' ? 'on' : ''}" data-t="mine">我遇到过的 ${touched}</b>
    </div>`;

  let list = [];
  if (BOOK.tab === 'mine') {
    list = Object.entries(DB.words)
      .sort((a, b) => (b[1].at || 0) - (a[1].at || 0))
      .map(([w, v]) => ({ w, ph: v.ph || phOf(w), zh: v.zh || '' }));
  } else {
    list = pool.filter(x => {
      if (BOOK.q && !x.w.includes(BOOK.q.toLowerCase()) && !String(x.zh || '').includes(BOOK.q)) return false;
      if (BOOK.filter === 'all') return true;
      const st = statusKey(x.w);
      if (BOOK.filter === 'none') return st === 'none' || st === 'seen';
      return st === BOOK.filter;
    });
  }

  const pages = Math.max(1, Math.ceil(list.length / BOOK_PER));
  if (BOOK.page >= pages) BOOK.page = pages - 1;
  if (BOOK.page < 0) BOOK.page = 0;
  const slice = list.slice(BOOK.page * BOOK_PER, BOOK.page * BOOK_PER + BOOK_PER);

  const filters = [['all', '全部'], ['none', '未开始'], ['learning', '学习中'], ['mastered', '已掌握']];
  const tools = BOOK.tab === 'cet6' ? `
    <div class="book-tools">
      <input class="book-q" id="bookQ" placeholder="搜索单词或释义…" value="${esc(BOOK.q)}">
      <div class="book-filters">
        ${filters.map(([k, n]) => `<b data-f="${k}" class="${BOOK.filter === k ? 'on' : ''}">${n}</b>`).join('')}
      </div>
    </div>` : '';

  $('#wordsBody').innerHTML = head + tabs + `
    <div class="simple">
      ${tools}
      <div class="book-count">${list.length} 个${BOOK.tab === 'cet6' && !BOOK.q && BOOK.filter === 'all' ? '' : '（已筛选）'}</div>
      ${list.length ? `<div class="wgrid">${slice.map(x => cellHTML(x.w, x.ph, x.zh)).join('')}</div>` + pagerHTML(pages)
        : `<p class="lead" style="margin:0">${BOOK.tab === 'mine' ? '还没有遇到过的词。读一篇文章，点一下橙色的词就会进来。' : '没有符合条件的词。'}</p>`}
    </div>`;

  $$('#wordsBody .book-tabs b').forEach(el => el.onclick = () => { BOOK.tab = el.dataset.t; BOOK.page = 0; renderWords(); });
  $$('#wordsBody .book-filters b').forEach(el => el.onclick = () => { BOOK.filter = el.dataset.f; BOOK.page = 0; renderWords(); });
  $$('#wordsBody .pager b').forEach(el => el.onclick = () => {
    if (el.classList.contains('off')) return;
    BOOK.page += +el.dataset.pg;
    renderWords();
    $('#main').scrollTop = 0;
  });
  $$('#wordsBody .bcell').forEach(el => el.onclick = () => { speakText(el.dataset.w); });
  const q = $('#bookQ');
  if (q) {
    q.oninput = e => {
      BOOK.q = e.target.value;
      BOOK.page = 0;
      const pos = e.target.selectionStart;
      renderWords();
      const nq = $('#bookQ');
      if (nq) { nq.focus(); nq.setSelectionRange(pos, pos); }
    };
  }
  const imp = $('#bookImport');
  if (imp) imp.onclick = () => $('#bookFile').click();
}

/* 导入 CSV / TXT：每行 单词[,词性][,释义]，分隔符支持逗号、制表符、全角逗号 */
function importBook(text, name) {
  const rows = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const words = [];
  rows.forEach(line => {
    const parts = line.split(/\t|,|，|;|\s{2,}/).map(x => x.trim()).filter(Boolean);
    if (!parts.length) return;
    const w = (parts[0] || '').toLowerCase();
    if (!/^[a-z][a-z'-]*$/.test(w)) return;
    let p = '', zh = '';
    parts.slice(1).forEach(x => {
      if (/^(n|v|vt|vi|adj|adv|prep|conj|pron|num|art|aux|int)\.?$/i.test(x)) p = x.replace(/\.?$/, '.');
      else if (!zh) zh = x;
    });
    if (!zh) return;
    words.push({ w, p, zh });
  });
  if (!words.length) { toast('没读到有效词条，格式：word,pos,释义'); return; }
  DB.books = DB.books || [];
  DB.books.push({ id: 'b' + Date.now(), name: name || '导入词书', words });
  save();
  BOOK.tab = 'cet6';
  renderWords();
  toast('导入 ' + words.length + ' 个词');
}

/* ================= 独立背单词（不依赖文章） ================= */
const STUDY = Object.assign(
  { phase: 'setup', scope: 'all', n: 12, mode: 'choice', items: [], i: 0, right: 0, saved: false, startedAt: 0 },
  DB.config.study || {}
);
const STUDY_SCOPES = [
  ['all', '全部词书', '词书里所有带释义的词'],
  ['mine', '我遇到过的', '在文章里出现过、进过词库的词'],
  ['learning', '学习中', '拿到 1–2 个勾、还没掌握的词'],
  ['weak', '错过的小本', '以前猜错过的词'],
  ['mastered', '复习已掌握', '拿满三个勾的词，回头巩固']
];

function studyScopes() {
  const pool = bookPool().filter(x => x.zh);
  const withRec = k => pool.filter(x => { const r = DB.words[x.w]; return r && k(r); });
  return {
    all: pool,
    mine: withRec(() => true),
    learning: withRec(r => (r.checks || 0) > 0 && (r.checks || 0) < 3),
    weak: withRec(r => (r.wrong || 0) > 0),
    mastered: withRec(r => (r.checks || 0) >= 3)
  };
}

function shuffleArr(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function startStudy() {
  const scopes = studyScopes();
  const src = scopes[STUDY.scope] || scopes.all;
  if (!src.length) { toast('这个范围里还没有带释义的词'); return; }
  const distractors = scopes.all;
  STUDY.items = shuffleArr(src).slice(0, STUDY.n).map(x => {
    const r = recOf(x.w, x.p, x.zh);
    const zh = r.zh || x.zh;
    const used = new Set([zh]), dist = [];
    let guard = 0;
    while (dist.length < 3 && guard++ < 600) {
      const c = distractors[Math.floor(Math.random() * distractors.length)];
      if (!c || !c.zh || used.has(c.zh)) continue;
      used.add(c.zh); dist.push(c.zh);
    }
    if (dist.length < 3) {
      ['表示否定的意思', '一个不相关的概念', '另一种常见但不对的解释'].forEach(f => {
        if (dist.length < 3 && !used.has(f)) { used.add(f); dist.push(f); }
      });
    }
    const opts = shuffleArr([zh, ...dist]);
    return { w: x.w, ph: r.ph || x.ph || phOf(x.w), p: r.p || x.p || '', zh, opts, a: opts.indexOf(zh), ok: null };
  });
  STUDY.i = 0; STUDY.right = 0; STUDY.saved = false;
  STUDY.startedAt = Date.now(); STUDY.phase = 'play';
  renderStudy();
}

function renderStudy() {
  const box = $('#studyBody');
  if (!box) return;
  if (STUDY.phase === 'setup') return renderStudySetup(box);
  if (STUDY.phase === 'play') return renderStudyPlay(box);
  renderStudyDone(box);
}

function renderStudySetup(box) {
  const scopes = studyScopes();
  const counts = {};
  Object.keys(scopes).forEach(k => counts[k] = scopes[k].length);
  const nOpts = [10, 20, 50];
  box.innerHTML = `
    <div class="simple study-setup">
      <div class="study-hero">
        <div>
          <h2>今天背哪些词？</h2>
          <p class="lead">从词书里挑一组单独背，跟今天有没有读文章没关系。</p>
        </div>
        <div class="study-hero-ico">🧠</div>
      </div>
      <div class="study-group">
        <div class="study-label">① 选范围</div>
        <div class="study-chips">
          ${STUDY_SCOPES.map(([k, name, desc]) => `
            <button class="study-chip ${STUDY.scope === k ? 'on' : ''}" data-scope="${k}" ${counts[k] ? '' : 'disabled'}>
              <b>${name}</b><span>${counts[k]} 个 · ${desc}</span>
            </button>`).join('')}
        </div>
      </div>
      <div class="study-group">
        <div class="study-label">② 每组几个</div>
        <div class="study-chips study-inline">
          ${nOpts.map(n => `<button class="study-pill ${STUDY.n === n ? 'on' : ''}" data-n="${n}">${n} 个</button>`).join('')}
        </div>
      </div>
      <div class="study-group">
        <div class="study-label">③ 怎么背</div>
        <div class="study-chips">
          <button class="study-chip ${STUDY.mode === 'choice' ? 'on' : ''}" data-mode="choice">
            <b>四选一 📝</b><span>看单词，从四个释义里挑一个——和文章里的猜词一样，答对给勾</span>
          </button>
          <button class="study-chip ${STUDY.mode === 'flip' ? 'on' : ''}" data-mode="flip">
            <b>翻卡自评 🃏</b><span>先自己想，再看释义，诚实判断认不认识——快，但不给勾</span>
          </button>
        </div>
      </div>
      <div class="study-actions">
        <button class="btn b" id="studyStart">开始背词组 →</button>
        <span class="study-tip">答对 +5 XP · 进度会自动存</span>
      </div>
    </div>`;

  $$('#studyBody [data-scope]').forEach(el => el.onclick = () => {
    STUDY.scope = el.dataset.scope; saveStudyCfg(); renderStudy();
  });
  $$('#studyBody [data-n]').forEach(el => el.onclick = () => {
    STUDY.n = +el.dataset.n; saveStudyCfg(); renderStudy();
  });
  $$('#studyBody [data-mode]').forEach(el => el.onclick = () => {
    STUDY.mode = el.dataset.mode; saveStudyCfg(); renderStudy();
  });
  $('#studyStart').onclick = startStudy;
}

function saveStudyCfg() {
  DB.config.study = { scope: STUDY.scope, n: STUDY.n, mode: STUDY.mode };
  save();
}

function renderStudyPlay(box) {
  const it = STUDY.items[STUDY.i];
  if (!it) return renderStudyDone(box);
  const r = recOf(it.w, it.p, it.zh);
  const dots = STUDY.items.map((x, k) =>
    `<i class="${x.ok === true ? 'ok' : x.ok === false ? 'no' : k === STUDY.i ? 'cur' : ''}"></i>`).join('');
  const head = `
    <div class="gdots">${dots}</div>
    <div class="gword">${esc(it.w)}</div>
    <div class="gpos">${esc(it.ph || '')}${it.ph && it.p ? ' · ' : ''}${esc(it.p || '')}</div>
    <div class="gfacts" style="margin-top:14px">
      <div class="gchecks">${checks3(r.checks)}</div>
      <div class="gstat">${statText(r.checks)}</div>
      <button class="gspk" id="studySpk" title="听一下"><svg viewBox="0 0 24 24"><path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/></svg></button>
    </div>`;
  const foot = `<div class="gfoot"><button class="btn sm" id="studyQuit">退出本组</button></div>`;

  if (STUDY.mode === 'flip') {
    box.innerHTML = `<div class="study-wrap"><div class="gcard study-card">
      <div class="study-count">${STUDY.i + 1} / ${STUDY.items.length} · 翻卡自评</div>
      ${head}
      <div class="gask">先自己在心里想一想，它是什么意思？</div>
      <div class="study-flip">
        <button class="btn b" id="studyReveal">显示释义 👀</button>
        <div id="studyRevealBox" hidden>
          <div class="study-meaning">${esc(it.zh)}</div>
          <div class="study-judge">
            <button class="btn sm" id="studyNo">不认识 😵</button>
            <button class="btn b sm" id="studyYes">认识 ✓</button>
          </div>
        </div>
      </div>
      ${foot}
    </div></div>`;
  $('#studyQuit').onclick = () => { STUDY.phase = 'setup'; renderStudy(); };
  $('#studySpk').onclick = () => speakText(it.w);
  $('#studyReveal').onclick = () => {
      $('#studyReveal').hidden = true;
      $('#studyRevealBox').hidden = false;
      studyJudge(true);
    };
    $('#studyYes').onclick = () => studyJudge(true, true);
    $('#studyNo').onclick = () => studyJudge(false, true);
  } else {
    box.innerHTML = `<div class="study-wrap"><div class="gcard study-card">
      <div class="study-count">${STUDY.i + 1} / ${STUDY.items.length} · 四选一</div>
      ${head}
      <div class="gask">它最接近哪个意思？</div>
      <div class="gopts" id="studyOpts">
        ${it.opts.map((o, i) => `<button class="gopt" data-i="${i}"><i>${'ABCD'[i]}</i><span>${esc(o)}</span></button>`).join('')}
      </div>
      <div class="gfb" id="studyFb" hidden></div>
      <div class="gfoot">
        <button class="btn sm" id="studySkip">不会，直接看</button>
        <button class="btn b" id="studyNext" hidden>下一个 →</button>
      </div>
      ${foot}
    </div></div>`;
    $('#studyQuit').onclick = () => { STUDY.phase = 'setup'; renderStudy(); };
    $('#studySpk').onclick = () => speakText(it.w);
    $$('#studyOpts .gopt').forEach(b => b.onclick = () => answerStudy(+b.dataset.i));
    $('#studySkip').onclick = () => answerStudy(-1);
    $('#studyNext').onclick = () => { STUDY.i++; renderStudy(); };
  }
}

// flip 模式：reveal 只显示释义；之后 yes/no 才记分。ok 参数表示这次是真的作答。
function studyJudge(ok, answered) {
  const it = STUDY.items[STUDY.i];
  if (!it) return;
  if (!answered) return;
  if (it.ok !== null) return;
  it.ok = ok;
  const r = recOf(it.w, it.p, it.zh);
  if (ok) { STUDY.right++; DB.progress.xp = (DB.progress.xp || 0) + 3; }
  else { r.wrong = (r.wrong || 0) + 1; }
  r.at = Date.now();
  save();
  const fb = $('#studyFb');
  if (fb) {
    fb.hidden = false;
    fb.className = 'gfb ' + (ok ? 'ok' : 'no');
    fb.innerHTML = ok ? `<b>✓ 认识</b><span>${esc(it.w)} · ${esc(it.zh)}</span>`
      : `<b>✗ 记一下</b><span>${esc(it.w)} 是「${esc(it.zh)}」。它已经进「错过的小本」，下次可以单独复习。</span>`;
  }
  const box = $('#studyRevealBox');
  if (box) {
    $$('#studyRevealBox button').forEach(b => b.disabled = true);
    const next = document.createElement('button');
    next.className = 'btn b sm';
    next.textContent = STUDY.i + 1 >= STUDY.items.length ? '看这一轮结果 →' : '下一个 →';
    next.onclick = () => { STUDY.i++; renderStudy(); };
    box.appendChild(next);
  }
  checkAch();
}

function answerStudy(choice) {
  const it = STUDY.items[STUDY.i];
  if (!it || it.ok !== null) return;
  const ok = choice === it.a;
  it.ok = ok;
  const r = recOf(it.w, it.p, it.zh);
  if (ok) {
    STUDY.right++;
    if ((r.checks || 0) < 3) {
      r.checks = (r.checks || 0) + 1;
      if (r.checks === 3) toast('🎉 ' + it.w + ' 拿满三个勾了');
    }
    DB.progress.xp = (DB.progress.xp || 0) + 5;
  } else {
    r.wrong = (r.wrong || 0) + 1;
  }
  r.at = Date.now();
  r.level = r.checks >= 3 ? 3 : r.checks > 0 ? 2 : 1;
  save();
  $$('#studyOpts .gopt').forEach((el, k) => {
    el.disabled = true;
    if (k === it.a) el.classList.add('right');
    else if (k === choice) el.classList.add('wrong');
  });
  const fb = $('#studyFb');
  fb.hidden = false;
  fb.className = 'gfb ' + (ok ? 'ok' : 'no');
  fb.innerHTML = ok
    ? `<b>✓ 对了</b><span>${esc(it.w)} · ${esc(it.zh)}${r.checks >= 3 ? ' —— 三个勾拿满，初步掌握' : ''}</span>`
    : `<b>✗ 差一点</b><span>${esc(it.w)} 是「${esc(it.zh)}」。这次不给勾，它已进「错过的小本」。</span>`;
  $('#studySkip').hidden = true;
  const next = $('#studyNext');
  next.hidden = false;
  next.textContent = STUDY.i + 1 >= STUDY.items.length ? '看这一轮结果 →' : '下一个 →';
  checkAch();
}

function renderStudyDone(box) {
  const total = STUDY.items.length;
  const pct = total ? Math.round(STUDY.right / total * 100) : 0;
  if (!STUDY.saved) {
    DB.progress.studyLog = DB.progress.studyLog || [];
    DB.progress.studyLog.push({ date: TODAY, total, right: STUDY.right, mode: STUDY.mode });
    STUDY.saved = true;
    save();
  }
  const icon = pct >= 80 ? '🎯' : pct >= 50 ? '🌱' : '📚';
  const lead = pct >= 80 ? '这一轮很稳。词是反复认出来的，不是一次背下来的。'
    : pct >= 50 ? '过半了。错的那几个已经进了「错过的小本」，下次单独收拾它们。'
      : '第一次见这些词很正常。先混个脸熟，明天它们还会来。';
  box.innerHTML = `<div class="study-wrap"><div class="gcard study-card"><div class="gdone">
    <div class="gdone-ico">${icon}</div>
    <h2>记住 ${STUDY.right} / ${total}</h2>
    <p class="glead">${lead}</p>
    <div class="gsum">
      <div><b>${total}</b><span>本组词数</span></div>
      <div><b>${STUDY.right}</b><span>答对</span></div>
      <div><b>${total - STUDY.right}</b><span>待巩固</span></div>
    </div>
    <div class="study-judge" style="justify-content:center">
      <button class="btn b" id="studyAgain">再来一组 →</button>
      <button class="btn" id="studyChange">换范围</button>
    </div>
  </div></div></div>`;
  $('#studyAgain').onclick = () => { STUDY.phase = 'play'; startStudy(); };
  $('#studyChange').onclick = () => { STUDY.phase = 'setup'; renderStudy(); };
}

/* ---------------- 成长 ---------------- */
function renderGrowth() {
  const L = level(DB.progress.xp);
  const l = DB.progress.listenLog, r = DB.progress.readLog;
  const acc = l.length ? Math.round(l.reduce((a, b) => a + b, 0) / l.length * 100) : 0;
  const rAcc = r.length ? Math.round(r.reduce((a, b) => a + b, 0) / r.length * 100) : 0;
  const doneN = DB.articles.filter(a => a.done).length;
  const totalWords = DB.articles.filter(a => a.done).reduce((s, a) => s + a.len, 0);
  const days = Object.keys(DB.progress.days).length;

  $('#growthBody').innerHTML = `
    <div class="simple" style="margin-bottom:14px">
      <h2>现在的你</h2><p class="lead">没有连续打卡，没有断签惩罚。这里只记录你实际做了什么。</p>
      <div class="mini-stats" style="padding:6px 0 18px">
        <div><b style="font-size:26px">Lv.${L.lv}</b><span>等级</span></div>
        <div><b style="font-size:26px">${doneN}</b><span>读过的篇数</span></div>
        <div><b style="font-size:26px">${totalWords}</b><span>读过的词数</span></div>
        <div><b style="font-size:26px">${days}</b><span>学习过的天数</span></div>
      </div>
      <div class="row"><span class="lab">距离下一级</span><span class="val">${L.need - L.cur} XP</span></div>
      <div class="row"><span class="lab">听力正确率</span><span class="val">${l.length ? acc + '%' : '还没做过题'}</span></div>
      <div class="row"><span class="lab">阅读题正确率</span><span class="val">${r.length ? rAcc + '%' : '还没做过题'}</span></div>
      <div class="row"><span class="lab">遇到过的词</span><span class="val">${Object.keys(DB.words).length} 个</span></div>
      <div class="row"><span class="lab">已初步掌握（三个勾）</span><span class="val" style="color:#5E7A55;font-weight:600">${masteredCount()} 个</span></div>
      <div class="row"><span class="lab">学习中（有一到两个勾）</span><span class="val">${Object.values(DB.words).filter(w => { const c = w.checks || 0; return c > 0 && c < 3; }).length} 个</span></div>
      <div class="row"><span class="lab">猜词正确率</span><span class="val">${DB.progress.guessLog.length ? Math.round(DB.progress.guessLog.reduce((a, b) => a + b.right, 0) / Math.max(1, DB.progress.guessLog.reduce((a, b) => a + b.total, 0)) * 100) + '%' : '还没猜过'}</span></div>
      <div class="row"><span class="lab">写过翻译 / 造句</span><span class="val">${DB.progress.trans ? '有' : '还没有'} / ${DB.progress.coll ? '有' : '还没有'}</span></div>
    </div>
    <div class="simple">
      <h2>成就</h2><p class="lead">解锁了 ${Object.keys(DB.progress.achievements).length} / ${ACHIEVEMENTS.length}</p>
      <div class="ach-grid">
        ${ACHIEVEMENTS.map(a => `<div class="ach ${DB.progress.achievements[a.id] ? '' : 'off'}">
          <div class="ai">${a.icon}</div><b>${a.name}</b><span>${a.desc}</span></div>`).join('')}
      </div>
    </div>`;
}

/* ---------------- 设置 ---------------- */
function renderSettings() {
  const c = DB.config;
  const p = PROVIDERS[c.provider] || PROVIDERS.zhipu;
  const s = c.steps = Object.assign({ listen: true, guess: true, train: true }, c.steps || {});
  $('#settingsBody').innerHTML = `
    <div class="simple" style="margin-bottom:14px">
      <h2>AI 接口</h2>
      <p class="lead">推荐智谱 GLM-4-Flash：国内直连、永久免费、不用绑卡。</p>

      <div class="field">
        <label>服务商</label>
        <select class="sel" id="setProvider" style="width:100%;padding:9px 12px">
          ${Object.entries(PROVIDERS).map(([k, v]) => `<option value="${k}" ${c.provider === k ? 'selected' : ''}>${v.name}</option>`).join('')}
        </select>
        <div class="tip">${p.note}</div>
      </div>

      <div class="field">
        <label>API Key</label>
        <input type="password" id="setKey" placeholder="粘贴你的 API Key" value="${esc(c.apiKey)}">
        <div class="tip">免费获取：<a href="#" id="getKey" style="color:#A8823F">打开 bigmodel.cn 注册，新建 API Key</a>，整个过程两分钟，不用绑卡。</div>
      </div>

      <div class="grid2">
        <div class="field">
          <label>接口地址</label>
          <input type="text" id="setBase" value="${esc(c.baseUrl)}">
        </div>
        <div class="field">
          <label>模型名</label>
          <input type="text" id="setModel" value="${esc(c.model)}">
        </div>
      </div>

      <div class="acts">
        <button class="btn b" id="saveCfg">保存</button>
        <button class="btn" id="testCfg">测试连接</button>
        <span class="gen-hint" id="testMsg"></span>
      </div>
    </div>

    <div class="simple" style="margin-bottom:14px">
      <h2>学习环节</h2>
      <p class="lead">把流程改成你舒服的样子。关掉的环节不进流程，随时可以再打开，进度和成就不受影响。</p>
      <div class="step-list">
        <div class="step-row">
          <div class="s-info"><b>听力</b><span>放朗读音频，做两道听力小题</span></div>
          <label class="sw"><input type="checkbox" id="tgListen" ${s.listen !== false ? 'checked' : ''}><i></i></label>
        </div>
        <div class="step-row">
          <div class="s-info"><b>猜词</b><span>读完遮住释义猜意思，猜对拿勾，三个勾算初步掌握</span></div>
          <label class="sw"><input type="checkbox" id="tgGuess" ${s.guess !== false ? 'checked' : ''}><i></i></label>
        </div>
        <div class="step-row">
          <div class="s-info"><b>综合训练</b><span>阅读理解、长难句翻译、搭配造句</span></div>
          <label class="sw"><input type="checkbox" id="tgTrain" ${s.train !== false ? 'checked' : ''}><i></i></label>
        </div>
      </div>
      <div class="field" style="margin-top:16px">
        <label>听力顺序</label>
        <div class="topic-row">
          <div class="topic ${c.order === 'read' ? '' : 'on'}" data-ord="listen">先听后读</div>
          <div class="topic ${c.order === 'read' ? 'on' : ''}" data-ord="read">先读后听</div>
        </div>
        <div class="tip">听力现在不行？选「先读后听」——先读懂文章，再放朗读磨耳朵。</div>
      </div>
    </div>

    <div class="simple" style="margin-bottom:14px">
      <h2>兴趣</h2>
      <p class="lead">AI 会从这里选题。点一下切换，可以多选。</p>
      <div class="topic-row" id="interestRow">
        ${['金融与商业', '经济学', '量化', '科技', '艺术', '文学', '历史', '科学', '心理', '社会'].map(t =>
    `<div class="topic ${c.interests.includes(t) ? 'on' : ''}" data-t="${t}">${t}</div>`).join('')}
      </div>
    </div>

    <div class="simple">
      <h2>声音</h2>
      <p class="lead">使用微软 Edge 在线语音，无需安装、无需 Key，音质接近真人。第一次播放某一句时会现合成，之后走缓存。</p>
      <div class="field">
        <label>音色</label>
        <select class="sel" id="setVoice" style="width:100%;padding:9px 12px">
          ${VOICES.map(v => `<option value="${v.id}" ${curVoice() === v.id ? 'selected' : ''}>${v.name}</option>`).join('')}
        </select>
        <div class="tip">英式发音适合雅思，美式发音适合托福和六级。</div>
      </div>
      <div class="row"><span class="lab">数据目录</span><span class="val" id="dataDir">—</span></div>
    </div>`;

  $('#setProvider').onchange = e => {
    const k = e.target.value, pr = PROVIDERS[k];
    $('#setBase').value = pr.baseUrl;
    $('#setModel').value = pr.model;
    c.provider = k;
  };
  $('#saveCfg').onclick = () => {
    c.apiKey = $('#setKey').value.trim();
    c.baseUrl = $('#setBase').value.trim();
    c.model = $('#setModel').value.trim();
    save(); toast('已保存');
    $('#greetSub').textContent = c.apiKey ? '读一小段你真正感兴趣的东西，就够了。' : $('#greetSub').textContent;
    renderHome();
  };
  $('#testCfg').onclick = async () => {
    const msg = $('#testMsg');
    msg.textContent = '测试中…';
    c.apiKey = $('#setKey').value.trim();
    c.baseUrl = $('#setBase').value.trim();
    c.model = $('#setModel').value.trim();
    const res = await window.studio.chat({
      baseUrl: c.baseUrl, apiKey: c.apiKey, model: c.model, maxTokens: 20,
      messages: [{ role: 'user', content: '只回复两个字：可以' }]
    });
    msg.textContent = res.ok ? '连通了 · ' + (res.ms / 1000).toFixed(1) + 's' : '失败：' + res.error;
    if (res.ok) { save(); renderHome(); }
  };
  $('#setVoice').onchange = e => { DB.config.voice = e.target.value; save(); toast('音色已切换'); };
  $('#getKey').onclick = e => { e.preventDefault(); window.studio.openExternal('https://open.bigmodel.cn/usercenter/apikeys'); };
  $('#tgListen').onchange = e => { s.listen = e.target.checked; save(); toast(s.listen ? '听力已加入流程' : '听力已关闭，直接进原文'); };
  $('#tgGuess').onchange = e => { s.guess = e.target.checked; save(); toast(s.guess ? '猜词已加入流程' : '猜词已关闭'); };
  $('#tgTrain').onchange = e => { s.train = e.target.checked; save(); toast(s.train ? '综合训练已加入流程' : '综合训练已关闭'); };
  $$('#settingsBody .topic[data-ord]').forEach(el => el.onclick = () => {
    c.order = el.dataset.ord; save();
    $$('#settingsBody .topic[data-ord]').forEach(x => x.classList.toggle('on', x === el));
    toast(c.order === 'read' ? '以后先看原文，再听朗读' : '以后先听朗读，再看原文');
  });
  $$('#interestRow .topic').forEach(el => el.onclick = () => {
    const t = el.dataset.t;
    const i = c.interests.indexOf(t);
    if (i >= 0) c.interests.splice(i, 1); else c.interests.push(t);
    el.classList.toggle('on');
    save();
  });
  window.studio.dataDir().then(d => { const el = $('#dataDir'); if (el) el.textContent = d; });
}

/* ---------------- 摘抄（划词收藏好词好句） ---------------- */
let selText = '';
function hideMarkBtn() { $('#markBtn').hidden = true; }
document.addEventListener('mouseup', e => {
  if (e.target.closest && e.target.closest('#markBtn')) return;
  setTimeout(() => {
    const s = window.getSelection();
    const inside = s && !s.isCollapsed && s.anchorNode && $('#artBody').contains(s.anchorNode) && !$('#v-read').hidden;
    const t = s ? String(s).trim() : '';
    if (inside && t.length > 1 && t.length < 600) {
      selText = t;
      const r = s.getRangeAt(0).getBoundingClientRect();
      const b = $('#markBtn');
      b.hidden = false;
      b.style.left = Math.max(10, Math.min(window.innerWidth - 130, r.left + r.width / 2 - 60)) + 'px';
      b.style.top = Math.max(10, r.top - 46) + 'px';
      speakText(t); // 划到哪里，读到哪
    } else hideMarkBtn();
  }, 0);
});
$('#markBtn').onclick = () => {
  const t = selText.trim();
  if (!t) return;
  if (!DB.progress.marks) DB.progress.marks = [];
  if (DB.progress.marks.some(m => m.text === t)) { toast('这句已经在摘抄本里了'); hideMarkBtn(); window.getSelection().removeAllRanges(); return; }
  DB.progress.marks.push({ id: 'mk' + Date.now(), text: t, from: cur ? cur.title : '', date: TODAY, ts: Date.now() });
  DB.progress.xp = (DB.progress.xp || 0) + 2;
  save();
  hideMarkBtn();
  window.getSelection().removeAllRanges();
  toast('已收进摘抄本 · +2 XP');
};
document.addEventListener('mousedown', e => {
  if (!e.target.closest || !e.target.closest('#markBtn')) hideMarkBtn();
  if (!e.target.closest || !e.target.closest('#lkPop')) { const p = $('#lkPop'); if (p) p.hidden = true; }
});

/* ---------------- 双击查词 / 查句（浮窗） ---------------- */
let lkText = '', lkToken = 0;
function showLookup(t) {
  const pop = $('#lkPop');
  if (!pop) return;
  const isWord = /^[A-Za-z'’-]+$/.test(t);
  const w = isWord ? t.toLowerCase() : '';
  let zh = '', ph = '';
  if (w) {
    const inArt = (cur && cur.words || []).find(x => x.w === w);
    const rec = DB.words[w];
    zh = (inArt && inArt.zh) || (rec && rec.zh) || glossOf(w);
    ph = (rec && rec.ph) || phOf(w);
  }
  lkText = t;
  lkToken++;
  $('#lkEn').textContent = t;
  $('#lkPh').textContent = ph ? '/' + String(ph).replace(/^\/+|\/+$/g, '') + '/' : '';
  $('#lkZh').innerHTML = zh ? esc(zh) : '<span class="lk-wait">查询中…</span>';
  pop.hidden = false;
  let r = null;
  try { r = window.getSelection().getRangeAt(0).getBoundingClientRect(); } catch (e) { }
  if (!r || (!r.width && !r.height)) r = { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
  pop.style.left = Math.max(10, Math.min(window.innerWidth - 280, r.left + r.width / 2 - 130)) + 'px';
  pop.style.top = Math.max(10, r.bottom + 8) + 'px';
  if (!zh) aiLookup(t, isWord);
}
async function aiLookup(t, isWord) {
  const c = DB.config;
  const tok = lkToken;
  if (!c.apiKey) {
    if (tok === lkToken) $('#lkZh').innerHTML = '<span class="lk-wait">本地没有这条释义；在设置里填上 AI Key 即可即时翻译</span>';
    return;
  }
  const ctx = cur && cur._sents ? (cur._sents.find(x => x.en && x.en.indexOf(t.split(/\s+/)[0]) >= 0) || {}).en : '';
  const sys = isWord
    ? '你是英汉词典。给出英文单词在给定语境中的中文释义，格式如「v. 意思；释义」。只输出这一行，不要其它任何内容。'
    : '你是翻译。把英文翻译成流畅自然的中文，只输出译文本身。';
  const user = isWord ? ('单词：' + t + (ctx ? '\n所在句子：' + ctx : '')) : t;
  const res = await window.studio.chat({ baseUrl: c.baseUrl, apiKey: c.apiKey, model: c.model, maxTokens: 200, temperature: 0.3, messages: [{ role: 'system', content: sys }, { role: 'user', content: user }] });
  if (tok !== lkToken) return;
  const zhEl = $('#lkZh');
  if (!zhEl) return;
  if (res.ok) {
    const out = String(res.content || '').trim().split('\n')[0].slice(0, 300) || '没查到';
    zhEl.textContent = out;
    // 学到的释义顺手存进词书（只补空缺，不新建）
    if (isWord) {
      const w = t.toLowerCase();
      if (DB.words[w] && !DB.words[w].zh) { DB.words[w].zh = out; save(); }
    }
  } else {
    zhEl.innerHTML = '<span class="lk-wait">查询失败：' + esc(String(res.error || '').slice(0, 60)) + '</span>';
  }
}
$('#lkSpk').onclick = () => { if (lkText) speakText(lkText); };
$('#lkClose').onclick = () => { $('#lkPop').hidden = true; };

function renderMarks() {
  const list = (DB.progress.marks || []).slice().sort((a, b) => b.ts - a.ts);
  const box = $('#marksBody');
  if (!list.length) {
    box.innerHTML = `<div class="coll-empty">
      <div class="ce-t">摘抄本还是空的</div>
      <div class="ce-s">读文章的时候，遇到喜欢的好词好句，用鼠标划选它——<br>会弹出「收进摘抄本」，一句话 +2 XP。</div>
      <button class="btn b" data-go="home">去读今天这篇</button>
    </div>`;
    return;
  }
  box.innerHTML = `
  <div class="mk-sum">
    <span>共 ${list.length} 条摘抄</span>
    <button class="btn sm" id="mkCopy">复制全部</button>
    <button class="btn sm" id="mkExport">导出 txt</button>
  </div>
  <div class="mk-list">` + list.map(m => `
    <div class="mk-card" data-id="${m.id}">
      <div class="mk-text">${esc(m.text)}</div>
      <div class="mk-meta">
        <span>《${esc(m.from || '未命名')}》 · ${m.date || ''}</span>
        <button class="mk-del" title="删除">×</button>
      </div>
    </div>`).join('') + `</div>`;
  $('#mkCopy').onclick = () => {
    const txt = list.map(m => m.text + '\n—— 《' + (m.from || '') + '》 ' + (m.date || '')).join('\n\n');
    copyText(txt);
  };
  $('#mkExport').onclick = () => {
    const txt = list.map(m => m.text + '\n—— 《' + (m.from || '') + '》 ' + (m.date || '')).join('\n\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([txt], { type: 'text/plain;charset=utf-8' }));
    a.download = 'studio-marks-' + TODAY + '.txt';
    a.click();
    URL.revokeObjectURL(a.href);
  };
  $$('#marksBody .mk-del').forEach(b => b.onclick = () => {
    const id = b.closest('.mk-card').dataset.id;
    DB.progress.marks = DB.progress.marks.filter(m => m.id !== id);
    save(); renderMarks(); toast('已删除');
  });
}
function copyText(txt) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).then(() => toast('已复制到剪贴板')).catch(() => copyTextFallback(txt));
  } else copyTextFallback(txt);
}
function copyTextFallback(txt) {
  const ta = document.createElement('textarea');
  ta.value = txt; document.body.appendChild(ta);
  ta.select(); document.execCommand('copy'); ta.remove();
  toast('已复制到剪贴板');
}

/* ---------------- 小工具 ---------------- */
function toast(m) {
  const t = $('#toast');
  t.textContent = m; t.classList.add('show');
  clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('show'), 1800);
}
$('#genCancel').onclick = () => { $('#genOverlay').hidden = true; $('#genFill').style.width = '0'; };

document.addEventListener('keydown', e => {
  if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;
  if (e.code === 'Space' && !$('#v-listen').hidden) { e.preventDefault(); $('#playBtn').click(); }
});

boot();
