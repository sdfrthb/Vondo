import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./AboutUs.module.css";
import TabsContent from "./TabsContent/TabsContent";

function AboutUs() {
  return (
    <section className={styles.wrapper}>
      <h2 className={`text text_type_h2`}>Делаем</h2>
      <Tabs className={styles.tabs_wrapper} focusTabOnClick={false}>
        <TabList className={styles.tabs_list}>
          <Tab className={`text text_type_m ${styles.tab}`} selectedClassName={styles.selected_tab}>Сайты</Tab>
          <Tab className={`text text_type_m ${styles.tab}`} selectedClassName={styles.selected_tab}>Приложения</Tab>
          <Tab className={`text text_type_m ${styles.tab}`} selectedClassName={styles.selected_tab}>Разработку</Tab>
          <Tab className={`text text_type_m ${styles.tab}`} selectedClassName={styles.selected_tab}>Приложения</Tab>
        </TabList>
        <div>
          <TabPanel>
            <TabsContent title={'Создадим дизайн лендинга, спец. проекта или большого сайта. Быстро запустим на no-code решениях'}
            description={'Поможем составить тех. задание, подскажем, как увеличить конверсии'} price={'От 120 000 ₽ за спринт'}/>
          </TabPanel>
          <TabPanel>
            <TabsContent title={'Не только мобильные, а еще под телевизоры, стенды и другие специфические форматы'}
            description={'Разработаем сами с партнёрами или сопроводим вашу комнаду'} price={'От 120 000 ₽ за спринт'}/>
          </TabPanel>
          <TabPanel>
            <TabsContent title={'Как же я круто разработаю сайт, будет очень быстро и качественно.'}
            description={'Вондо это супер компания, как же все крутооооо'} price={'От 120 000 ₽ за спринт'}/>
          </TabPanel>
          <TabPanel>
            <TabsContent title={'Разработаем дизайн-концепцию, логотип, айдентику или полноценный брендбук с бренд-платформой и носителями.'}
            description={'Поможем составить тех. задание, подскажем, как увеличить конверсии'} price={'От 120 000 ₽ за спринт'}/>
          </TabPanel>
        </div>
      </Tabs>
    </section>
  );
}

export default AboutUs;
