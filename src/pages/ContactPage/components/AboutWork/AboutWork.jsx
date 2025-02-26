import React from "react";
import styles from "./AboutWork.module.css";
import TextIconButton from "../../../../ui/components/TextIconButton/TextIconButton";
import { useMediaQuery } from "react-responsive";
import Avatar from "../../../../ui/components/Avatar/Avatar";

function AboutWork() {
  const workers = ["Вася", "Егор", "Костя", "Таня", "Миша", "Аня"];
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <section className={styles.wrapper}>
      <p className={`text text_type_xs`}>По работе</p>
      <div className={styles.column}>
        <p className={`text text_type_m ${styles.text}`}>
          Мы рассматриваем все заявки от&nbsp;дизайнеров интерфейсов
        </p>
        <p className={`text text_type_m ${styles.gap}`}>
          Направьте ссылки на&nbsp;свои проекты и&nbsp;loom с&nbsp;рассказом об&nbsp;одном
          из&nbsp;них&nbsp;в&nbsp;Telegram&nbsp;
          {!isMobile && <br />}
          <a className={styles.link} href="https://t.me/vondohiring" target="_blank" rel="noreferrer">
          @vondohiring
          </a>
        </p>
        <TextIconButton
              text={"Стать частью команды"}
              icon={"arrow up"}
              side={"left"}
              url={"https://t.me/vondohiring"}
              color
            />
      </div>
      <div className={styles.photo_wrapper}>
        {workers.map((person) => (
          <React.Fragment key={person}>
            <Avatar person={person} size_l={64} size_m={54} size_s={44}/>
          </React.Fragment>
        ))}
        <div className={styles.photo}>
          <p className="text text_type_m text_color_secondary">10+</p>

        </div>
      </div>
    </section>
  );
}

export default AboutWork;
