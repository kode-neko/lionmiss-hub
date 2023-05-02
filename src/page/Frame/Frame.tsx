import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import { langs } from '../../config/constants';

const Frame: React.FC = () => {
  const { t, i18n } = useTranslation();

  const handleClickLang = async (lg: string): Promise<void> => {
    await i18n.changeLanguage(lg);
  };

  return (
    <div>
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