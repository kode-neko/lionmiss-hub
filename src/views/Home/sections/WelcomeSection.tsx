import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../../component';

const WelcometSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card title={t('welcome.title')}>
      <p>{t('welcome.desc')}</p>
    </Card>
  );
};

export default WelcometSection;