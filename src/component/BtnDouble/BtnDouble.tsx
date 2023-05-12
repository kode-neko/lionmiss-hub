import styles from './styles.module.less';
import { BtnDoubleProps } from './types';
import classnames from 'classnames';

const BtnDouble: React.FC<BtnDoubleProps> = ({ selLeft, left, right, onClick }: BtnDoubleProps) => {
  return (
    <div className={styles.cont} onClick={onClick}>
      <div className={classnames([ styles.left, selLeft ? styles.sel : styles.noSel ])}>{left}</div>
      <div className={classnames([ styles.right, !selLeft ? styles.sel : styles.noSel ])}>{right}</div>
    </div>
  );
};

export default BtnDouble;