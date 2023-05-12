/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { MouseEventHandler } from 'react';
import styles from './styles.module.less';
import { BtnLMHProps } from './types';

const BtnLMH: React.FC<BtnLMHProps> = ({ label, onClick, type = 'button' }: BtnLMHProps) => {

  const handlerOnClick = (): void => onClick();

  return (
    <button
      type={type} 
      className={styles.btn}
      onClick={handlerOnClick}
    >
      {label}
    </button>
  );
};

export default BtnLMH;