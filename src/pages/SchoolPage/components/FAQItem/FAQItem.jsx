import { useState } from "react";
import styles from "./FAQItem.module.css";
import { ReactComponent as MinusIcon } from "../../../../images/icon/minus.svg";
import { ReactComponent as PlusIcon } from "../../../../images/icon/plus.svg";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button onClick={() => setIsOpen(!isOpen)} className={styles.wrapper}>
      <div className={`${styles.texts} ${isOpen ? styles.display : ""}`}>
        <p className="text text_type_m">{question}</p>
        <p className={`text text_type_s ${styles.answer} ${isOpen ? styles.open : ''}`}>{answer}</p>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.btn}>
        {isOpen ? <MinusIcon size={24} /> : <PlusIcon size={24} />}
      </button>
    </button>
  );
}

export default FAQItem;
