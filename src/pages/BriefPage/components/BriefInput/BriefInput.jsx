import styles from "./BriefInput.module.css";

function BriefInput({ label, name, placeholder, type, onChange, children }) {
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
          mask={ name==="number" ? `+7 (999) 999-99-99` : ''}
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
