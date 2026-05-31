import { vegetables } from '../data/vegetables';
import styles from './VegetableBanner.module.css';

export function VegetableBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.titleArea}>
        <h1 className={styles.title}>野菜の種まきカレンダー</h1>
        <p className={styles.subtitle}>{vegetables.length}種類の野菜を育てよう</p>
      </div>
    </div>
  );
}
