export type Region = 'warm' | 'middle' | 'cold';

export type VegetableClassification = '指定野菜' | '特定野菜' | 'その他';

export interface MonthRange {
  start: number;
  end: number;
}

export interface RegionSchedule {
  sowing?: MonthRange[];
  planting?: MonthRange[];
  harvest?: MonthRange[];
}

export interface Vegetable {
  id: string;
  name: string;
  nameRoma: string;
  category: VegetableCategory;
  classification: VegetableClassification;
  schedule: {
    warm: RegionSchedule;
    middle: RegionSchedule;
    cold: RegionSchedule;
  };
  image?: string;
  illustration?: string;
  difficulty: 1 | 2 | 3;
  daysToHarvest?: string;
  notes?: string;
}

export type VegetableCategory =
  | '果菜'
  | '葉菜'
  | '葉茎菜'
  | '根菜'
  | '豆類'
  | '球根・イモ類'
  | '香辛野菜'
  | 'その他';

export const REGION_LABELS: Record<Region, string> = {
  warm: '暖地（九州・四国）',
  middle: '中間地（関東・東海）',
  cold: '冷涼地（東北・北海道）',
};

export const CATEGORY_LABELS: VegetableCategory[] = [
  '果菜',
  '葉菜',
  '葉茎菜',
  '根菜',
  '豆類',
  '球根・イモ類',
  '香辛野菜',
  'その他',
];

export const MONTH_NAMES = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
