import styles from './styles.module.less';
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({ title, children }: CardProps) => {
  return (
    <div className={styles.cont}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Card;