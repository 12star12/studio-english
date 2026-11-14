const { app, BrowserWindow, ipcMain, shell, Menu } = require('electron');
const path = require('path');
const fs = require('fs');
const { MsEdgeTTS, OUTPUT_FORMAT } = require('msedge-tts');

app.setPath('userData', require('path').join(app.getPath('appData'), 'cet6-studio'));
app.disableHardwareAcceleration();
app.commandLine.appendSwitch('disable-gpu-compositing');

const DATA_DIR = app.getPath('userData');
const dbPath = (name) => path.join(DATA_DIR, name + '.json');

function readDB(name, fallback) {
  try {
    const p = dbPath(name);
    if (!fs.existsSync(p)) return fallback;
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    console.error('readDB', name, e.message);
    return fallback;
  }
}

function writeDB(name, data) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
    const p = dbPath(name);
    const tmp = p + '.tmp';
    fs.writeFileSync(tmp, JSON.stringify(data, null, 2), 'utf8');
    fs.renameSync(tmp, p);
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1460,
    height: 950,
    minWidth: 1080,
    minHeight: 700,
    backgroundColor: '#F7F5F0',
    icon: path.join(__dirname, 'build', 'icon.ico'),
    autoHideMenuBar: true,
    show: true,
    title: 'Studio',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      autoplayPolicy: 'no-user-gesture-required'
    }
  });

  Menu.setApplicationMenu(null);
  win.webContents.on('did-fail-load', (e, code, desc, url) => {
    console.error('LOAD FAIL', code, desc, url);
  });
  win.loadFile('index.html').catch(err => console.error('loadFile', err.message));
  return win;
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

/* ---------------- 数据 ---------------- */
ipcMain.handle('db:load', (e, name) => readDB(name, null));
ipcMain.handle('db:save', (e, name, data) => writeDB(name, data));
ipcMain.handle('sys:open', (e, url) => { shell.openExternal(url); return true; });
ipcMain.handle('sys:dataDir', () => DATA_DIR);

/* ---------------- AI ---------------- */
ipcMain.handle('ai:chat', async (e, opts) => {
  const { baseUrl, apiKey, model, messages, temperature = 0.85, maxTokens = 4000 } = opts || {};
  if (!apiKey) return { ok: false, error: '还没有填写 API Key' };
  if (!baseUrl) return { ok: false, error: '还没有填写接口地址' };

  const url = baseUrl.replace(/\/+$/, '') + '/chat/completions';
  const started = Date.now();

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        model,
        messages,
        temperature,
        max_tokens: maxTokens,
        stream: false
      }),
      signal: AbortSignal.timeout(120000)
    });

    const text = await res.text();
    let json = null;
    try { json = JSON.parse(text); } catch (_) {}

    if (!res.ok) {
      const msg = (json && json.error && (json.error.message || json.error.code)) || text.slice(0, 300);
      return { ok: false, error: `HTTP ${res.status} · ${msg}`, ms: Date.now() - started };
    }
    if (!json) return { ok: false, error: '返回内容不是 JSON：' + text.slice(0, 200) };

    const choice = json.choices && json.choices[0];
    const content = choice && choice.message && choice.message.content;
    if (!content) return { ok: false, error: '模型没有返回内容' };

    return { ok: true, content, ms: Date.now() - started, usage: json.usage || null };
  } catch (err) {
    const msg = err.name === 'TimeoutError' ? '请求超时（120 秒）' : err.message;
    return { ok: false, error: msg };
  }
});

/* ---------------- 语音 ---------------- */
const ttsCache = new Map();

ipcMain.handle('tts:synth', async (e, opts) => {
  const { text, voice } = opts || {};
  if (!text) return { ok: false, error: 'empty text' };
  const v = voice || 'en-US-AriaNeural';
  const key = v + '|' + text;
  if (ttsCache.has(key)) return { ok: true, data: ttsCache.get(key), cached: true };

  try {
    const tts = new MsEdgeTTS();
    await tts.setMetadata(v, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
    const stream = tts.toStream(text);
    const chunks = [];
    await new Promise((resolve, reject) => {
      stream.audioStream.on('data', c => chunks.push(c));
      stream.audioStream.on('end', resolve);
      stream.audioStream.on('error', reject);
      setTimeout(() => reject(new Error('语音服务超时')), 25000);
    });
    const b64 = Buffer.concat(chunks).toString('base64');
    if (ttsCache.size > 1200) ttsCache.clear();
    ttsCache.set(key, b64);
    return { ok: true, data: b64 };
  } catch (err) {
    return { ok: false, error: err.message || String(err) };
  }
});
