import React from "react";
import teamData from "../../../../utils/teamData";
import styles from "./AboutWork.module.css";
import { useMediaQuery } from "react-responsive";

function AboutWork() {
  const workers = ["Вася", "Егор", "Костя", "Таня", "Миша", "Аня"];
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <section className={styles.wrapper}>
      <p className={`text text_type_xs`}>По работе</p>
      <div className={styles.column}>
        <p className={`text text_type_m`}>
          Мы рассматриваем все заявки от&nbsp;дизайнеров интерфейсов
        </p>
        <p className={`text text_type_m`}>
          Направьте ссылки на свои проекты и&nbsp;loom с&nbsp;рассказом об одном
          из&nbsp;них&nbsp;в&nbsp;Telegram&nbsp;
          {!isMobile && <br />}
          <a className={styles.link} href="https://t.me/vondo_hiring">
            @vondo_hiring
          </a>
        </p>
      </div>

      <div className={styles.photo_wrapper}>
        {workers.map((person) => (
          <React.Fragment key={person}>
            <div
              style={{ backgroundImage: `url(${teamData(person).photo})` }}
              className={styles.photo}
            >
              {" "}
            </div>
          </React.Fragment>
        ))}
        <div className={styles.photo}>
          <p className="text text_type_m">10+</p>
        </div>
        <p className="text text_type_xs">Ждем тебя!</p>
      </div>
    </section>
  );
}

export default AboutWork;
