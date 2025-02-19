import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styles from './ProcessPage.module.css'
import { useMediaQuery } from 'react-responsive';
import ClientsPannel from './components/ClientsPanel/ClientsPanel';

function ProcessPage() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return ( <div className={styles.content}>
      <h1 className="text text_type_h2">Создаём честный, прозрачный и&nbsp;открытый процесс внутри и&nbsp;снаружи</h1>
      <Tabs className={styles.tabs_wrapper} focusTabOnClick={false} forceRenderTabPanel>
        <TabList className={styles.tabs_list}>
          <Tab className={styles.tab} selectedClassName={styles.selected_tab}>
            <p
              className={`text text_type_${isMobile ? "s" : "m"} ${
                styles.tab_text
              }`}
            >
              Клиентам
            </p>
          </Tab>
          <Tab className={styles.tab} selectedClassName={styles.selected_tab}>
            <p
              className={`text text_type_${isMobile ? "s" : "m"} ${
                styles.tab_text
              }`}
            >
              Сотрудникам
            </p>
          </Tab>
        </TabList>
        <TabPanel className={styles.tab_pannel} selectedClassName={styles.selected_tab_pannel}>
          <ClientsPannel />
          </TabPanel>
          <TabPanel className={styles.tab_pannel} selectedClassName={styles.selected_tab_pannel}>
          </TabPanel>
        </Tabs>
  </div> );
}

export default ProcessPage;
