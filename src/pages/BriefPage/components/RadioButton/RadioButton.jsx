import { useMediaQuery } from "react-responsive";
import styles from "./RadioButton.module.css"

function RadioButton({ value, selectedOption, onChange}) {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return (
    <label className={`${styles.wrapper} ${selectedOption === value ? styles.active : ''}`}>
        <input
          type="radio"
          name={"price"}
          value={value}
          onChange={onChange}
          className={styles.radio_input}
        />
        <span
          className={`text text_type_${isMobile ? 's' : 'm'} text_color_primary ${styles.content}`}
        >
          {value}
        </span>
      </label>
   );
}

export default RadioButton;
