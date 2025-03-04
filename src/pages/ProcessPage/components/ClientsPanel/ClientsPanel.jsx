import TextIconButton from "../../../../ui/components/TextIconButton/TextIconButton";
import TextAvatarButton from "../../../../ui/components/TextAvatarButton/TextAvatarButton";
import Content from "../Content/Content";
import ContentBlock from "../ContentBlock/ContentBlock";
import gif from "../../../../images/gif/2gis.gif";
import styles from "./ClientsPanel.module.css";
import { useEffect, useRef, useState } from "react";
import TextButton from "../../../../ui/components/TextButton/TextButton";
import { useMediaQuery } from "react-responsive";

function ClientsPannel() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const [activeSection, setActiveSection] = useState('start');
  const blockRefs = useRef([]);

  const smoothScroll = (ref) => {
    if (ref) {
      const elementPosition =
        ref.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - (window.innerWidth * 5.21) / 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const activateLink = () => {
    const sections = ["start", "team", "process", "result"];

    sections.forEach((sectionId, index) => {
      const ref = blockRefs.current[index];
      if (ref) {
        const sectionTop = ref.offsetTop;
        const sectionHeight = ref.clientHeight;

        if (
          window.scrollY >= sectionTop - sectionHeight / 3 &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      }
    });
  };

  useEffect(() => {
    const links = document.querySelectorAll(`.${styles.links} a[href^="#"]`);

    const handleClick = (e, index) => {
      e.preventDefault();
      smoothScroll(blockRefs.current[index]);
    };

    links.forEach((link, index) => {
      link.addEventListener("click", (e) => handleClick(e, index));
    });

    window.addEventListener("scroll", activateLink);

    return () => {
      window.removeEventListener("scroll", activateLink);
      links.forEach((link, index) => {
        link.removeEventListener("click", (e) => handleClick(e, index));
      });
    };
  }, []);

  return (
     <div className={styles.panel}>
      {!isMobile && <div className={styles.links}>
        <TextButton
          redirect
          text={"До старта"}
          type={"m"}
          url={"#start"}
          activeClass={activeSection === `start` ? "active" : "disabled"}

        />
        <TextButton
          redirect
          text={"Команда"}
          type={"m"}
          url={"#team"}
          activeClass={activeSection === `team` ? "active" : "disabled"}
        />
        <TextButton
          redirect
          text={"Процесс"}
          type={"m"}
          url={"#process"}
          activeClass={activeSection === `process` ? "active" : "disabled"}

        />
        <TextButton
          redirect
          text={"Результат"}
          type={"m"}
          url={"#result"}
          activeClass={activeSection === `result` ? "active" : "disabled"}

        />
      </div>}
      <div className={styles.content}>
        <div ref={(el) => (blockRefs.current[0] = el)} id="start">
          <ContentBlock title={"До старта"} photoList={["Вася", "Миша", "Аня"]}>
            <div>
              <Content
                title={"Поможем сформулировать задачу"}
                description={
                  "Без\u00A0ТЗ\u00A0даже\u00A0удобнее. Проведём серию встреч, исследуем бизнес и\u00A0поможем составить требования"
                }
              >
                <TextIconButton
                  icon={"link"}
                  side={"left"}
                  text={"Пример описания задачи"}
                  url={"/"}
                  size={"xs"}
                />
              </Content>
              <Content
                title={"Предложим гибкие форматы работы"}
                description={
                  "Мы\u00A0привыкли работать по\u00A0T&M и\u00A0Retainer— это\u00A0помогает менять состав и\u00A0объём задач на\u00A0лету"
                }
              >
                <TextAvatarButton
                  text={"Пример описания задачи"}
                  url={"/"}
                  type={"small"}
                  gif={gif}
                />
              </Content>
              <Content
                title={"Оценка на\u00A0следующий день"}
                description={
                  "Вместе со\u00A0сметой\u00A0— видеообзор процесса, команды и\u00A0подхода к\u00A0решению задачи"
                }
              >
                <TextIconButton
                  icon={"link"}
                  side={"left"}
                  text={"Пример сметы проекта"}
                  url={"/"}
                  size={"xs"}
                />
              </Content>
            </div>
          </ContentBlock>
        </div>
        <div ref={(el) => (blockRefs.current[1] = el)} id="team">
          <ContentBlock
            title={"Команда"}
            photoList={isMobile ? ["Таня", "Костя", "Егор"] : ["Вася", "Миша", "Аня", "Таня", "Костя", "Егор"]}
            more
          >
            <div>
              <Content
                title={"Подключим всех участников к\u00A0общению"}
                description={
                  "Обучаем всех ёмкой коммуникации, не\u00A0прячем исполнителей за\u00A0менеджеров"
                }
              >
                <TextAvatarButton
                  text={"Визитка одного из дизайнеров"}
                  url={"/"}
                  type={"small"}
                  gif={gif}
                />
              </Content>
              <Content
                title={"В\u00A0каждом проекте артдиректор и\u00A0менеджер"}
                description={
                  "Артдиректор\u00A0— за\u00A0качество, смыслы и\u00A0процесс. Менеджер\u00A0— за\u00A0ресурсы, сроки и\u00A0сервис"
                }
              ></Content>
              <Content
                title={"Найдём подрядчиков для\u00A0спец. задач"}
                description={
                  "Если\u00A0в\u00A0штате не\u00A0окажется узкой экспертизы\u00A0— найдём исполнителя и\u00A0внедрим в\u00A0процесс"
                }
              >
                <TextIconButton
                  icon={"link"}
                  side={"left"}
                  text={"Стать партнёром"}
                  url={"/"}
                  size={"xs"}
                />
              </Content>
            </div>
          </ContentBlock>
        </div>
        <div ref={(el) => (blockRefs.current[2] = el)} id="process">
        <ContentBlock
          title={"Процесс"}
          photoList={["Вася", "Миша", "Аня"]}
        >
          <div>
            <Content
              title={"Отвечаем в\u00A0чате за\u00A015\u00A0минут"}
              description={
                "Не\u00A0работаем на\u00A0выходных и\u00A0после\u00A018:00, но\u00A0оперативно реагируем в\u00A0рабочее время"
              }
            ></Content>
            <Content
              title={"Полный доступ и\u00A0результат каждый день"}
              description={
                "Открываем фигму и\u00A0записываем видеоотчёты о\u00A0работе каждый вечер"
              }
            >
              <div className={styles.buttons}>
                <TextIconButton
                  icon={"link"}
                  side={"left"}
                  text={"Пример проекта в фигме"}
                  url={"/"}
                  size={"xs"}
                />
                <TextAvatarButton
                  text={"Смотреть один из отчётов"}
                  url={"/"}
                  type={"small"}
                  gif={gif}
                />
              </div>
            </Content>
            <Content
              title={"Покажем последовательность всех этапов работы"}
              description={
                "Используем диаграмму Ганта для\u00A0отображения этапов и\u00A0контрольных точек по\u00A0проекту"
              }
            >
              <TextIconButton
                icon={"link"}
                side={"left"}
                text={"Пример диаграммы Ганта"}
                url={"/"}
                size={"xs"}
              />
            </Content>
            <Content
              title={"Построим свой процесс или внедримся в\u00A0ваш"}
              description={
                "Подключимся к\u00A0вашим трекерам и\u00A0мессенджерам, придём на\u00A0встречи или\u00A0организуем свои"
              }
            ></Content>
            <Content
              title={"Без\u00A0отпусков и\u00A0больничных"}
              description={
                "Если\u00A0потребуется\u00A0— временно заменим человека другим специалистом"
              }
            ></Content>
          </div>
        </ContentBlock>
        </div>
        <div ref={(el) => (blockRefs.current[3] = el)} id="result">
        <ContentBlock
          title={"Результат"}
          photoList={["Вася", "Миша", "Аня"]}
        >
          <div>
            <Content
              title={"Сопроводим до\u00A0релиза"}
              description={
                "Поможем проконтролировать работу ваших подрядчиков, проверим результат на\u00A0соответствие требованиям"
              }
            >
              <TextAvatarButton
                text={"Пример видеоинструкции"}
                url={"/"}
                type={"small"}
                gif={gif}
              />
            </Content>
            <Content
              title={"Передадим дела"}
              description={
                "Отправим все\u00A0исходники и\u00A0запишем видео-инструкции по\u00A0использвоанию результатов работы вашей командой"
              }
            ></Content>
            <Content
              title={"Останемся на\u00A0связи"}
              description={
                "Проконсультируем по\u00A0любым вопросам в\u00A0любое время после\u00A0сдачи проекта"
              }
            ></Content>
          </div>
        </ContentBlock>
        </div>
      </div>
    </div>
  );
}

export default ClientsPannel;
