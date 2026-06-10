import { useState } from 'react';
import { Region } from '../types';
import { getVegetablesByMonth } from '../data/vegetables';
import { VegetableCard } from '../components/VegetableCard';
import { useSeo } from '../hooks/useSeo';
import styles from './CalendarPage.module.css';

interface Props {
  region: Region;
}

const MONTH_NAMES_JP = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];

export function CalendarPage({ region }: Props) {
  const currentMonth = new Date().getMonth() + 1;
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  useSeo({
    title: `${MONTH_NAMES_JP[selectedMonth - 1]}に種まきできる野菜一覧｜野菜 種まきカレンダー`,
    description: `${MONTH_NAMES_JP[selectedMonth - 1]}に種まき・定植できる野菜を地域別（暖地・中間地・冷涼地）で一覧表示。収穫時期も確認できます。`,
  });

  const sowingVegs = getVegetablesByMonth(selectedMonth, region, 'sowing');
  const plantingVegs = getVegetablesByMonth(selectedMonth, region, 'planting');
  const harvestVegs = getVegetablesByMonth(selectedMonth, region, 'harvest');

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>🗓 月別カレンダー</h1>

      <div className={styles.monthTabs}>
        {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
          <button
            key={m}
            className={`${styles.monthTab} ${selectedMonth === m ? styles.active : ''} ${m === currentMonth ? styles.today : ''}`}
            onClick={() => setSelectedMonth(m)}
          >
            {m}月
          </button>
        ))}
      </div>

      <div className={styles.columns}>
        <div className={styles.column}>
          <h2 className={styles.colTitle} style={{ borderColor: '#4caf50', color: '#2e7d32' }}>
            🌱 種まき ({sowingVegs.length})
          </h2>
          <div className={styles.cardList}>
            {sowingVegs.length === 0
              ? <p className={styles.empty}>この月は種まきはありません</p>
              : sowingVegs.map(v => <VegetableCard key={v.id} vegetable={v} region={region} highlight="sowing" />)
            }
          </div>
        </div>

        <div className={styles.column}>
          <h2 className={styles.colTitle} style={{ borderColor: '#ff9800', color: '#e65100' }}>
            🪴 植え付け ({plantingVegs.length})
          </h2>
          <div className={styles.cardList}>
            {plantingVegs.length === 0
              ? <p className={styles.empty}>この月は植え付けはありません</p>
              : plantingVegs.map(v => <VegetableCard key={v.id} vegetable={v} region={region} highlight="planting" />)
            }
          </div>
        </div>

        <div className={styles.column}>
          <h2 className={styles.colTitle} style={{ borderColor: '#e91e63', color: '#880e4f' }}>
            🥦 収穫 ({harvestVegs.length})
          </h2>
          <div className={styles.cardList}>
            {harvestVegs.length === 0
              ? <p className={styles.empty}>この月は収穫はありません</p>
              : harvestVegs.map(v => <VegetableCard key={v.id} vegetable={v} region={region} highlight="harvest" />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}
