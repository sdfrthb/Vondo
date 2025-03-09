import styles from "./Switcher.module.css";

function Switcher({ name, selectedOption, onChange }) {
  return (
    <div className={styles.switcher}>
      <label className={`${styles.wrapper} ${selectedOption === "no" ? styles.active : ''}`}>
        <input
          type="radio"
          name={name}
          value="no"
          checked={selectedOption === "no"}
          onChange={onChange}
          className={styles.radio_input}
        />
        <span
          className={`text text_type_m text_color_primary ${styles.content}`}
        >
          Нет
        </span>
      </label>
      <label className={`${styles.wrapper} ${selectedOption === "yes" ? styles.active : ''}`}>
        <input
          type="radio"
          name={name}
          value="yes"
          checked={selectedOption === "yes"}
          onChange={onChange}
          className={styles.radio_input}
        />
        <span
          className={`text text_type_m text_color_primary ${styles.content}`}
        >
          Да
        </span>
      </label>
    </div>
  );
}

export default Switcher;
