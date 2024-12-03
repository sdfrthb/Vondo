import React from "react";
import Showreel from "./components/Showreel/Showreel";
import AboutUs from "./components/AboutUs/AboutUs";
import Case from "./components/Case/Case";
import styles from "./MainPage.module.css";
import img2gis from "/Users/sdfrthb/vondo/src/images/2gis_case-min.png";
import imgBaladi from "/Users/sdfrthb/vondo/src/images/baladi_case-min.png";
import kostya from "/Users/sdfrthb/vondo/src/images/kostya-min.png";
import Process from "./components/Process/Process";

function MainPage() {
  return (
    <div>
      <Showreel />
      <AboutUs />
      <section className={styles.cases}>
        <Case
          type={"horizontal"}
          caseImage={img2gis}
          title={"Сделали дизайн и\u00A0разработали на тильде новый сайт 2ГИС"}
          description={
            "Быстро запустились,\u000Aа\u00A0теперь готовимся\u000Aк\u00A0переезду на\u00A0Next"
          }
          photo={kostya}
        />
        <Case
          type={"vertical"}
          caseImage={imgBaladi}
          title={
            "1.5 года развиваем\u000ABalady\u00A0- главного\u000Aконкурента Google-карт\u000Aв Саудовской Аравии"
          }
          description={
            "Встроились в продуктовую команду клиента, настроили дизайн-процесс"
          }
          photo={kostya}
        />
      </section>
      <Process
        title={
          "К каждому проекту - команда из\u00A0артдиректора, менеджера и\u00A0дизайнеров. Организуем свой процесс или встроимся в ваш"
        }
        person={'Миша'}
      />
      <Case
          type={"horizontal"}
          caseImage={img2gis}
          title={"Сделали брендинг\u000Aдля Yex за 28 дней"}
          description={
            "Быстро запустились,\u000Aа\u00A0теперь готовимся\u000Aк\u00A0переезду на\u00A0Next"
          }
          photo={kostya}
        />
        <Process
        title={
          "Открываем фигму, отвечаем в\u00A0чате за\u00A015 минут и присылаем видеоотчёты о работе каждый день"
        }
        person={'Аня'}
      />
    </div>
  );
}

export default MainPage;
