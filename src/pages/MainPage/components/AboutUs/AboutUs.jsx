import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./AboutUs.module.css";
import TabsContent from "./TabsContent/TabsContent";
import { useMediaQuery } from "react-responsive";

function AboutUs() {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <section className={styles.wrapper}>
      <h2 className={`text text_type_h2`}>Делаем</h2>
      <Tabs className={styles.tabs_wrapper} focusTabOnClick={false}>
        <TabList className={styles.tabs_list}>
          <Tab className={`text text_type_${isMobile ? 's' : 'm'} ${styles.tab}`} selectedClassName={styles.selected_tab}>Сайты</Tab>
          <Tab className={`text text_type_${isMobile ? 's' : 'm'} ${styles.tab}`} selectedClassName={styles.selected_tab}>Приложения</Tab>
          <Tab className={`text text_type_${isMobile ? 's' : 'm'} ${styles.tab}`} selectedClassName={styles.selected_tab}>Разработку</Tab>
          <Tab className={`text text_type_${isMobile ? 's' : 'm'} ${styles.tab}`} selectedClassName={styles.selected_tab}>Приложения</Tab>
        </TabList>
        <div>
          <TabPanel>
            <TabsContent title={'Создадим дизайн лендинга, спец. проекта или большого сайта. Быстро запустим на\u00A0no-code\u00A0решениях'}
            description={'Поможем составить тех. задание, подскажем, как увеличить конверсии'} price={'От 140 000 ₽ за\u00A0спринт'}/>
          </TabPanel>
          <TabPanel>
            <TabsContent title={'Не только мобильные, а\u00A0еще под\u00A0телевизоры, стенды и другие специфические форматы'}
            description={'Разработаем сами или\u00A0сопроводим вашу комнаду'} price={'От 140 000 ₽ за\u00A0спринт'}/>
          </TabPanel>
          <TabPanel>
            <TabsContent title={'Переведём макеты в код и\u00A0запустим продукт таким, каким он был задуман\u00A0в\u00A0дизайне'}
            description={'Обычно работаем с Next.js, React, React Native'} price={'От 160 000 ₽ за\u00A0спринт'}/>
          </TabPanel>
          <TabPanel>
            <TabsContent title={'Дизайн-концепция, логотип, айдентика или\u00A0полноценный брендбук с\u00A0платформой и\u00A0носителями.'}
            description={'Проконтролируем типографию, поможем изготовить продукцию'} price={'От 120 000 ₽'}/>
          </TabPanel>
        </div>
      </Tabs>
    </section>
  );
}

export default AboutUs;
