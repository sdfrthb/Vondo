import { useState } from "react";
import QuestionsForm from "../QuestionsForm/QuestionsForm";
import styles from "./SchoolFormSection.module.css";
import Button from "../../../../ui/components/Button/Button";
import SchoolLessonHoursTexts from "../../../../utils/SchoolLessonHoursTexts";
import LessonForm from "../LessonForm/LessonForm";

function SchoolFormSection({ children, type }) {
  const [submit, setSubmit] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSubmit(true);
      setIsAnimating(false);
    }, 150);
  };

  const handleReset = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSubmit(false);
      setIsAnimating(false);
    }, 150);
  };
  return (
    <section
      className={`text_color_accent ${styles.form} ${
        type === "questions" ? styles.form_reverse : ""
      }`}
      id={type === "lesson" ? "lesson" : null}
    >
      {children}
      {type === "questions" &&
        (submit ? (
          <div
            className={`${styles.column} ${
              isAnimating ? styles.fade_out : styles.fade_in
            } ${styles.fixed_height}`}
          >
            <div className={styles.done}></div>
            <p className={`text text_type_accent_m ${styles.offset}`}>
              Заявка отправлена
            </p>
            <Button text={"Заполнить снова"} onClick={handleReset} />
          </div>
        ) : (
          <div
            className={`${styles.form_block} ${
              isAnimating ? styles.fade_out : styles.fade_in
            }`}
          >
            <QuestionsForm setSubmit={handleSubmit} type={"questions"} />
          </div>
        ))}
      {type === "lesson" &&
        (submit ? (
          <div
            className={`${styles.column} ${
              isAnimating ? styles.fade_out : styles.fade_in
            }`}
          >
            <div className={styles.done}></div>
            <div className={styles.greeting}>
              <p className={`text text_type_accent_m`}>Заявка отправлена</p>
              <SchoolLessonHoursTexts />
            </div>
            <Button text={"Заполнить снова"} onClick={handleReset} />
          </div>
        ) : (
          <div
            className={`${styles.form_block} ${
              isAnimating ? styles.fade_out : styles.fade_in
            }`}
          >
            <LessonForm setSubmit={handleSubmit} />
          </div>
        ))}
    </section>
  );
}

export default SchoolFormSection;
