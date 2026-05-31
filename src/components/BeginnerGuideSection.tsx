import type { VegetableGuide } from '../data/vegetableGuides';
import styles from './BeginnerGuideSection.module.css';

interface Props {
  guide: VegetableGuide;
}

export function BeginnerGuideSection({ guide }: Props) {
  const items = [
    { icon: '🌱', title: '作型・栽培の特徴', text: guide.cropFeature },
    { icon: '🪴', title: '育苗・種まきのコツ', text: guide.seedlingTips },
    { icon: '🌿', title: '施肥のポイント', text: guide.fertilizationTips },
    { icon: '💧', title: '管理のポイント', text: guide.managementTips },
    { icon: '✂️', title: '収穫のコツ', text: guide.harvestTips },
    { icon: '🐛', title: '注意する病害虫', text: guide.pestNotes },
  ].filter((item): item is { icon: string; title: string; text: string } => !!item.text);

  if (items.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>📖 栽培ガイド（初心者向け）</h2>
      <div className={styles.grid}>
        {items.map(item => (
          <div key={item.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.cardTitle}>{item.title}</span>
            </div>
            <p className={styles.cardText}>{item.text}</p>
          </div>
        ))}
      </div>
      <p className={styles.source}>出典：{guide.source}</p>
    </div>
  );
}
