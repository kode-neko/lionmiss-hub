import React, { Dispatch } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.less';
import { Footer, MainBar } from '../../component';

const Main: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.mainCont}>
      <header className={styles.header}><MainBar webTitle={t('title')} /></header>
      <div className={styles.cont}>
        <main className={styles.main}><Outlet /></main>
      </div>
      <footer className={styles.footer}><Footer /></footer>
    </div>
  );
};

export default Main;