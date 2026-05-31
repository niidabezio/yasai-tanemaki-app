import { MonthRange } from '../types';
import styles from './SowingCalendarBar.module.css';

interface Props {
  label: string;
  ranges: MonthRange[];
  color: string;
}

export function SowingCalendarBar({ label, ranges, color }: Props) {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  function isActive(month: number): boolean {
    return ranges.some(r => {
      if (r.start <= r.end) return month >= r.start && month <= r.end;
      return month >= r.start || month <= r.end;
    });
  }

  return (
    <div className={styles.row}>
      <div className={styles.label}>{label}</div>
      <div className={styles.grid}>
        {months.map(m => (
          <div
            key={m}
            className={`${styles.cell} ${isActive(m) ? styles.active : ''}`}
            style={isActive(m) ? { background: color } : undefined}
            title={`${m}月`}
          />
        ))}
      </div>
    </div>
  );
}

export function CalendarHeader() {
  const months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
  return (
    <div className={styles.row}>
      <div className={styles.label} />
      <div className={styles.grid}>
        {months.map(m => (
          <div key={m} className={styles.monthLabel}>{m}</div>
        ))}
      </div>
    </div>
  );
}
