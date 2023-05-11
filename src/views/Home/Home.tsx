import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch } from '../../component';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [ sw, setSw ] = useState<boolean>(false);

  return (
    <div>{t('section.main')}<Switch isActive={sw} onClickSw={() => setSw(!sw)} /></div>
  );
};

export default Home;