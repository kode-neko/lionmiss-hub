import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../component';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [ sw, setSw ] = useState<boolean>(false);

  return (
    <div><Card /><Card /><Card /></div>
  );
};

export default Home;