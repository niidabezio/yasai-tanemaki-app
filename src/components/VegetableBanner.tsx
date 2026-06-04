import styles from './VegetableBanner.module.css';

export function VegetableBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.titleArea}>
        <h1 className={styles.title}>野菜の種まきカレンダー<span className={styles.tagline}>いつからでも始めれる野菜作り　by 農業物語</span></h1>
        <p className={styles.subtitle}>野菜を育て食べて　健康的で楽しい野菜ライフを！</p>
      </div>
    </div>
  );
}
