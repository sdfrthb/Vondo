import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./Team.module.css";
import TeamTabs from "./TeamTabs/TeamTabs";
import React from "react";
import WorkGroupAvatar from "../../../../ui/components/WorkGroupAvatar/WorkGroupAvatar";

function Team() {
  const teamList = ['Миша', 'Вася', 'Аня', 'Егор', 'Костя', 'Таня']
  return (
    <section className={styles.wrapper}>
      <h2 className={`text text_type_h2`}>Команда</h2>
      <Tabs className={styles.tabs} focusTabOnClick={false}>
        <TabList className={styles.tabs_list}>
        {teamList.map((name) => (
        <React.Fragment key={name}>
          <Tab
            className={`text text_type_m ${styles.tab}`}
            selectedClassName={styles.selected_tab}
          >
            <WorkGroupAvatar person={name} />
          </Tab>

        </React.Fragment>
        ))}
        </TabList>
        {teamList.map((name) => (
        <React.Fragment key={name}>
          <TabPanel>
          <TeamTabs person={name} />
          </TabPanel>
        </React.Fragment>
        ))}
      </Tabs>
    </section>
  );
}

export default Team;
