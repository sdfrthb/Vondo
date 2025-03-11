import styles from "./BriefInput.module.css";
import { useMask } from '@react-input/mask';

function BriefInput({ label, name, placeholder, type, onChange, children }) {
  const inputRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
  });
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={name} className={`text text_type_xs`}>
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className={`text text_type_m ${styles.textarea}`}
        ></textarea>
      ) : (
        <input
          onChange={onChange}
          type={name==="number" ? "tel" : "text"}
          ref={name==="number" ? inputRef : null}
          id={name}
          name={name}
          placeholder={placeholder}
          className={`text text_type_m ${styles.input}`}
        ></input>
      )}
        {children}
    </div>
  );
}

export default BriefInput;
