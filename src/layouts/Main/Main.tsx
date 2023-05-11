import React, { Dispatch } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.less';
import { Footer, MainBar } from '../../component';
import { socialList } from '../../config/constants';
import { SocialCont } from '../../component/SocialCont';

const Main: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className={styles.mainCont}>
      <header className={styles.header}><MainBar webTitle={t('title')} />
      </header>
      <div className={styles.cont}>
        <main className={styles.main}><Outlet /></main>
      </div>
      <div className={styles.social}><SocialCont list={socialList} /></div>
      <footer className={styles.footer}><Footer /></footer>
    </div>
  );
};

export default Main;