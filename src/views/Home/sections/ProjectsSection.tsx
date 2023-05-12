import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../../component';
import { projectList } from '../../../constants';
import { Project } from '../../../component/Project';
import { ProjectLMH } from '../../../models';
import styles from './styles.module.less';

const ProjectSection: React.FC = () => {
  const { t } = useTranslation();
  const projectTrans: ProjectLMH[] = projectList.map((p: ProjectLMH) => ({ ...p, title: t(p.title), desc: t(p.desc) }));
  return (
    <Card title={t('projects.title')}>
      <div className={styles.contProj}>
        {projectTrans.map((p: ProjectLMH) => <Project key={p.title} project={p} />)}
      </div>
    </Card>
  );
};

export default ProjectSection;