import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceDizzy } from '@fortawesome/free-regular-svg-icons';
import styles from './styles.module.less';

const Error: React.FC = () => {
  const { t } = useTranslation();
  const { VITE_WEB_URL, VITE_BASE_URL } = import.meta.env;
  const mainWebURL: string = `${VITE_WEB_URL as string}${VITE_BASE_URL as string}`;

  return (
    <Card title={t('error.title')}>
      <div className={styles.cont}>
        <div className={styles.left}>
          <FontAwesomeIcon icon={faFaceDizzy} className={styles.face}/>
        </div>
        <div className={styles.rigth}>
          <p>{t('error.content', { page: mainWebURL })}</p>
        </div>
      </div>
    </Card>
  );
};

export default Error;