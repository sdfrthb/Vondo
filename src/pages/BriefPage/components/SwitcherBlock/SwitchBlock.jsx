import styles from "./SwitchBlock.module.css";
import Switcher from "./Switcher/Switcher";

function SwitchBlock({ text, name, children }) {
  return (
    <div className={styles.block}>
      <p className={`text text_type_m ${styles.text}`}>{text}</p>
      {!children && <Switcher />}
      {children}
    </div>
  );
}

export default SwitchBlock;
