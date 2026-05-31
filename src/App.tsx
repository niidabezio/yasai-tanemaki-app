import { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Region } from './types';
import { RegionSelector } from './components/RegionSelector';
import { CalendarPage } from './pages/CalendarPage';
import { HomePage } from './pages/HomePage';
import { VegetableDetailPage } from './pages/VegetableDetailPage';
import styles from './App.module.css';

function getInitialRegion(): Region {
  return (localStorage.getItem('region') as Region) ?? 'middle';
}

function AppContent() {
  const [region, setRegion] = useState<Region>(getInitialRegion());

  function handleRegionChange(r: Region) {
    setRegion(r);
    localStorage.setItem('region', r);
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <NavLink to="/" className={styles.logoLink}>
              🌱 野菜 種まきカレンダー
            </NavLink>
          </div>
          <div className={styles.regionWrap}>
            <span className={styles.regionLabel}>地域:</span>
            <RegionSelector region={region} onChange={handleRegionChange} />
          </div>
        </div>
      </header>

<main className={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage region={region} />} />
          <Route path="/calendar" element={<CalendarPage region={region} />} />
          <Route path="/vegetable/:id" element={<VegetableDetailPage region={region} />} />
        </Routes>
      </main>

      <footer className={styles.footer}>
        <p>タキイ種苗・サカタのタネ・家庭de菜園などを参考に作成</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
