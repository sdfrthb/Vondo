import styles from "./Problem.module.css";
import { ReactComponent as ArrowIcon } from "../../../../images/icon/arrow/right.svg";
function Problem({problem, solution}) {
  return ( <div className={styles.wrapper}>
    <p className={`text text_type_m ${styles.problem}`}>{problem}</p>
    <ArrowIcon className={styles.icon} />
    <p className={`text text_type_accent_s ${styles.solution}`}>{solution}</p>
  </div> );
}

export default Problem;
