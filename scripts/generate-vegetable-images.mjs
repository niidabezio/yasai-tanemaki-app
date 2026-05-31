/**
 * Gemini API (Imagen 3) で野菜アイコン画像を一括生成するスクリプト
 *
 * 使い方:
 *   1. .env に GEMINI_API_KEY=your_key を設定
 *   2. node scripts/generate-vegetable-images.mjs
 *
 * 生成先: public/vegetables/<id>.png
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// .env 読み込み
const envPath = path.join(ROOT, '.env');
if (fs.existsSync(envPath)) {
  fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const [k, ...v] = line.split('=');
    if (k && v.length) process.env[k.trim()] = v.join('=').trim();
  });
}

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY || API_KEY.includes('ここに')) {
  console.error('❌ .env に GEMINI_API_KEY を設定してください');
  process.exit(1);
}

const OUT_DIR = path.join(ROOT, 'public', 'vegetables');
fs.mkdirSync(OUT_DIR, { recursive: true });

// 野菜リスト（id: 日本語名）
const VEGETABLES = [
  ['tomato',          'トマト'],
  ['eggplant',        'ナス'],
  ['cucumber',        'キュウリ'],
  ['pepper',          'ピーマン'],
  ['shishito',        'シシトウ'],
  ['chili',           '唐辛子'],
  ['pumpkin',         'カボチャ'],
  ['watermelon',      'スイカ'],
  ['melon',           'メロン'],
  ['okra',            'オクラ'],
  ['zucchini',        'ズッキーニ'],
  ['bittermelon',     'ゴーヤ'],
  ['shiroouri',       'シロウリ'],
  ['togan',           'トウガン'],
  ['hayatouri',       'ハヤトウリ'],
  ['tsurumurasaki',   'ツルムラサキ'],
  ['morohiya',        'モロヘイヤ'],
  ['strawberry',      'イチゴ'],
  ['hakusai',         '白菜'],
  ['cabbage',         'キャベツ'],
  ['lettuce',         'レタス'],
  ['green-lettuce',   'グリーンレタス'],
  ['saladana',        'サラダ菜'],
  ['spinach',         'ホウレンソウ'],
  ['komatsuna',       '小松菜'],
  ['mizuna',          '水菜'],
  ['chingensai',      'チンゲンサイ'],
  ['broccoli',        'ブロッコリー'],
  ['cauliflower',     'カリフラワー'],
  ['shungiku',        '春菊'],
  ['nozawana',        '野沢菜'],
  ['celery',          'セロリ'],
  ['parsley',         'パセリ'],
  ['asparagus-green', 'アスパラガス'],
  ['white-asparagus', 'ホワイトアスパラガス'],
  ['udo',             'ウド'],
  ['eisai',           'エンサイ'],
  ['kale',            'ケール'],
  ['takana',          '高菜'],
  ['coriander',       'コリアンダー'],
  ['leaf-shiso',      '大葉'],
  ['norabona',        'ノラボナ'],
  ['nabana',          '菜の花'],
  ['fuki',            'フキ'],
  ['chicory',         'チコリ'],
  ['warabi',          'ワラビ'],
  ['taranoki',        'タラの芽'],
  ['daikon',          '大根'],
  ['carrot',          'ニンジン'],
  ['turnip',          'カブ'],
  ['gobou',           'ゴボウ'],
  ['lotus-root',      'レンコン'],
  ['satoimo',         '里芋'],
  ['wakegi',          '分葱'],
  ['nagaimo',         '長芋'],
  ['jinenjo',         '自然薯'],
  ['edamame',         '枝豆'],
  ['green-beans',     'インゲン'],
  ['snap-pea',        'スナップエンドウ'],
  ['sayaendou',       'サヤエンドウ'],
  ['minori-endou',    '実エンドウ'],
  ['broad-bean',      'ソラマメ'],
  ['sweet-corn',      'トウモロコシ'],
  ['potato',          'じゃがいも'],
  ['sweet-potato',    'サツマイモ'],
  ['onion',           'タマネギ'],
  ['garlic',          'ニンニク'],
  ['rakkyo',          'ラッキョウ'],
  ['negi',            'ネギ'],
  ['nira',            'ニラ'],
  ['ginger',          'ショウガ'],
  ['leaf-ginger',     '葉ショウガ'],
  ['myoga',           'ミョウガ'],
  ['mitsuba',         'ミツバ'],
];

const STYLE = 'flat illustration, simple clean vegetable icon, white background, soft pastel colors, cute Japanese style, no text, square format';

async function generateImage(japaneseName) {
  const prompt = `${japaneseName}の野菜イラスト。${STYLE}`;

  const body = JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ['IMAGE'] },
  });

  return new Promise((resolve, reject) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview-image-generation:generateContent?key=${API_KEY}`;
    const req = https.request(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.error) return reject(new Error(json.error.message));
          const parts = json.candidates?.[0]?.content?.parts ?? [];
          const imgPart = parts.find(p => p.inlineData?.mimeType?.startsWith('image/'));
          if (!imgPart) return reject(new Error('画像データなし: ' + data.slice(0, 200)));
          resolve(imgPart.inlineData.data); // base64
        } catch (e) {
          reject(new Error('Parse error: ' + data.slice(0, 200)));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  console.log(`🌱 野菜画像を生成します（${VEGETABLES.length}種）\n`);

  let ok = 0, skip = 0, err = 0;

  for (const [id, name] of VEGETABLES) {
    const outPath = path.join(OUT_DIR, `${id}.png`);

    if (fs.existsSync(outPath)) {
      console.log(`⏭  ${name} (スキップ・既存)`);
      skip++;
      continue;
    }

    process.stdout.write(`🎨 ${name} を生成中... `);
    try {
      const b64 = await generateImage(name);
      fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
      console.log('✅');
      ok++;
    } catch (e) {
      console.log(`❌ エラー: ${e.message}`);
      err++;
    }

    // レート制限対策：1秒待つ
    await sleep(1000);
  }

  console.log(`\n完了: ✅${ok}枚生成 / ⏭${skip}枚スキップ / ❌${err}枚失敗`);
  console.log(`📁 保存先: public/vegetables/`);
}

main().catch(console.error);
