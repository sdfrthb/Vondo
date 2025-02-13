import styles from "./Showreel.module.css";

function Showreel() {
  return (
    <section className={styles.wrapper}>
      <h1
        className={`text text_type_accent_l text_color_primary ${styles.title}`}
      >
        Помогаем крупным компаниям решать дизайн-задачи
      </h1>
      <div className={styles.reel}></div>
    </section>
  );
}

export default Showreel;
