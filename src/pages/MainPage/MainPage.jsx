import React from "react";
import Showreel from "./components/Showreel/Showreel";
import AboutUs from "./components/AboutUs/AboutUs";
import styles from "./MainPage.module.css";
import img2gis from "../../images/cases/opkCase-min.png";
import imgBaladi from "../../images/cases/baladyCase-min.png";
import imgEco from "../../images/cases/ecoIndexCase-min.png";
import imgAdvent from "../../images/cases/adventCase-min.png";
import imgAttiro from "../../images/cases/attiroCase-min.png";
import imgLab from "../../images/cases/nutritionCase-min.png";
import rateGif from "../../images/gif/Оценка_проектов.gif";
import formatGif from "../../images/gif/Видео_о_форматах_работы.gif";
import twogisGif from "../../images/gif/2gis.gif"
import Process from "./components/Process/Process";
import NewsList from "./components/NewsList/NewsList";
import RateButton from "../../ui/components/RateButton/RateButton";
import Team from "./components/Team/Team";
import TextAvatarButton from "../../ui/components/TextAvatarButton/TextAvatarButton";
import Case from "../../ui/components/Case/Case";
import { useMediaQuery } from "react-responsive";
import TextIconButton from "../../ui/components/TextIconButton/TextIconButton";

function MainPage() {
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
    <div className={styles.content}>
      {isDesktop && <RateButton />}
      <Showreel />
      <AboutUs />
      <section className={styles.cases}>
        <Case
          type={"horizontal"}
          caseImage={img2gis}
          backgroundColor={"#1A1A1A"}
          title={
            "Сделали дизайн и\u00A0разработали на\u00A0тильде новый\u00A0сайт 2ГИС"
          }
          description={
            "Быстро запустились, а\u00A0теперь готовимся к\u00A0переезду на\u00A0Next"
          }
          photoList={["Костя", "Миша", "Егор", "Таня", "Алёна"]}
          loomData={{gif:twogisGif, url:"https://www.loom.com/share/c667aa93b8af4718979cfc93f63a6172"}}
        />
        <Case
          type={"vertical"}
          caseImage={imgBaladi}
          backgroundColor={
            "linear-gradient(214deg, #1E928F 3.62%, #0B4D4C 95.55%), #1E928F"
          }
          title={
            "1.5\u00A0года развиваем Balady\u00A0— главного конкурента Google-карт в\u00A0Саудовской Аравии"
          }
          description={
            "Встроились в\u00A0продуктовую команду клиента, настроили дизайн-процесс"
          }
          photoList={["Аня", "Миша", "Саша", "Мелисса"]}
        />
      </section>
      <Process
        title={
          "Открываем фигму, отвечаем в\u00A0чате за\u00A015\u00A0минут и присылаем видеоотчёты о\u00A0работе каждый день"
        }
        person={"Аня"}
      >
        <div className={styles.artifacts}>
          <TextAvatarButton
            type={"big"}
            text={"Видео о\u000Aформатах работы"}
            gif={formatGif}
            url={"https://www.loom.com/share/6cf1c9be872940609352587e06e20258"}
          />
          <TextAvatarButton
            type={"big"}
            text={"Видео\u000Aоб\u00A0оценке"}
            gif={rateGif}
            url={"https://www.loom.com/share/efce762177be445d84410c9e662cc804"}
          />
        </div>
      </Process>
      <NewsList />
      <section className={styles.cases}>
        <Case
          type={"horizontal"}
          caseImage={imgEco}
          backgroundColor={
            "linear-gradient(180deg, #19AA1E 0%, #0E8712 100%), var(--bg-accent-primary, #1A1A1A)"
          }
          title={
            "За\u00A050\u00A0дней запустили Экоиндекс\u00A0— сайт\u2011исследование городов России"
          }
          description={"Работали по\u00A0T&M, закончили раньше срока"}
          photoList={["Таня","Костя", "Даша"]}
        />
        <Case
          type={"vertical"}
          caseImage={imgAdvent}
          backgroundColor={
            "linear-gradient(0deg, #FFB500 0%, #FFB500 100%), linear-gradient(0deg, #9BC19E 0%, #9BC19E 100%), linear-gradient(0deg, #A0C5A3 0%, #A0C5A3 100%), linear-gradient(213deg, #83D289 14.3%, #5A8E77 103.82%), linear-gradient(213deg, #97CC99 14.3%, #579A6A 103.82%), linear-gradient(214deg, #1E928F 3.62%, #0B4D4C 95.55%), #1E928F"
          }
          title={
            "Запустили адвент-календарь для 2GIS, поучаствовали 350,000 пользователей"
          }
          description={
            "Сделали дизайн и разработали на\u00A0React за 45 дней"
          }
          photoList={["Костя", "Миша", "Саша", "Миша Давыдов"]}
        />
      </section>
      <Process
        title={
          "К каждому проекту - команда из\u00A0артдиректора, менеджера и\u00A0дизайнеров. Организуем свой процесс или встроимся в ваш"
        }
        person={"Миша"}
      />

      <Team />
      <Process
        title={
          "Обучаем команду быстрой и\u00A0емкой коммуникации, как\u00A0между\u00A0собой, так и\u00A0в\u00A0общении с\u00A0клиентом"
        }
        person={"Вася"}
        type={"links"}
      >
        <div className={styles.links}>
          <TextIconButton
            icon={"arrow up"}
            side={"left"}
            redirect
            text={"Процессы с клиентом"}
            url={"/process"}
          />
          <TextIconButton
            icon={"arrow up"}
            side={"left"}
            redirect
            text={"Процессы с сотрудниками"}
            url={"/process?tab=employess"}
          />
        </div>
      </Process>
      <section className={styles.cases}>
        <Case
          type={"horizontal_down"}
          caseImage={imgAttiro}
          backgroundColor={
            "linear-gradient(0deg, #A0C5B2 0%, #A0C5B2 100%), linear-gradient(180deg, #19AA1E 0%, #0E8712 100%)"
          }
          title={
            "Сделали нейминг и\u00A0логобук для\u00A0Attiro\u00A0— сервиса по\u00A0подбору одежды"
          }
          description={"Провели несколько итераций по\u00A0запросу клиента"}
          photoList={["Арина", "Вася"]}
        />
        <Case
          type={"vertical"}
          caseImage={imgLab}
          backgroundColor={
            "linear-gradient(0deg, #E1E1E1 0%, #E1E1E1 100%), linear-gradient(213deg, #279464 14.3%, #014527 103.82%), linear-gradient(214deg, #1E928F 3.62%, #0B4D4C 95.55%), #1E928F"
          }
          title={
            "Провели редизайн Nutrition lab\u00A0— приложения для\u00A0контроля питания"
          }
          description={
            "Решили UX-проблемы и обновили визуал в\u00A0соответствии с новым брендбуком"
          }
          photoList={["Аня","Миша", "Арина",  "Вася"]}
        />
      </section>
    </div>
  );
}

export default MainPage;
