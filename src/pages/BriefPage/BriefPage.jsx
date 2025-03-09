import { useState } from "react";
import Footer from "../../ui/components/Footer/Footer";
import styles from "./BriefPage.module.css";
import BriefForm from "./components/BriefForm/BriefForm";
import AvatarInfo from "../../ui/components/AvatarInfo/AvatarInfo";
import Button from "../../ui/components/Button/Button";
import BriefHoursTexts from "../../utils/BriefHoursTexts";

function BriefPage() {
  const [submit, setSubmit] = useState();
  // const [isAnimating, setIsAnimating] = useState();

  const handleSubmit = () => {
    // setIsAnimating(true);
    setTimeout(() => {
      setSubmit(true);
      // setIsAnimating(false);
    }, 150);
  };

  const handleReset = () => {
    // setIsAnimating(true);
    setTimeout(() => {
      setSubmit(false);
      // setIsAnimating(false);
    }, 150);
  };
  return (
    <>
      <div className={styles.content}>
        {submit ? (
          <>
          <div className={styles.greeting}>
          <div className={styles.info}>
              <h1 className="text text_type_h1">Спасибо!</h1>
              <BriefHoursTexts />
            </div>
            <div className={styles.workers}>
              <p className="text text_type_xs">На встрече будут</p>
              <div className={styles.photo_wrapper}>
                <AvatarInfo person={"Аня"} size={"s"} color />
                <AvatarInfo person={"Миша"} size={"s"} color/>
                <AvatarInfo person={"Вася"} size={"s"} color/>
              </div>
            </div>
            <Button text={"Заполнить снова"} color onClick={handleReset} />
          </div>

          </>
        ) : (
          <>
            <div className={styles.info}>
              <h1 className="text text_type_h1">Бриф</h1>
              <p className="text text_type_accent_m">
                Поможет нам&nbsp;подготовиться к&nbsp;первой встрече
              </p>
            </div>
            <BriefForm setSubmit={handleSubmit} />
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default BriefPage;
