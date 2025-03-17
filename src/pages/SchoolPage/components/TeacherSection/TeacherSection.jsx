import styles from "./TeacherSection.module.css";

function TeacherSection() {
  return (
    <div className={styles.photo}>
      <div className={styles.info_wrapper}>
        <p className={`text text_color_accent text_type_s ${styles.offset}`}>
          Преподаватель
        </p>
        <p className="text text_color_accent text_type_accent_l">
          Жора Погребняк
        </p>
        <p className="text text_color_accent text_type_m">
          Руководитель отдела коммуникации 2ГИС
        </p>
      </div>
      <p className="text text_color_accent text_type_m">
        Тимлид 2ГИС, Ментор Solvery, Vill и&nbsp;InterSheep
      </p>
    </div>
  );
}

export default TeacherSection;
