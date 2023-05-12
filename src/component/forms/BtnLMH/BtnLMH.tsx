import styles from './styles.module.less';
import { BtnLMHProps } from './types';

const BtnLMH: React.FC<BtnLMHProps> = ({ label, onClick }: BtnLMHProps) => {

  const handlerOnClick = (): void => onClick();

  return (
    <button 
      className={styles.btn}
      onClick={handlerOnClick}
    >
      {label}
    </button>
  );
};

export default BtnLMH;