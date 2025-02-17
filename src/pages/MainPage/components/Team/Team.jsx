import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./Team.module.css";
import TeamTabs from "./TeamTabs/TeamTabs";
import React, { useState } from "react";
import Avatar from "../../../../ui/components/Avatar/Avatar";
import TeamTab from "./TeamTab/TeamTab";
import { useMediaQuery } from "react-responsive";

function Team() {
  const teamList = [ "Вася", "Аня", "Миша", "Таня","Костя",  "Егор" ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
    <section className={styles.wrapper}>
      <h2 className={`text text_type_h2`}>Команда</h2>
      <Tabs className={styles.tabs} focusTabOnClick={false} forceRenderTabPanel>
        <TabList className={styles.tabs_list}>
          {teamList.map((name, index) => (
            <React.Fragment key={index}>
              <Tab
                className={`text text_type_m ${styles.tab}`}
                selectedClassName={styles.selected_tab}
              >
                {isDesktop ? (
                  <TeamTab
                    key={index}
                    isHovered={hoveredIndex === index}
                    isNeighbor={
                      hoveredIndex === index - 1 || hoveredIndex === index + 1
                    }
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Avatar person={name} size_l={64} size_m={54} invisible />
                  </TeamTab>
                ) : (
                  <Avatar person={name} size_l={64} size_m={54} size_s={44}/>
                )}{" "}
              </Tab>
            </React.Fragment>
          ))}
          <div
            className={`text text_type_m text_color_secondary ${styles.number}`}
          >
            10+
          </div>
        </TabList>
        {teamList.map((name) => (
          <React.Fragment key={name}>
            <TabPanel
              className={styles.tab_pannel}
              selectedClassName={styles.selected_tab_pannel}
            >
              <TeamTabs person={name} />
            </TabPanel>
          </React.Fragment>
        ))}
      </Tabs>
    </section>
  );
}

export default Team;
