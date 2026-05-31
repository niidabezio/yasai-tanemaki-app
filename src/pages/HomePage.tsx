import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Region, REGION_LABELS } from '../types';
import { vegetables, getVegetablesByMonth } from '../data/vegetables';
import { VegetableCard } from '../components/VegetableCard';
import { VegetableBanner } from '../components/VegetableBanner';
import { RegionSelector } from '../components/RegionSelector';
import styles from './HomePage.module.css';

interface Props {
  region: Region;
  onRegionChange: (r: Region) => void;
}

type SeasonFilter = 'all' | 'tanemaki';

const MONTH_NAMES_JP = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

const REFERENCE_SITES = [
  { name: 'タキイ種苗 栽培マニュアル', url: 'https://www.takii.co.jp/tsk/manual/' },
  { name: 'タキイ 野菜品種カタログ', url: 'https://www.takii.co.jp/CGI/tsk/shohin/search.cgi' },
  { name: 'サカタのタネ（プロ向け）', url: 'https://www.sakataseed.co.jp/product/professional/vegetable/' },
  { name: 'トキタ種苗 オンラインショップ', url: 'https://tokitaonline.shop-pro.jp/' },
  { name: '家庭de菜園', url: 'https://kateide-saien.com/' },
  { name: '小林種苗 種・苗一覧', url: 'https://www.kobayashi-seed.com/view/page/seed' },
];

export function HomePage({ region, onRegionChange }: Props) {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedMonth, setSelectedMonth] = useState(() => {
    const m = Number(searchParams.get('month'));
    return m >= 1 && m <= 12 ? m : currentMonth;
  });
  const [seasonFilter, setSeasonFilter] = useState<SeasonFilter>(() => {
    const s = searchParams.get('season');
    return s === 'tanemaki' ? 'tanemaki' : 'all';
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    const m = Number(searchParams.get('month'));
    const s = searchParams.get('season');
    if (m >= 1 && m <= 12) setSelectedMonth(m);
    if (s === 'tanemaki') setSeasonFilter('tanemaki');
    if (!s && !m) setSeasonFilter('all');
  }, [searchParams]);

  const handleMonthClick = (m: number) => {
    setSelectedMonth(m);
    setSearchParams({ month: String(m), season: 'tanemaki' });
    setSeasonFilter('tanemaki');
  };

  const handleShowAll = () => {
    setSelectedMonth(currentMonth);
    setSeasonFilter('all');
    setSearch('');
    setSearchParams({});
  };

  const sowingIds  = new Set(getVegetablesByMonth(selectedMonth, region, 'sowing').map(v => v.id));
  const plantingIds = new Set(getVegetablesByMonth(selectedMonth, region, 'planting').map(v => v.id));
  // 種まき・定植の合算（重複除く）
  const tanemakiIds = new Set([...sowingIds, ...plantingIds]);

  const filtered = vegetables
    .filter(v => {
      if (seasonFilter === 'tanemaki' && !tanemakiIds.has(v.id)) return false;
      if (search && !v.name.includes(search) && !v.nameRoma.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });

  function getHighlight(id: string): 'sowing' | 'planting' | undefined {
    if (sowingIds.has(id)) return 'sowing';
    if (plantingIds.has(id)) return 'planting';
    return undefined;
  }

  return (
    <div className={styles.page}>
      <VegetableBanner />

      {/* ヒーロー：月選択 */}
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.heroMonth}>{MONTH_NAMES_JP[selectedMonth - 1]}</div>
          <div className={styles.heroSub}>
            {selectedMonth === currentMonth ? '今月' : ''} · {REGION_LABELS[region].split('（')[0]}
          </div>
        </div>
        <div className={styles.monthTabs}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
            <button
              key={m}
              className={`${styles.monthTab} ${selectedMonth === m ? styles.activeMonth : ''} ${m === currentMonth ? styles.todayMonth : ''}`}
              onClick={() => handleMonthClick(m)}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* サマリーバッジ */}
      <div className={styles.summary}>
        <button className={styles.showAllBtn} onClick={handleShowAll}>
          🌿 全体を表示
        </button>
        <button
          className={`${styles.summaryBadge} ${seasonFilter === 'all' ? styles.activeBadge : ''}`}
          onClick={() => setSeasonFilter('all')}
          style={{ '--badge-color': '#555' } as React.CSSProperties}
        >
          全 {vegetables.length}種
        </button>
        <button
          className={`${styles.summaryBadge} ${seasonFilter === 'tanemaki' ? styles.activeBadge : ''}`}
          onClick={() => setSeasonFilter(seasonFilter === 'tanemaki' ? 'all' : 'tanemaki')}
          style={{ '--badge-color': '#2e7d32' } as React.CSSProperties}
        >
          🌱 種まき・定植 {tanemakiIds.size}
        </button>
      </div>

      {/* 検索・地域フィルター */}
      <div className={styles.filters}>
        <input
          type="search"
          placeholder="野菜名で検索（例：トマト、Cucumber）"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className={styles.search}
        />
        <div className={styles.regionRow}>
          <span className={styles.regionLabel}>地域:</span>
          <RegionSelector region={region} onChange={onRegionChange} />
        </div>
      </div>

      {/* 野菜グリッド */}
      <div className={styles.resultCount}>
        {filtered.length}種類の野菜
        {seasonFilter === 'tanemaki' && ` （🌱 今月の種まき・定植）`}
      </div>
      <div className={styles.grid}>
        {filtered.map(v => (
          <VegetableCard key={v.id} vegetable={v} region={region} highlight={getHighlight(v.id)} />
        ))}
      </div>

      {/* 参考サイト */}
      <section className={styles.refSection}>
        <h2 className={styles.refTitle}>🔗 参考サイト・種の購入</h2>
        <div className={styles.linkGrid}>
          {REFERENCE_SITES.map(site => (
            <a key={site.name} href={site.url} target="_blank" rel="noopener noreferrer" className={styles.linkCard}>
              {site.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
