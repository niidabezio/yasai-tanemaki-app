import { Link } from 'react-router-dom';
import { Vegetable, Region, MONTH_NAMES } from '../types';
import { VegetableAvatar } from './VegetableAvatar';
import styles from './VegetableCard.module.css';

interface Props {
  vegetable: Vegetable;
  region: Region;
  highlight?: 'sowing' | 'planting' | 'harvest';
}

// 大手種苗会社が扱わないため会社名なしで検索する野菜
const NO_BRAND_SEARCH = new Set([
  'nozawana', 'shiroouri', 'hayatouri', 'udo', 'norabona',
  'satoimo', 'wakegi', 'potato', 'sweet-potato', 'garlic',
  'rakkyo', 'nagaimo', 'jinenjo', 'ginger', 'leaf-ginger',
  'myoga', 'strawberry', 'fuki', 'warabi', 'taranoki',
]);

export function VegetableCard({ vegetable, region, highlight }: Props) {
  const schedule = vegetable.schedule[region];
  const sowingRanges = schedule.sowing ?? schedule.planting ?? [];
  const monthLabels = sowingRanges.map(r => {
    if (r.start === r.end) return `${r.start}月`;
    if (r.start === 1 && r.end === 12) return '通年';
    return `${r.start}〜${r.end}月`;
  });

  const HIGHLIGHT_BG: Record<string, string> = {
    sowing: '#e8f5e9',
    planting: '#fff8e1',
    harvest: '#fce4ec',
  };
  return (
    <Link
      to={`/vegetable/${vegetable.id}`}
      className={styles.card}
      style={highlight ? { background: HIGHLIGHT_BG[highlight] } : undefined}
    >
      <div className={styles.illustrationWrap}>
        {vegetable.illustration ? (
          <img
            src={`/${vegetable.illustration}`}
            alt={`${vegetable.name}のイラスト`}
            className={styles.illustrationImg}
            loading="lazy"
          />
        ) : (
          <div className={styles.avatarWrap}>
            <VegetableAvatar vegetableId={vegetable.id} size={90} />
          </div>
        )}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.name}>{vegetable.name}</div>
        {monthLabels.length > 0 && (
          <div className={styles.months}>
            {highlight === 'harvest' ? '収穫: ' : '種まき: '}
            {highlight === 'harvest'
              ? (schedule.harvest ?? []).map(r => `${r.start}〜${r.end}月`).join(', ')
              : monthLabels.join(', ')}
          </div>
        )}
        <a
          href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(vegetable.name + (NO_BRAND_SEARCH.has(vegetable.id) ? ' 種' : ' 種 タキイ サカタ トキタ ナント'))}&tag=loadofagricul-22`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.amazonBtn}
          onClick={e => e.stopPropagation()}
        >
          🛒 Amazonで種を探す
        </a>
      </div>
    </Link>
  );
}

export function MonthBadge({ month }: { month: number }) {
  return <span className={styles.badge}>{MONTH_NAMES[month - 1]}</span>;
}
