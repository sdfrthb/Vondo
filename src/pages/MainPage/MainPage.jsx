import React from "react";
import Showreel from "./components/Showreel/Showreel";
import AboutUs from "./components/AboutUs/AboutUs";
import Case from "./components/Case/Case";
import styles from './MainPage.module.css';
import img2gis from '/Users/sdfrthb/vondo/src/images/2gis_case-min.png';
import kostya from '/Users/sdfrthb/vondo/src/images/kostya-min.png';


function MainPage() {
  return (
      <div>
        <Showreel />
        <AboutUs />
        <section className={styles.cases}>
        <Case caseImage={img2gis} title={'Сделали дизайн и разработали на тильде новый сайт 2ГИС'}
        description={'Быстро запустились, а теперь готовимся к переезду на Next'} photo={kostya}/>
        </section>
      </div>
   );
}

export default MainPage;
