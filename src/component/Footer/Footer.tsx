import { useTranslation } from 'react-i18next';
import styles from './styles.module.less';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.cont}>{t('credits')}</div>
  );
};

export default Footer;