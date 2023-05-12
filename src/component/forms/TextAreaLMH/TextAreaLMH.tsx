import styles from './styles.module.less';
import { TextAreaLMHProps } from './types';

const TextAreaLMH: React.FC<TextAreaLMHProps> = ({ id, label, placeholder, value, hint, error, onChange, onBlur }: TextAreaLMHProps) => {
  return (
    <div className={styles.cont}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <textarea
        className={styles.textarea} 
        id={id}
        placeholder={placeholder}
        name={id}
        value={value} 
        onChange={onChange}
        onBlurCapture={onBlur}
      />
      <div className={hint ? styles.hint : styles.wrong}>{hint ?? error}</div>
    </div>
  );
};

export default TextAreaLMH;