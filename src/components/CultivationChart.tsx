import type { Vegetable } from '../types';
import styles from './CultivationChart.module.css';

interface Props {
  vegetable: Vegetable;
  currentMonth?: number;
}

type Region = 'warm' | 'middle' | 'cold';
type MonthRange = { start: number; end: number };

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ROWS: { region: Region; label: string }[] = [
  { region: 'cold',   label: '冷涼地' },
  { region: 'middle', label: '中間地' },
  { region: 'warm',   label: '暖地' },
];

function inRange(month: number, ranges: MonthRange[] | undefined): boolean {
  if (!ranges?.length) return false;
  return ranges.some(r =>
    r.start <= r.end
      ? month >= r.start && month <= r.end
      : month >= r.start || month <= r.end
  );
}

function isStart(month: number, ranges: MonthRange[] | undefined): boolean {
  return !!ranges?.some(r => r.start === month);
}

function isEnd(month: number, ranges: MonthRange[] | undefined): boolean {
  return !!ranges?.some(r => r.end === month);
}

function inConnectGap(
  month: number,
  sowing: MonthRange[] | undefined,
  planting: MonthRange[] | undefined,
): boolean {
  if (!sowing?.length || !planting?.length) return false;
  const sowEnd = Math.max(...sowing.map(r => r.end));
  const pltStart = Math.min(...planting.map(r => r.start));
  return pltStart > sowEnd + 1 && month > sowEnd && month < pltStart;
}

export function CultivationChart({ vegetable, currentMonth }: Props) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.regionHead}>地域</th>
            {MONTHS.map(m => (
              <th
                key={m}
                className={`${styles.monthHead}${m === currentMonth ? ` ${styles.currentMonthHead}` : ''}`}
              >
                {m}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map(row => {
            const sch = vegetable.schedule[row.region];
            return (
              <tr key={row.region}>
                <td className={styles.regionCell}>{row.label}</td>
                {MONTHS.map(month => {
                  const sowing   = inRange(month, sch.sowing);
                  const harvest  = inRange(month, sch.harvest);
                  const gap      = inConnectGap(month, sch.sowing, sch.planting);
                  const sowStart = isStart(month, sch.sowing);
                  const pltStart = isStart(month, sch.planting);
                  const hvStart  = isStart(month, sch.harvest);
                  const hvEnd    = isEnd(month, sch.harvest);
                  const isCurrent = month === currentMonth;

                  const harvestClass = [
                    styles.harvestBar,
                    hvStart ? styles.hvStart : '',
                    hvEnd   ? styles.hvEnd   : '',
                  ].filter(Boolean).join(' ');

                  return (
                    <td
                      key={month}
                      className={`${styles.cell}${isCurrent ? ` ${styles.currentCell}` : ''}`}
                    >
                      {harvest && <div className={harvestClass} />}
                      {(sowing || gap) && !harvest && <div className={styles.line} />}
                      {sowStart && !harvest && <span className={styles.sowDot}>●</span>}
                      {pltStart && !harvest && <span className={styles.pltDot}>▼</span>}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className={styles.legend}>
        <span><span className={styles.legSow}>●</span> 播種</span>
        <span><span className={styles.legPlt}>▼</span> 定植</span>
        <span><span className={styles.legHv} /> 収穫</span>
      </div>
    </div>
  );
}
