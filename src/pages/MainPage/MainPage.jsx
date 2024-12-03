import React from "react";
import Showreel from "./components/Showreel/Showreel";
import AboutUs from "./components/AboutUs/AboutUs";
import Case from "./components/Case/Case";
import styles from './MainPage.module.css';
import img2gis from '/Users/sdfrthb/vondo/src/images/2gis_case-min.png';
import imgBaladi from '/Users/sdfrthb/vondo/src/images/baladi_case-min.png'
import kostya from '/Users/sdfrthb/vondo/src/images/kostya-min.png';


function MainPage() {
  return (
      <div>
        <Showreel />
        <AboutUs />
        <section className={styles.cases}>
        <Case type={"horizontal"} caseImage={img2gis} title={'Сделали дизайн и\u00A0разработали на тильде новый сайт 2ГИС'}
        description={'Быстро запустились, а\u00A0теперь готовимся к\u00A0переезду на\u00A0Next'} photo={kostya}/>
        <Case type={"vertical"} caseImage={imgBaladi} title={'1.5 года развиваем\u000ABalady\u00A0- главного\u000Aконкурента Google-карт в Саудовской Аравии'}
        description={'Встроились в продуктовую команду клиента, настроили дизайн-процесс'} photo={kostya}/>
        </section>
      </div>
   );
}

export default MainPage;
