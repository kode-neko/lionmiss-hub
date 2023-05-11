import { useTranslation } from 'react-i18next';
import styles from './styles.module.less';

const Card: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.cont}>
      <h2 className={styles.title}>Aute excepteur</h2>
      <div className={styles.body}>
        Incididunt fugiat dolor magna sunt sunt proident consectetur. Ullamco culpa ad consectetur officia consequat deserunt fugiat voluptate sint do reprehenderit ex id do. Magna mollit labore consectetur cupidatat. Quis dolore fugiat est duis proident cillum fugiat. Nulla sit labore ea veniam commodo deserunt irure laborum. Qui et cupidatat nostrud culpa occaecat occaecat ullamco velit est tempor magna mollit magna.
      </div>
    </div>
  );
};

export default Card;