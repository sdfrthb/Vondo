import TextIconButton from "../../../../ui/components/TextIconButton/TextIconButton";
// import TextAvatarButton from "../../../../ui/components/TextAvatarButton/TextAvatarButton";
import Content from "../Content/Content";
import ContentBlock from "../ContentBlock/ContentBlock";
// import formatGif from "../../../../images/gif/Видео_о_форматах_работы.gif";
// import designerGif from "../../../../images/gif/Визитка_одного_из_дизайнеров.gif";
// import reportGif from "../../../../images/gif/Смотреть_один_из_отчётов.gif";
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
          window.scrollY  >= sectionTop &&
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
                {/* <TextIconButton
                  icon={"link"}
                  side={"left"}
                  text={"Пример описания задачи"}
                  url={"/"}
                  size={"xs"}
                /> */}
              </Content>
              <Content
                title={"Предложим гибкие форматы работы"}
                description={
                  "Мы\u00A0привыкли работать по\u00A0T&M и\u00A0Retainer— это\u00A0помогает менять состав и\u00A0объём задач на\u00A0лету"
                }
              >
                {/* <TextAvatarButton
                  text={"Видео о форматах работы"}
                  url={"https://www.loom.com/share/6cf1c9be872940609352587e06e20258"}
                  type={"small"}
                  gif={formatGif}
                /> */}
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
                  url={"https://docs.google.com/spreadsheets/d/11GrPPHGLaDkhHlfDr17TOHvip9sGh6AqGncjkvJ8TFo/edit?usp=sharing"}
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
                {/* <TextAvatarButton
                  text={"Визитка одного из дизайнеров"}
                  url={"https://www.loom.com/share/944fe764dc3d4268921f1af6914c0426?sid=31cbfc06-96c8-49e4-a6a2-d7a5a67f3aa7"}
                  type={"small"}
                  gif={designerGif}
                /> */}
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
                  icon={"arrow up"}
                  side={"left"}
                  text={"Стать партнёром"}
                  url={"https://t.me/wevondo"}
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
                  url={"https://www.figma.com/design/XnBSQy6wxElrp0UZdXM14D/%D0%9F%D1%80%D0%B8%D0%BC%D0%B5%D1%80-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0?node-id=5-17&t=5alXxLZzjWFvTfSA-1"}
                  size={"xs"}
                />
                {/* <TextAvatarButton
                  text={"Смотреть один из отчётов"}
                  url={"https://www.loom.com/share/ef809e02a804464da2f48dc2e40113ed"}
                  type={"small"}
                  gif={reportGif}
                /> */}
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
                url={"https://docs.google.com/spreadsheets/d/1_Wl_W8ZQHOJY7DhA2w-lcpmw48VmtOGJrJc4XuV_j2o/edit?usp=sharing"}
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
              {/* <TextAvatarButton
                text={"Пример видеоинструкции"}
                url={"/"}
                type={"small"}
                gif={gif}
              /> */}
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
