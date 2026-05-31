import { Region, REGION_LABELS } from '../types';
import styles from './RegionSelector.module.css';

interface Props {
  region: Region;
  onChange: (r: Region) => void;
}

export function RegionSelector({ region, onChange }: Props) {
  return (
    <div className={styles.wrapper}>
      {(Object.keys(REGION_LABELS) as Region[]).map(r => (
        <button
          key={r}
          className={`${styles.btn} ${region === r ? styles.active : ''}`}
          onClick={() => onChange(r)}
        >
          {REGION_LABELS[r].split('（')[0]}
        </button>
      ))}
    </div>
  );
}
