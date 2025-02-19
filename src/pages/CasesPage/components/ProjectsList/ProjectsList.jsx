import Project from "./Projest/Project";
import styles from "./ProjectsList.module.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { projectsData } from "../../../../utils/projectsData";
import React from "react";

function ProjectsList() {
  const tagList = [
    "Сайты",
    "Брендинг",
    "Приложения",
    "Разработка",
    "Поддержка",
  ];
  let filteredProjectsList = [];
  tagList.forEach((tag) => {
    filteredProjectsList.push(
      projectsData.filter(
        (project) => project.tags && project.tags.includes(tag)
      )
    );
  });
  return (
    <div className={styles.wrapper}>
      <h3 className={`text text_type_h3`}>Все проекты</h3>
      {projectsData.length > 40 && (
        <Tabs className={styles.tabs_wrapper} focusTabOnClick={false}>
          <TabList className={styles.tabs_list}>
            {tagList.map((tag, index) => (
              <Tab
                className={`text text_color_secondary text_type_m ${styles.tab}`}
                selectedClassName={`${styles.selected_tab}`}
                key={index}
              >
                <p className={`text`}>
                  <span>{tag}</span>{" "}
                  <sup>
                    {
                      projectsData.filter((project) =>
                        project.tags.includes(tag)
                      ).length
                    }
                  </sup>
                </p>
              </Tab>
            ))}
          </TabList>
          <div>
            {filteredProjectsList.map((filteredProjects, index) => (
              <React.Fragment key={`${index}`}>
                <TabPanel>
                  {filteredProjects.map((project, id) => (
                    <Project
                      title={project.title}
                      tags={project.tags}
                      loom={project.loom}
                      photo={project.photo}
                      index={id}
                      key={`${index}-${id}`}
                    />
                  ))}
                </TabPanel>
              </React.Fragment>
            ))}
          </div>
        </Tabs>
      )}
      {projectsData.length <= 40 && (
        <div className={styles.projects}>
          {projectsData.slice().reverse().map((project, id) => (
            <Project
              title={project.title}
              tags={project.tags}
              loom={project.loom}
              photo={project.photo}
              index={projectsData.length - id - 1}
              key={projectsData.length - id - 1}
            />
          ))}
        </div>
      )}
      <div className={styles.statistic}>
        <p className="text text_type_accent_m">{projectsData.length}</p>
        <p className="text text_type_accent_m">9</p>
        <p className="text text_type_s">проектов</p>
        <p className="text text_type_s">клиентов</p>
      </div>
    </div>
  );
}

export default ProjectsList;
