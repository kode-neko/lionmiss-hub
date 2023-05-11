import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../component';
import { ProjectSection } from './sections';
import WelcometSection from './sections/WelcomeSection';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [ sw, setSw ] = useState<boolean>(false);

  return (
    <div>
      <WelcometSection />
      <ProjectSection />
    </div>
  );
};

export default Home;