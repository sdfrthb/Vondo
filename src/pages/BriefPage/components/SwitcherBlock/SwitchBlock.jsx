import styles from "./SwitchBlock.module.css";
import Switcher from "./Switcher/Switcher";

function SwitchBlock({ text, name, selectedOption, onChange, children }) {
  return (
    <div className={styles.block}>
      <p className={`text text_type_m ${styles.text}`}>{text}</p>
      {!children && <Switcher name={name} selectedOption={selectedOption} onChange={onChange}/>}
      {children}
    </div>
  );
}

export default SwitchBlock;
