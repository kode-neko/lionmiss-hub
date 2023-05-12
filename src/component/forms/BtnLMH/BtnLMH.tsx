/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import classNames from 'classnames';
import styles from './styles.module.less';
import { BtnLMHProps } from './types';

const BtnLMH: React.FC<BtnLMHProps> = ({ label, disabled, onClick = (): void => {}, type = 'button' }: BtnLMHProps) => {

  const handlerOnClick = (): void => onClick();

  return (
    <button
      type={type}
      disabled={disabled} 
      className={classNames([ styles.btn ])}
      onClick={handlerOnClick}
    >
      {label}
    </button>
  );
};

export default BtnLMH;