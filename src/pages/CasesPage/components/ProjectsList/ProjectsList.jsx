import Project from "./Projest/Project";
import styles from "./ProjectsList.module.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { projectsData } from "../../../../utils/projectsData";
import React from "react";

function ProjectsList() {
  return (
    <div className={styles.wrapper}>
      <h3 className={`text text_type_h3`}>Все проекты</h3>
      <Tabs className={styles.tabs_wrapper} focusTabOnClick={false}>
        <TabList className={styles.tabs_list}>
          <Tab
            className={`text text_color_secondary text_type_m ${styles.tab}`}
            selectedClassName={`${styles.selected_tab}`}
          >
            <p className={`text`}><span>Сайты</span> <sup>{projectsData.filter((project) => project.tags.includes("Сайты")).length}</sup></p>
          </Tab>
          <Tab
            className={`text text_color_secondary text_type_m ${styles.tab}`}
            selectedClassName={`${styles.selected_tab}`}
          >
            <p className={`text`}><span>Брендинг</span> <sup>{projectsData.filter((project) => project.tags.includes("Брендинг")).length}</sup></p>
          </Tab>
          <Tab
            className={`text text_color_secondary text_type_m ${styles.tab}`}
            selectedClassName={`${styles.selected_tab}`}
          >
            <p className={`text`}><span>Приложения</span> <sup>{projectsData.filter((project) => project.tags.includes("Приложения")).length}</sup></p>
          </Tab>
          <Tab
            className={`text text_color_secondary text_type_m ${styles.tab}`}
            selectedClassName={`${styles.selected_tab}`}
          >
            <p className={`text`}><span>Разработка</span> <sup>{projectsData.filter((project) => project.tags.includes("Разработка")).length}</sup></p>
          </Tab>
          <Tab
            className={`text text_color_secondary text_type_m ${styles.tab}`}
            selectedClassName={`${styles.selected_tab}`}
          >
            <p className={`text`}><span>Поддержка</span> <sup>{projectsData.filter((project) => project.tags.includes("Поддержка")).length}</sup></p>
          </Tab>
        </TabList>
        <div>
          <TabPanel>
          {projectsData.filter((project) => project.tags.includes("Сайты")).map((project, index) => (
            <React.Fragment key={index}>
              <Project title={project.title} tags={project.tags} loom={project.loom} photo={project.photo} index={index}/>
            </React.Fragment>
          ))}
          </TabPanel>
          <TabPanel>
          {projectsData.filter((project) => project.tags.includes("Брендинг")).map((project, index) => (
            <React.Fragment key={index}>
              <Project title={project.title} tags={project.tags} loom={project.loom} photo={project.photo} index={index}/>
            </React.Fragment>
          ))}
          </TabPanel>
          <TabPanel>
          {projectsData.filter((project) => project.tags.includes("Приложения")).map((project, index) => (
            <React.Fragment key={index}>
              <Project title={project.title} tags={project.tags} loom={project.loom} photo={project.photo} index={index}/>
            </React.Fragment>
          ))}
          </TabPanel>
          <TabPanel>
          {projectsData.filter((project) => project.tags.includes("Разработка")).map((project, index) => (
            <React.Fragment key={index}>
              <Project title={project.title} tags={project.tags} loom={project.loom} photo={project.photo} index={index}/>
            </React.Fragment>
          ))}
          </TabPanel>
          <TabPanel>
          {projectsData.filter((project) => project.tags.includes("Поддержка")).map((project, index) => (
            <React.Fragment key={index}>
              <Project title={project.title} tags={project.tags} loom={project.loom} photo={project.photo} index={index}/>
            </React.Fragment>
          ))}
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}

export default ProjectsList;
