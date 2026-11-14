// 用 Electron 把 SVG 光栅化成多尺寸，再打包成标准 Windows .ico（BMP/DIB 条目，非 PNG-in-ICO）
// 注意：Chromium 加载 PNG 压缩的 ico 条目会直接崩溃，所以这里手动写 BITMAPINFOHEADER。
const { app, BrowserWindow, nativeImage } = require('electron');
const path = require('path');
const fs = require('fs');

const ROOT = path.join(__dirname, '..');
const SVG = path.join(ROOT, 'build', 'icon.svg');
const OUT = path.join(ROOT, 'build');

function dibFromBitmap(bgra, size) {
  const header = Buffer.alloc(40);
  header.writeUInt32LE(40, 0);
  header.writeInt32LE(size, 4);
  header.writeInt32LE(size * 2, 8);   // XOR + AND 两段
  header.writeUInt16LE(1, 12);
  header.writeUInt16LE(32, 14);
  header.writeUInt32LE(0, 16);        // BI_RGB
  header.writeUInt32LE(size * size * 4, 20);

  // toBitmap 返回 BGRA、行序自上而下；DIB 要求自下而上
  const px = Buffer.alloc(size * size * 4);
  const rowBytes = size * 4;
  for (let y = 0; y < size; y++) {
    bgra.copy(px, y * rowBytes, (size - 1 - y) * rowBytes, (size - y) * rowBytes);
  }

  const maskRow = Math.ceil(size / 32) * 4;      // 1bpp，按 4 字节对齐
  const mask = Buffer.alloc(maskRow * size, 0);  // 全 0 = 全部不透明

  return Buffer.concat([header, px, mask]);
}

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
    const dim = e.size >= 256 ? 0 : e.size;
    dir.writeUInt8(dim, b);
    dir.writeUInt8(dim, b + 1);
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
    resizable: false, skipTaskbar: true, hasShadow: false
  });
  await win.loadFile(tmp);
  await new Promise(r => setTimeout(r, 800));
  const shot = path.join(OUT, 'icon-512.png');
  fs.writeFileSync(shot, (await win.webContents.capturePage()).toPNG());
  win.destroy();

  const base = nativeImage.createFromBuffer(fs.readFileSync(shot));
  const entries = [];
  for (const size of [16, 24, 32, 48, 64, 128, 256]) {
    const scaled = base.resize({ width: size, height: size, quality: 'best' });
    const bmp = scaled.toBitmap();          // BGRA
    if (bmp.length !== size * size * 4) {
      console.log('skip', size, 'unexpected bitmap length', bmp.length);
      continue;
    }
    fs.writeFileSync(path.join(OUT, 'icon-' + size + '.png'), scaled.toPNG());
    entries.push({ size, buf: dibFromBitmap(bmp, size) });
  }
  writeIco(entries, path.join(OUT, 'icon.ico'));
  fs.unlinkSync(tmp);
  console.log('ico ok:', entries.map(e => e.size).join(','), fs.statSync(path.join(OUT, 'icon.ico')).size, 'bytes');
  app.quit();
});
