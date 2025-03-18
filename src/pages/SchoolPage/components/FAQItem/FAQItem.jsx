import { useState } from "react";
import styles from "./FAQItem.module.css";
import { ReactComponent as MinusIcon } from "../../../../images/icon/minus.svg";
import { ReactComponent as PlusIcon } from "../../../../images/icon/plus.svg";
import { ReactComponent as MinusBigIcon } from "../../../../images/icon/minus_big.svg";
import { ReactComponent as PlusBigIcon } from "../../../../images/icon/plus_big.svg";
import { useMediaQuery } from "react-responsive";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return (
    <button onClick={() => setIsOpen(!isOpen)} className={styles.wrapper}>
      <div className={`${styles.texts}`}>
        <p className="text text_type_m">{question}</p>
        <p className={`text text_type_s ${styles.answer} ${isOpen ? styles.open : ''}`}>{answer}</p>
      </div>
      <div className={styles.btn}>
        {isMobile && (isOpen ? <MinusIcon /> : <PlusIcon />)}
        {!isMobile && (isOpen ? <MinusBigIcon /> : <PlusBigIcon />)}
      </div>
    </button>
  );
}

export default FAQItem;
