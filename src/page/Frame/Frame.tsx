import React from 'react';
import { useTranslation } from 'react-i18next';
import { Main } from '../Main';

const Frame: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div>{ t('title') }</div>
      <div><Main /></div>
    </div>
  );
};

export default Frame;