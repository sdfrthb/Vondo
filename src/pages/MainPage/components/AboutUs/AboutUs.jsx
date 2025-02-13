import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./AboutUs.module.css";
import TabsContent from "./TabsContent/TabsContent";
import { useMediaQuery } from "react-responsive";

function AboutUs() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <section className={styles.wrapper}>
      <h2 className={`text text_type_h2`}>Делаем</h2>
      <Tabs className={styles.tabs_wrapper} focusTabOnClick={false} forceRenderTabPanel>
        <TabList className={styles.tabs_list}>
          <Tab className={styles.tab} selectedClassName={styles.selected_tab}>
            <p
              className={`text text_type_${isMobile ? "s" : "m"} ${
                styles.tab_text
              }`}
            >
              Сайты
            </p>
          </Tab>
          <Tab className={styles.tab} selectedClassName={styles.selected_tab}>
            <p
              className={`text text_type_${isMobile ? "s" : "m"} ${
                styles.tab_text
              }`}
            >
              Приложения
            </p>
          </Tab>
          <Tab className={styles.tab} selectedClassName={styles.selected_tab}>
            <p
              className={`text text_type_${isMobile ? "s" : "m"} ${
                styles.tab_text
              }`}
            >
              Разработку
            </p>
          </Tab>
          <Tab className={styles.tab} selectedClassName={styles.selected_tab}>
            <p
              className={`text text_type_${isMobile ? "s" : "m"} ${
                styles.tab_text
              }`}
            >
              Брендинг
            </p>
          </Tab>
        </TabList>
        <div>
          <TabPanel className={styles.tab_pannel} selectedClassName={styles.selected_tab_pannel}>
            <TabsContent
              title={
                "Создадим дизайн лендинга, спец. проекта или большого сайта. Быстро запустим на\u00A0no-code\u00A0решениях"
              }
              description={
                "Поможем составить тех. задание, подскажем, как увеличить конверсии"
              }
              price={"От 140 000 ₽ за\u00A0спринт"}
            />
          </TabPanel>
          <TabPanel className={styles.tab_pannel} selectedClassName={styles.selected_tab_pannel}>
            <TabsContent
              title={
                "Не только мобильные, а\u00A0еще под\u00A0телевизоры, стенды и\u00A0другие специфические форматы"
              }
              description={"Разработаем сами или\u00A0сопроводим вашу комнаду"}
              price={"От 140 000 ₽ за\u00A0спринт"}
            />
          </TabPanel>
          <TabPanel className={styles.tab_pannel} selectedClassName={styles.selected_tab_pannel}>
            <TabsContent
              title={
                "Переведём макеты в код и\u00A0запустим продукт таким, каким он был задуман в\u00A0дизайне"
              }
              description={"Обычно работаем с Next.js, React, React Native"}
              price={"От 160 000 ₽ за\u00A0спринт"}
            />
          </TabPanel>
          <TabPanel className={styles.tab_pannel} selectedClassName={styles.selected_tab_pannel}>
            <TabsContent
              title={
                "Дизайн-концепция, логотип, айдентика или\u00A0полноценный брендбук с\u00A0платформой и\u00A0носителями."
              }
              description={
                "Проконтролируем типографию, поможем изготовить продукцию"
              }
              price={"От 120 000 ₽"}
            />
          </TabPanel>
        </div>
      </Tabs>
    </section>
  );
}

export default AboutUs;
