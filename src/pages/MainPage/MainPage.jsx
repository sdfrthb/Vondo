import React from "react";
import Showreel from "./components/Showreel/Showreel";
import AboutUs from "./components/AboutUs/AboutUs";
import Case from "./components/Case/Case";
import styles from "./MainPage.module.css";
import img2gis from "/Users/sdfrthb/vondo/src/images/2gis_case-min.png";
import imgBaladi from "/Users/sdfrthb/vondo/src/images/baladi_case-min.png";
import kostya from "/Users/sdfrthb/vondo/src/images/kostya-min.png";
import Process from "./components/Process/Process";
import NewsList from "./components/NewsList/NewsList";
import RateButton from "../../ui/components/RateButton/RateButton";
import Team from "./components/Team/Team";
import { useDispatch, useSelector } from "react-redux";
import { openModalSelector } from "../../services/selectors/modalSelector";
import LoomVideo from "./components/LoomVideo/LoomVideo";
import loom from "../../images/aboutData1.mp4"
import { closeModal } from "../../services/slices/modalSlice";

function MainPage() {
  window.addEventListener('scroll', function() {
    const anchor = document.getElementById('form');
    const blockToHide = document.getElementById('block-to-hide');

    if (window.scrollY > anchor.offsetTop - 840) {
      blockToHide.setAttribute('style', 'display:none;')
        // blockToHide.style.display = 'none';
    } else {
      blockToHide.setAttribute('style', 'display:flex;')
        // blockToHide.style.display = 'block';
    }
});
const isOpen = useSelector(openModalSelector);
const dispatch = useDispatch();
  return (

    <div>
      <RateButton />
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
          photoList={['Костя', 'Таня']}
          loomData={'Костя'}
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
          photoList={['Костя', 'Аня']}
          loomData={'Костя'}
        />
      </section>
      <Process
        title={
          "К каждому проекту - команда из\u00A0артдиректора, менеджера и\u00A0дизайнеров. Организуем свой процесс или встроимся в ваш"
        }
        person={'Миша'}
      />
      <NewsList />
      <section className={styles.cases}>
      <Case
          type={"horizontal"}
          caseImage={img2gis}
          title={"Сделали брендинг\u000Aдля Yex за 28 дней"}
          description={
            "Быстро запустились,\u000Aа\u00A0теперь готовимся\u000Aк\u00A0переезду на\u00A0Next"
          }
          photoList={['Костя']}
          loomData={'Костя'}
        />
      </section>
        <Process
        title={
          "Открываем фигму, отвечаем в\u00A0чате за\u00A015 минут и присылаем видеоотчёты о работе каждый день"
        }
        person={'Аня'}
      />
      <Team />
      <Process
        title={
          "Обучаем команду быстрой\u000Aи емкой коммуникации,\u000Aкак между собой,\u000Aтак и в общении с клиентом"
        }
        person={'Вася'}
      />
      { isOpen && <LoomVideo loom={loom} onClose={() => dispatch(closeModal())} />}

    </div>
  );
}

export default MainPage;
