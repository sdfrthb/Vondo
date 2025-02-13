import AvatarInfo from "../../../../ui/components/AvatarInfo/AvatarInfo";
import styles from "./Process.module.css";

function Process({ title, person, children, type }) {

  return (
    <section className={styles.card}>
      <div className={styles.col_left}>
        <p className={`text text_type_s ${styles.text}`}>Процессы</p>
        <p className={`text text_type_accent_l under ${styles.title}`}>
          {title}
        </p>
        <AvatarInfo person={person} />
      </div>
      {children && (
        <div className={styles.col_right}>
          <p className={`text text_type_s`}>
            {type === "links" ? "Ссылки" : "Артефакты"}
          </p>
          {children}
        </div>
      )}
    </section>
  );
}

export default Process;
