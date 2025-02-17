import { useState } from "react";
import WorkHoursTexts from "../../../utils/WorkHoursTexts";
import Button from "../Button/Button";
import styles from "./FormSection.module.css";
import { useMediaQuery } from "react-responsive";
import { Mobile } from "../../../lib/media/request";
import AvatarInfo from "../AvatarInfo/AvatarInfo";
import Form from "./Form/Form";

function FormSection() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const [submit, setSubmit] = useState();
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
    <section id="form" className={`text_color_accent ${styles.form}`}>
      <div className={styles.info}>
        <p className={`text text_type_accent_m ${styles.title}`}>
          Свяжемся и&nbsp;договоримся о&nbsp;встрече, зададим вопросы,
          а&nbsp;на&nbsp;следующий день вышлем оценку
        </p>
        <Mobile>
          {submit ? (
            <div
              className={`${styles.column} ${
                isAnimating ? styles.fade_out : styles.fade_in
              }`}
            >
              <div className={styles.done}></div>
              <div className={styles.greeting}>
                <p className={`text text_type_accent_m`}>Заявка отправлена</p>
                <p className={`text text_type_s`}>
                  Свяжемся с вами для уточнения деталей
                </p>
              </div>
              <Button text={"Заполнить снова"} onClick={handleReset} />
            </div>
          ) : (
            <div
              className={`${styles.form_block} ${
                isAnimating ? styles.fade_out : styles.fade_in
              }`}
            >
              <Form setSubmit={handleSubmit}></Form>
            </div>
          )}
        </Mobile>
        <div className={styles.workers}>
          <p className="text text_type_xs">На встрече будут</p>
          <div className={styles.photo_wrapper}>
            <AvatarInfo person={"Аня"} size={"s"} />
            <AvatarInfo person={"Миша"} size={"s"} />
            <AvatarInfo person={"Вася"} size={"s"} />
          </div>
        </div>
        <div className={styles.work_time}>
          <p className="text text_type_xs">Когда свяжемся</p>
          <WorkHoursTexts />
        </div>
      </div>
      {!isMobile &&
        (submit ? (
          <div
            className={`${styles.column} ${
              isAnimating ? styles.fade_out : styles.fade_in
            }`}
          >
            <div className={styles.done}></div>
            <div className={styles.greeting}>
              <p className={`text text_type_accent_m`}>Заявка отправлена</p>
              <p className={`text text_type_s`}>
                Свяжемся с вами для уточнения деталей
              </p>
            </div>
            <Button text={"Заполнить снова"} onClick={() => setSubmit(false)} />
          </div>
        ) : (
          <div
            className={`${styles.form_block} ${
              isAnimating ? styles.fade_out : styles.fade_in
            }`}
          >
            <Form setSubmit={handleSubmit}></Form>
          </div>
        ))}
    </section>
  );
}

export default FormSection;
