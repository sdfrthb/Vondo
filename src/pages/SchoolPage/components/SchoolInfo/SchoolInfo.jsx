import { useMediaQuery } from "react-responsive";
import TeacherSection from "../TeacherSection/TeacherSection";
import Timeline from "../Timeline/Timeline";
import styles from "./SchoolInfo.module.css";

function SchoolInfo() {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1024 });
  return (
    <div className={styles.wrapper}>
      <div className={styles.schedule_wrapper}>
        <h1 className="text text_type_h2">
          Проводим дизайн-тренировки в&nbsp;мини-группах по&nbsp;вечерам
        </h1>
        <div className={styles.schedule_info}>
          <div className={styles.left_column}>
            <p className={`text text_type_${isDesktop ? "accent_s" : "m"}`}>
              Cобираем вместе до&nbsp;6&nbsp;дизайнеров. Созваниваемся
              в&nbsp;зуме и&nbsp;заходим в&nbsp;фигму
            </p>
            <div className={styles.tabloid_wrapper}>
              <div className={styles.tabloid}>
                <p className={`text text_type_${isDesktop ? "h3" : isTablet ? "accent_m" : "h2"}`}>12</p>
                <p className={`text text_type_${isDesktop ? "m" : "s"}`}>тренировок провели</p>
              </div>
              <div className={styles.tabloid}>
                <p className={`text text_type_${isDesktop ? "h3" : isTablet ? "accent_m" : "h2"}`}>20</p>
                <p className={`text text_type_${isDesktop ? "m" : "s"}`}>дизайнеров посетили</p>
              </div>
            </div>
          </div>
          <div className={styles.right_column}>
            <div className={styles.card}>
              <p className="text text_type_accent_s">пн, ср, пт</p>
              <p className="text text_type_s">Дни проведения</p>
            </div>
            <div className={styles.card}>
              <p className="text text_type_accent_s">19:00–20:00</p>
              <p className="text text_type_s">Время по Москве</p>
            </div>
            <div className={styles.card}>
              <p className="text text_type_accent_s">3 месяца</p>
              <p className="text text_type_s">Продолжительность</p>
            </div>
            <div className={styles.card}>
              <p className="text text_type_accent_s">36 модулей</p>
              <p className="text text_type_s">Объём</p>
            </div>
          </div>
        </div>
        <TeacherSection />
      </div>
      <div className={styles.timeline_wrapper}>
        <h2 className="text text_type_h2">
          Занятие длится час, 15&nbsp;минут теории и&nbsp;сразу практика
        </h2>
        <div className={styles.timelines}>
          <Timeline
            title={"2\u00A0раза в\u00A0неделю\u00A0— тема\u00A0с\u00A0упражнением"}
          >
            <p className={`text text_type_accent_s ${styles.lesson_one}`}>Рассказываем об&nbsp;одной из&nbsp;тем&nbsp;в&nbsp;графическом дизайне</p>
            <p className={`text text_type_accent_s ${styles.lesson_two}`}>Все&nbsp;делают макеты, преподаватель подсказывает и&nbsp;направляет</p>
          </Timeline>
          <Timeline
            title={"1\u00A0раз\u00A0в\u00A0неделю\u00A0— перевёрстка"}
          >
            <p className={`text text_type_accent_s ${styles.lesson_three}`}>Разбираем ошибки в&nbsp;реальном макете из&nbsp;практики крупных компаний</p>
            <p className={`text text_type_accent_s ${styles.lesson_four}`}>Все пересобирают макет, преподаватель подсказывает и&nbsp;направляет</p>
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default SchoolInfo;
