import styles from "./BriefInput.module.css";

function BriefInput({ label, name, placeholder, onChange, children }) {
  return (
    <div className={styles.wrapper}>
      {children}
      {label && (
        <label htmlFor={name} className={`text text_type_xs`}>
          {label}
        </label>
      )}
      <input
        onChange={onChange}
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        className={`text text_type_s ${styles.input}`}
      ></input>
    </div>
  );
}

export default BriefInput;
