import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Region } from '../types';
import { vegetables } from '../data/vegetables';
import { vegetableGuides } from '../data/vegetableGuides';
import { cultivationData } from '../data/cultivationData';
import { BeginnerGuideSection } from '../components/BeginnerGuideSection';
import styles from './VegetableDetailPage.module.css';

interface Props {
  region: Region;
}

/** g/m² → kg/10a、L/m² → t/10a に変換（数値は同じ、単位だけ変わる） */
function convertTo10a(text: string): string {
  return text
    .replace(/g\/m²/g, 'kg/10a')
    .replace(/L\/m²/g, 't/10a');
}

const NO_BRAND_SEARCH = new Set([
  'nozawana', 'shiroouri', 'hayatouri', 'udo', 'norabona',
  'satoimo', 'wakegi', 'potato', 'sweet-potato', 'garlic',
  'rakkyo', 'nagaimo', 'jinenjo', 'ginger', 'leaf-ginger',
  'myoga', 'strawberry', 'fuki', 'warabi', 'taranoki',
]);

export function VegetableDetailPage({ region: _region }: Props) {
  const { id } = useParams<{ id: string }>();
  const veg = vegetables.find(v => v.id === id);
  const [unit, setUnit] = useState<'m2' | '10a'>('m2');

  if (!veg) {
    return (
      <div className={styles.notFound}>
        <p>野菜が見つかりませんでした。</p>
        <Link to="/">戻る</Link>
      </div>
    );
  }

  const c = cultivationData[veg.id];
  const fmt = (text: string) => unit === '10a' ? convertTo10a(text) : text;

  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>← 一覧に戻る</Link>

      <div className={styles.header}>
        <h1 className={styles.name}>{veg.name}</h1>
        <a
          href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(veg.name + (NO_BRAND_SEARCH.has(veg.id) ? ' 種' : ' 種 タキイ サカタ トキタ ナント'))}&tag=loadofagricul-22`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.amazonTopBtn}
        >
          🛒 Amazonで{veg.name}の種を探す
        </a>
      </div>

      {veg.image && (
        <section className={styles.section}>
          <img
            src={`/${veg.image}`}
            alt={`${veg.name}の作型図`}
            className={styles.chartImage}
            loading="lazy"
          />
        </section>
      )}

      {c && (
        <section className={styles.section}>
          <div className={styles.cultivationHeader}>
            <h2 className={styles.sectionTitle}>🌿 施肥設計・栽培情報</h2>
            <div className={styles.unitToggle}>
              <button
                className={`${styles.unitBtn} ${unit === 'm2' ? styles.unitActive : ''}`}
                onClick={() => setUnit('m2')}
              >
                1m²
              </button>
              <button
                className={`${styles.unitBtn} ${unit === '10a' ? styles.unitActive : ''}`}
                onClick={() => setUnit('10a')}
              >
                10a
              </button>
            </div>
          </div>
          <div className={styles.cultivationGrid}>
            <div className={styles.cultivationItem}>
              <span className={styles.cultivationLabel}>土壌pH</span>
              <span className={styles.cultivationValue}>{c.ph}</span>
            </div>
            <div className={styles.cultivationItem}>
              <span className={styles.cultivationLabel}>株間</span>
              <span className={styles.cultivationValue}>{c.spacing}</span>
            </div>
            {c.rowSpacing && (
              <div className={styles.cultivationItem}>
                <span className={styles.cultivationLabel}>条間</span>
                <span className={styles.cultivationValue}>{c.rowSpacing}</span>
              </div>
            )}
            <div className={`${styles.cultivationItem} ${styles.cultivationWide}`}>
              <span className={styles.cultivationLabel}>元肥</span>
              <span className={styles.cultivationValue}>{fmt(c.baseFertilizer)}</span>
            </div>
            <div className={`${styles.cultivationItem} ${styles.cultivationWide}`}>
              <span className={styles.cultivationLabel}>追肥</span>
              <span className={styles.cultivationValue}>{fmt(c.topDressing)}</span>
            </div>
          </div>
        </section>
      )}

      {vegetableGuides[veg.id] && (
        <section className={styles.section}>
          <BeginnerGuideSection guide={vegetableGuides[veg.id]} />
        </section>
      )}

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>🛒 種を購入する</h2>
        <div className={styles.buyLinks}>
          <a href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(veg.name + (NO_BRAND_SEARCH.has(veg.id) ? ' 種' : ' 種 タキイ サカタ トキタ ナント'))}&tag=loadofagricul-22`}
            target="_blank" rel="noopener noreferrer" className={`${styles.buyLink} ${styles.amazonLink}`}>
            🛒 Amazonで種を探す
          </a>
          <a href={`https://www.takii.co.jp/CGI/tsk/shohin/search.cgi?keyword=${encodeURIComponent(veg.name)}`}
            target="_blank" rel="noopener noreferrer" className={styles.buyLink}>
            タキイ種苗で検索
          </a>
          <a href="https://www.sakataseed.co.jp/product/professional/vegetable/"
            target="_blank" rel="noopener noreferrer" className={styles.buyLink}>
            サカタのタネ
          </a>
          <a href="https://tokitaonline.shop-pro.jp/"
            target="_blank" rel="noopener noreferrer" className={styles.buyLink}>
            トキタ種苗
          </a>
          <a href="https://www.kobayashi-seed.com/view/page/seed"
            target="_blank" rel="noopener noreferrer" className={styles.buyLink}>
            小林種苗
          </a>
        </div>
      </section>
    </div>
  );
}
