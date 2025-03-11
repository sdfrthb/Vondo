import styles from "./Input.module.css";
import { useMask } from '@react-input/mask';

function Input({ label, name, placeholder, onChange, children }) {
  const inputRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
  });
  return (
    <div className={styles.wrapper}>
      {children}
      <label htmlFor={name} className={`text text_type_xs`}>
        {label}
      </label>
      <input
        onChange={onChange}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`text text_type_s ${styles.input}`}
        type={name==="number" ? "tel" : "text"}
        ref={name==="number" ? inputRef : null}
      ></input>
    </div>
  );
}

export default Input;
