import React, { Dispatch } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import { langs, themes } from '../../config/constants';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store';
import { AnyAction } from 'redux';

const Frame: React.FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const handleClickTheme = (theme: string): void => {
    dispatch(userActions.changeTheme(theme));
  };
  const handleClickLang = async (lg: string): Promise<void> => {
    await i18n.changeLanguage(lg);
  };

  return (
    <div>
      <ul>
        {themes.map((th: string) => <li key={th} onClick={(): void => handleClickTheme(th)}>{th}</li>)}
      </ul>
      <ul>
        {langs.map((lg: string) => <li key={lg} onClick={(): Promise<void> => handleClickLang(lg)}>{lg}</li>)}
      </ul>
      <ul>
        <li><Link to="/">{t('section.main')}</Link></li>
        <li><Link to="/contact">{t('section.contact')}</Link></li>
      </ul>
      <div><Outlet /></div>
    </div>
  );
};

export default Frame;