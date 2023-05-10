import React from 'react';
import { useTranslation } from 'react-i18next';

const Auth: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('section.login')}
    </div>
  );
};

export default Auth;