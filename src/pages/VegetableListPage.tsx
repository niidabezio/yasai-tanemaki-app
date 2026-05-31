import { useState } from 'react';
import { Region, VegetableCategory, CATEGORY_LABELS } from '../types';
import { vegetables } from '../data/vegetables';
import { VegetableCard } from '../components/VegetableCard';
import styles from './VegetableListPage.module.css';

interface Props {
  region: Region;
}

export function VegetableListPage({ region }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<VegetableCategory | 'all'>('all');
  const [search, setSearch] = useState('');

  const filtered = vegetables.filter(v => {
    const matchCategory = selectedCategory === 'all' || v.category === selectedCategory;
    const matchSearch = v.name.includes(search) || v.nameRoma.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>🥦 野菜図鑑</h1>

      <input
        type="search"
        placeholder="野菜名で検索（例：トマト、Cucumber）"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className={styles.search}
      />

      <div className={styles.categoryTabs}>
        <button
          className={`${styles.catTab} ${selectedCategory === 'all' ? styles.active : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          すべて ({vegetables.length})
        </button>
        {CATEGORY_LABELS.map(cat => {
          const count = vegetables.filter(v => v.category === cat).length;
          return (
            <button
              key={cat}
              className={`${styles.catTab} ${selectedCategory === cat ? styles.active : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      <div className={styles.resultCount}>{filtered.length}種類の野菜</div>

      <div className={styles.grid}>
        {filtered.map(v => (
          <VegetableCard key={v.id} vegetable={v} region={region} />
        ))}
      </div>
    </div>
  );
}
