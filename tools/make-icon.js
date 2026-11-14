// 用 Electron 把 SVG 光栅化成多尺寸 PNG，再打包成 Windows .ico
const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

const ROOT = path.join(__dirname, '..');
const SVG = path.join(ROOT, 'build', 'icon.svg');
const OUT = path.join(ROOT, 'build');

function writeIco(entries, file) {
  const n = entries.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(n, 4);
  const dir = Buffer.alloc(16 * n);
  let offset = 6 + 16 * n;
  entries.forEach((e, i) => {
    const b = 16 * i;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, b);
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, b + 1);
    dir.writeUInt8(0, b + 2);
    dir.writeUInt8(0, b + 3);
    dir.writeUInt16LE(1, b + 4);
    dir.writeUInt16LE(32, b + 6);
    dir.writeUInt32LE(e.buf.length, b + 8);
    dir.writeUInt32LE(offset, b + 12);
    offset += e.buf.length;
  });
  fs.writeFileSync(file, Buffer.concat([header, dir, ...entries.map(e => e.buf)]));
}

app.disableHardwareAcceleration();
app.whenReady().then(async () => {
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8">
  <style>html,body{margin:0;padding:0;background:transparent;overflow:hidden}
  img{display:block;width:512px;height:512px}</style></head>
  <body><img src="file:///${SVG.replace(/\\/g, '/')}"></body></html>`;
  const tmp = path.join(OUT, '_icon.html');
  fs.writeFileSync(tmp, html);

  const win = new BrowserWindow({
    width: 512, height: 512, show: true, frame: false, transparent: true,
    resizable: false, skipTaskbar: true, hasShadow: false,
    webPreferences: { offscreen: false }
  });
  await win.loadFile(tmp);
  await new Promise(r => setTimeout(r, 700));
  const img = await win.webContents.capturePage();
  const base = path.join(OUT, 'icon-512.png');
  fs.writeFileSync(base, img.toPNG());
  console.log('base', img.getSize().width + 'x' + img.getSize().height);

  const nativeImage = require('electron').nativeImage;
  const entries = [];
  for (const size of [16, 24, 32, 48, 64, 128, 256]) {
    const scaled = nativeImage.createFromBuffer(fs.readFileSync(base)).resize({ width: size, height: size, quality: 'best' });
    const buf = scaled.toPNG();
    fs.writeFileSync(path.join(OUT, 'icon-' + size + '.png'), buf);
    entries.push({ size, buf });
  }
  writeIco(entries, path.join(OUT, 'icon.ico'));
  fs.unlinkSync(tmp);
  console.log('ico written', fs.statSync(path.join(OUT, 'icon.ico')).size, 'bytes');
  app.quit();
});
