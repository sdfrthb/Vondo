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
import { closeModal, openModal } from "../../services/slices/modalSlice";
import TextAvatarButton from "../../ui/components/TextAvatarButton/TextAvatarButton";
import teamData from "../../utils/teamData";
import TextIconButton from "../../ui/components/TextIconButton/TextIconButton";

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
  const onOpenVideo = () => {
    dispatch(openModal('video'))}
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
          photoList={['Костя','Егор','Миша','Таня','Алёна']}
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
          photoList={['Аня','Миша','Родион','Басель','Дарина']}
          loomData={'Костя'}
        />
      </section>
      <Process
        title={
          "Открываем фигму, отвечаем в\u00A0чате за\u00A015\u00A0минут и присылаем видеоотчёты о\u00A0работе каждый день"
        }
        person={'Аня'}
      >
        <div className={styles.artifacts}>
        <TextAvatarButton type={'big'} text={'Видео\u000Aо\u00A0форматах работы'} photo={teamData('Аня').photo} onClick={onOpenVideo}/>
        <TextAvatarButton type={'big'} text={'Видео\u000Aоб\u00A0оценке'} photo={teamData('Аня').photo} onClick={onOpenVideo}/>
        </div>
      </Process>
      <NewsList />
      <section className={styles.cases}>
      <Case
          type={"horizontal"}
          caseImage={img2gis}
          title={"За 50 дней запустили Экоиндекс,\u000Aсайт-исследование городов России"}
          description={
            "Работали по T&M,\u000Aзакончили раньше\u000Aсрока"
          }
          photoList={['Миша','Даша','Костя','Таня']}
          loomData={'Костя'}
        />
      </section>
      <Process
        title={
          "К каждому проекту - команда из\u00A0артдиректора, менеджера и\u00A0дизайнеров. Организуем свой процесс или встроимся в ваш"
        }
        person={'Миша'}
      />

      <Team />
      <Process
        title={
          "Обучаем команду быстрой\u000Aи емкой коммуникации,\u000Aкак между собой,\u000Aтак и в общении с клиентом"
        }
        person={'Вася'}
        type={'links'}
      >
        <div className={styles.links}>
        <TextIconButton type={'link'} text={'Процессы с клиентом'} />
        <TextIconButton type={'link'} text={'Процессы с сотрудниками'} />
        </div>
      </Process>
      <section className={styles.cases}>
        <Case
          type={"horizontal"}
          caseImage={img2gis}
          title={"Сделали нейминг и\u00A0логобук для Attiro\u00A0- сервиса по\u00A0подбору одежды"}
          description={
            "Провели несколько итераций по\u00A0запросу клиента"
          }
          photoList={['Аня','Миша']}
          loomData={'Костя'}
        />
        <Case
          type={"vertical"}
          caseImage={imgBaladi}
          title={
            "Провели редизайн Nutrition\u00A0lab\u00A0- приложения для\u00A0контроля\u00A0питания"
          }
          description={
            "Решили UX-проблемы\u000Aи обновили визуал в\u00A0соответствии с новым брендбуком"
          }
          photoList={['Аня','Арина']}
          loomData={'Костя'}
        />
      </section>
      { isOpen && <LoomVideo loom={loom} onClose={() => dispatch(closeModal())} />}

    </div>
  );
}

export default MainPage;
