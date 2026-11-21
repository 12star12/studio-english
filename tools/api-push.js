/* 通过 GitHub Git Data API 将本地未推送的提交同步为远端一个新提交
   用法: GITHUB_TOKEN=xxx node tools/api-push.js  （在仓库根目录运行） */
'use strict';
const { execSync } = require('child_process');

const REPO = '12star12/studio-english';
const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) { console.error('缺少 GITHUB_TOKEN'); process.exit(1); }

const api = async (path, opt = {}) => {
  const res = await fetch('https://api.github.com' + path, {
    ...opt,
    headers: {
      'Authorization': 'Bearer ' + TOKEN,
      'Accept': 'application/vnd.github+json',
      'User-Agent': 'studio-sync',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(opt.headers || {})
    }
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(res.status + ' ' + JSON.stringify(body).slice(0, 300));
  return body;
};

(async () => {
  // 1. 远端当前 main
  const ref = await api(`/repos/${REPO}/git/ref/heads/main`);
  const baseSha = ref.object.sha;
  const baseCommit = await api(`/repos/${REPO}/git/commits/${baseSha}`);
  console.log('远端 main:', baseSha.slice(0, 8));

  // 2. 本地相对远端的文件变化（core.quotepath=false 保证中文路径不被转义）
  const changes = execSync('git -c core.quotepath=false diff --name-status origin/main..main', { encoding: 'utf8' })
    .trim().split('\n').filter(Boolean).map(l => {
      const m = l.match(/^([AMDR])\s+(.+)$/);
      return { status: m[1], path: m[2] };
    });
  if (!changes.length) { console.log('没有待同步的文件'); return; }
  console.log('待同步文件:', changes.map(c => c.status + ' ' + c.path).join(', '));

  // 3. 建 blob
  const tree = [];
  for (const c of changes) {
    if (c.status === 'D') { tree.push({ path: c.path, mode: '100644', type: 'blob', sha: null }); continue; }
    const b64 = execSync(`git show HEAD:"${c.path}"`, { maxBuffer: 20 * 1024 * 1024 }).toString('base64');
    const blob = await api(`/repos/${REPO}/git/blobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: b64, encoding: 'base64' })
    });
    tree.push({ path: c.path, mode: '100644', type: 'blob', sha: blob.sha });
    console.log('blob ok:', c.path);
  }

  // 4. 建 tree
  const newTree = await api(`/repos/${REPO}/git/trees`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ base_tree: baseCommit.tree.sha, tree })
  });

  // 5. 建 commit（消息 = 最新一条提交主题 + 全部未推提交列表）
  const msgs = execSync('git -c core.quotepath=false log --format=%s origin/main..main', { encoding: 'utf8' })
    .trim().split('\n').filter(Boolean);
  const message = 'sync: ' + msgs[0] + '\n\n' + msgs.map(m => '- ' + m).join('\n');
  const commit = await api(`/repos/${REPO}/git/commits`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, tree: newTree.sha, parents: [baseSha] })
  });
  console.log('新远端提交:', commit.sha.slice(0, 8));

  // 6. 移动 ref
  await api(`/repos/${REPO}/git/refs/heads/main`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sha: commit.sha, force: false })
  });
  console.log('DONE 远端 main ->', commit.sha.slice(0, 8));
})().catch(e => { console.error('FAILED:', e.message); process.exit(1); });
