import styles from "./Problem.module.css";
import { ReactComponent as ArrowIcon } from "../../../../images/icon/arrow/right.svg";
import { ReactComponent as ArrowDownIcon } from "../../../../images/icon/arrow/down.svg";
import { useMediaQuery } from "react-responsive";
function Problem({problem, solution}) {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return ( <div className={styles.wrapper}>
    <p className={`text text_type_m ${styles.problem}`}>{problem}</p>
    {isMobile ? <ArrowDownIcon className={styles.icon} /> : <ArrowIcon className={styles.icon} />}
    <p className={`text text_type_accent_s ${styles.solution}`}>{solution}</p>
  </div> );
}

export default Problem;
