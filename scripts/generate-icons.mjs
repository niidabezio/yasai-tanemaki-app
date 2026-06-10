/**
 * PWAアイコン生成スクリプト（sharp使用）
 * SVG → PNG変換して public/icons/ に出力
 */
import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = resolve(__dirname, '../public/icons');
mkdirSync(iconsDir, { recursive: true });

function makeSvg(size) {
  const r = Math.round(size * 0.2);
  const fontSize = Math.round(size * 0.52);
  const emojiY = Math.round(size * 0.70);
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <rect width="${size}" height="${size}" rx="${r}" ry="${r}" fill="#1b5e20"/>
  <text x="${size/2}" y="${emojiY}"
    font-size="${fontSize}"
    text-anchor="middle"
    dominant-baseline="middle"
    font-family="serif">🌱</text>
</svg>`);
}

for (const size of [192, 512]) {
  await sharp(makeSvg(size))
    .png()
    .toFile(resolve(iconsDir, `icon-${size}.png`));
  console.log(`✅ icon-${size}.png 生成完了`);
}

console.log('🎉 PWAアイコン生成完了');
