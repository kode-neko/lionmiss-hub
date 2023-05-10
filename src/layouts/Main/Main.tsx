import React, { Dispatch } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store';
import { AnyAction } from 'redux';
import styled from 'styled-components';
import styles from './styles.module.less';
import { Footer, MainBar } from '../../component';

const ContMenu = styled.div`
  background-color:
  box-sizing: border-box;
  display: flex;

`;

const Main: React.FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const handleClickTheme = (theme: string): void => {
    dispatch(userActions.changeTheme(theme));
  };
  const handleClickLang = async (lg: string): Promise<void> => {
    dispatch(userActions.changeLanguage(lg));
    await i18n.changeLanguage(lg);
  };
  
  return (
    <div className={styles.mainCont}>
      <header className={styles.header}><MainBar webTitle={t('title')} /></header>
      <div className={styles.main}>
        <main className={styles.cont}><Outlet /></main>
      </div>
      <footer className={styles.footer}><Footer /></footer>
    </div>
  );

  /*
  return (
    <div style={{display: 'grid', }}>
      <br/>
      <ul>
        {themes.map((th: string) => <li key={th} onClick={(): void => handleClickTheme(th)}>{th}</li>)}
      </ul>
      <br/>
      <ul>
        {langs.map((lg: string) => <li key={lg} onClick={(): Promise<void> => handleClickLang(lg)}>{lg}</li>)}
      </ul>
      <br/>
      <ul>
        <li><Link to="/">{t('section.main')}</Link></li>
        <li><Link to="/contact">{t('section.contact')}</Link></li>
      </ul>
      <br/>
      <div><Outlet /></div>
    </div>
  );
  */
};

export default Main;