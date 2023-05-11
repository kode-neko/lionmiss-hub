import styles from './styles.module.less';
import { SwitchProps } from './types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Switch: React.FC<SwitchProps> = ({ icon, isActive, onClickSw }: SwitchProps) => {
  return (
    <div className={styles.cont}>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
      <div className={styles.sw} onClick={onClickSw}>
        <div className={classnames([ styles.btn, isActive ? styles.left : null ])} />
        <div className={styles.back} />
      </div>
    </div>
  );
};

export default Switch;