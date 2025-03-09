import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./ProcessPage.module.css";
import { useMediaQuery } from "react-responsive";
import ClientsPannel from "./components/ClientsPanel/ClientsPanel";
import EmployeesPanel from "./components/EmployeesPanel/EmployeesPanel";
import Footer from "../../ui/components/Footer/Footer";
import FormSection from "../../ui/components/FormSection/FormSection";
import { useEffect, useRef, useState } from "react";
import TextIconButton from "../../ui/components/TextIconButton/TextIconButton";
import { useLocation } from "react-router-dom";

const ProcessPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const defaultTab = query.get('tab') || 'clients';
  let defaultTabIndex = 0
  if (defaultTab === "employess") {
     defaultTabIndex = 1
  }
  const [tabHeight, setTabHeight] = useState(500);
  const [tabIndex, setTabIndex] = useState(defaultTabIndex);
  const [overflow, setOverflow] = useState(defaultTabIndex ? "hidden" : "visible");

  const myRef = useRef(null);

  useEffect(() => {

    if (myRef.current) {
      let elementHeight
      if (defaultTabIndex) {
        elementHeight = !isMobile
        ? myRef.current.firstChild.children[2].firstChild.clientHeight +
          myRef.current.firstChild.children[0].clientHeight
        : myRef.current.firstChild.children[2].firstChild.clientHeight +
          myRef.current.firstChild.children[0].clientHeight + 54;
      }
      else {
        elementHeight = !isMobile
        ? myRef.current.firstChild.children[1].firstChild.clientHeight +
          myRef.current.firstChild.children[0].clientHeight +
          84
        : myRef.current.firstChild.children[1].firstChild.clientHeight +
          myRef.current.firstChild.children[0].clientHeight;
      }
      setTabHeight(`${elementHeight}px`);
    }
  }, [isMobile, defaultTabIndex]);

  const handleSelect = (index) => {
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');
    const activePanel = tabPanels[index];
    const tabsContent = document.querySelector('[role="tablist"]').clientHeight;
    const activePanelContent = activePanel.firstChild.clientHeight;
    if (index === 1) {
      setTimeout(() => {
        setOverflow("hidden");
      }, 500);
    }
    if (activePanel) {
      setTabHeight(`${activePanelContent + tabsContent}px`);
    }
    if (index === 0) {
      setOverflow("visible");
    }
    setTabIndex(index);
  };

  setTimeout(() => {
    const intervalId = setInterval(() => {
      window.scrollBy(0, 4);
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      }
    }, 5)
  }, 5000);
  return (
    <>
      <div className={styles.content}>
        {tabIndex === 1 && (
          <div className={styles.fixed_btn}>
            <TextIconButton
              text={"Стать частью команды"}
              icon={"arrow up"}
              side={"left"}
              url={"https://t.me/vondohiring"}
              color
            />
          </div>
        )}
        <h1 className="text text_type_h2">
          Создаём честный, прозрачный и&nbsp;открытый процесс внутри
          и&nbsp;снаружи
        </h1>
        <div ref={myRef}>
          <Tabs
            className={styles.tabs_wrapper}
            focusTabOnClick={false}
            forceRenderTabPanel
            onSelect={handleSelect}
            style={{ height: tabHeight }}
            defaultIndex={defaultTabIndex}
          >
            <TabList className={styles.tabs_list}>
              <Tab
                className={styles.tab}
                selectedClassName={styles.selected_tab}
              >
                <p
                  className={`text text_type_${isMobile ? "s" : "m"} ${
                    styles.tab_text
                  }`}
                >
                  Клиентам
                </p>
              </Tab>
              <Tab
                className={styles.tab}
                selectedClassName={styles.selected_tab}
              >
                <p
                  className={`text text_type_${isMobile ? "s" : "m"} ${
                    styles.tab_text
                  }`}
                >
                  Сотрудникам
                </p>
              </Tab>
            </TabList>
            <TabPanel
              className={styles.tab_pannel}
              selectedClassName={styles.selected_tab_pannel}
              style={{ height: tabHeight, overflow: overflow }}
            >
              <ClientsPannel />
            </TabPanel>
            <TabPanel
              className={styles.tab_pannel}
              selectedClassName={styles.selected_tab_pannel}
              style={{ height: tabHeight }}
            >
              <EmployeesPanel />
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {tabIndex === 0 && <FormSection />}
      <Footer />
    </>
  );
};

export default ProcessPage;
