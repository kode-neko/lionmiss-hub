import { ChangeEvent, FocusEvent } from 'react';
import styles from './styles.module.less';
import { InputLMHProps } from './types';

const InputLMH: React.FC<InputLMHProps> = ({ id, label, placeholder='', value, hint='', error='', onChange, onBlur }: InputLMHProps) => {

  const handlerOnChange = (e: ChangeEvent<HTMLInputElement>): void => onChange(e.target.value);
  const handlerOnBlur = (e: FocusEvent<HTMLInputElement, Element>): void => onBlur(e.target.value);

  return (
    <div className={styles.cont}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        placeholder={placeholder} 
        id={id}
        name={id} 
        type="text" 
        value={value} 
        onChange={handlerOnChange}
        onBlur={handlerOnBlur}
      />
      <div className={hint ? styles.hint : styles.wrong}>{hint ?? error}</div>
    </div>
  );
};

export default InputLMH;