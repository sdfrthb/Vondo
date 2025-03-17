import styles from "./ReviewItem.module.css";
import { ReactComponent as QuotesIcon } from "../../../../images/icon/quotes.svg";

function ReviewItem({ text, name, role, photo }) {
  return (
    <div className={styles.review}>
      <div className={styles.quote}>
        <QuotesIcon className={styles.icon} />
        <p className={`text text_type_m ${styles.quote_text}`}>
          {text}
        </p>
      </div>
      <div className={styles.person}>
        <div
          style={{ backgroundImage: `url(${photo})` }}
          className={styles.photo}
        ></div>
        <div className={styles.person_info}>
          <p className="text text_type_s">{name}</p>
          <p className="text text_type_xs text_color_secondary">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
