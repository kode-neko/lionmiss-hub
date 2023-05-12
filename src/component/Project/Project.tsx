import { useTranslation } from 'react-i18next';
import styles from './styles.module.less';
import { ProjectProps } from './types';

const Project: React.FC<ProjectProps> = ({ project: { title, desc, img, demo } }: ProjectProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles.cont}>
      <div className={styles.imgP}>
        <img src={img} />
      </div>
      <div className={styles.desc}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.body}>{desc}</p>
        <div><a className={styles.demo} target='_blank' href={demo} rel="noreferrer">{t('labels.demo')}</a></div>
      </div>
    </div>
  );
};

export default Project;