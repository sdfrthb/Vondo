import { useMediaQuery } from "react-responsive";
import styles from "./TeacherSection.module.css";

function TeacherSection() {
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <div className={styles.photo}>
      <div className={styles.info_wrapper}>
        <p
          className={`text text_color_${
            isMobile ? "primary" : "accent"
          } text_type_${isTablet ? "m" : isMobile ? "h2" : "s"} ${
            styles.offset
          }`}
        >
          Преподаватель
        </p>
        {isMobile && <div className={styles.mobile_photo}></div>}

        <p
          className={`text text_color_${
            isMobile ? "primary" : "accent"
          } text_type_accent_${isMobile ? "m" : "l"}`}
        >
          Жора Погребняк
        </p>
        <p
          className={`text text_color_${
            isMobile ? "secondary" : "accent"
          } text_type_${isMobile ? "s" : "m"}`}
        >
          Руководитель отдела коммуникации 2ГИС
        </p>
      </div>
      {!isMobile && (
        <p
          className={`text text_color_${
            isMobile ? "primary" : "accent"
          } text_type_m"`}
        >
          Тимлид 2ГИС, Ментор Solvery, Vill и&nbsp;Sheeep
        </p>
      )}
      {isMobile && (
        <div className={styles.tags}>
          <div className={styles.tag}>
            <div className={`${styles.logo} ${styles.logo_one}`}></div>
            <p className="text text_type_s">Ментор Solvery</p>
          </div>
          <div className={styles.tag}>
            <div className={`${styles.logo} ${styles.logo_two}`}></div>
            <p className="text text_type_s">Тимлид 2ГИС</p>
          </div>
          <div className={styles.tag}>
            <div className={`${styles.logo} ${styles.logo_three}`}></div>
            <p className="text text_type_s">Ментор Sheeep</p>
          </div>
          <div className={styles.tag}>
            <div className={`${styles.logo} ${styles.logo_four}`}></div>
            <p className="text text_type_s">Ментор Vill</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeacherSection;
