import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../../component';

const ProjectSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Card title={t('projects.title')}>
      <p>{t('projects.desc')}</p>
    </Card>
  );
};

export default ProjectSection;