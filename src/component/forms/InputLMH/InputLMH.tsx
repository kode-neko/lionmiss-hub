import styles from './styles.module.less';
import { InputLMHProps } from './types';

const InputLMH: React.FC<InputLMHProps> = ({ id, label, placeholder='', value, hint, error, onChange, onBlur }: InputLMHProps) => {

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
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className={hint ? styles.hint : styles.wrong}>{hint ?? error}</div>
    </div>
  );
};

export default InputLMH;