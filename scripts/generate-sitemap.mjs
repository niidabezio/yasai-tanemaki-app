/**
 * sitemap.xml 自動生成スクリプト
 * 使い方: node scripts/generate-sitemap.mjs
 * ビルド時に自動実行: npm run build
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ★ 独自ドメインを取得したらここを変更
const SITE_URL = process.env.SITE_URL || 'https://tanemaki-calendar.com';

const vegetableIds = [
  'tomato', 'eggplant', 'cucumber', 'pepper', 'shishito', 'chili',
  'pumpkin', 'watermelon', 'melon', 'okra', 'zucchini', 'bittermelon',
  'shiroouri', 'togan', 'hayatouri', 'tsurumurasaki', 'morohiya',
  'hakusai', 'cabbage', 'lettuce', 'green-lettuce', 'saladana',
  'spinach', 'komatsuna', 'mizuna', 'chingensai', 'broccoli',
  'cauliflower', 'shungiku', 'nozawana', 'celery', 'parsley',
  'asparagus-green', 'white-asparagus', 'udo', 'eisai', 'kale',
  'takana', 'coriander', 'leaf-shiso', 'norabona', 'nabana',
  'daikon', 'carrot', 'turnip', 'gobou', 'lotus-root', 'satoimo',
  'wakegi', 'nagaimo', 'jinenjo', 'edamame', 'green-beans',
  'snap-pea', 'sayaendou', 'minori-endou', 'broad-bean', 'sweet-corn',
  'potato', 'sweet-potato', 'onion', 'garlic', 'rakkyo', 'negi',
  'nira', 'ginger', 'leaf-ginger', 'myoga', 'mitsuba', 'strawberry',
  'fuki', 'chicory', 'warabi', 'taranoki',
];

const today = new Date().toISOString().split('T')[0];

const urls = [
  // トップページ（最優先）
  { loc: `${SITE_URL}/`, priority: '1.0', changefreq: 'weekly' },
  // カレンダーページ
  { loc: `${SITE_URL}/calendar`, priority: '0.8', changefreq: 'weekly' },
  // 野菜個別ページ（74種）
  ...vegetableIds.map(id => ({
    loc: `${SITE_URL}/vegetable/${id}`,
    priority: '0.7',
    changefreq: 'monthly',
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

const outPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');
console.log(`✅ sitemap.xml 生成完了: ${urls.length}件のURL`);
console.log(`   出力先: ${outPath}`);
