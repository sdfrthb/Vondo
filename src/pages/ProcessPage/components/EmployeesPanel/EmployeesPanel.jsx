// import TextAvatarButton from "../../../../ui/components/TextAvatarButton/TextAvatarButton";
import TextIconButton from "../../../../ui/components/TextIconButton/TextIconButton";
import Content from "../Content/Content";
import ContentBlock from "../ContentBlock/ContentBlock";
// import studioGif from "../../../../images/gif/Видео_с_обзором_студии.gif";
// import designerGif from "../../../../images/gif/Видео_дизайнера.gif";
// import whiteboardGif from "../../../../images/gif/Как_проходит_whiteboard.gif";
// import lessonGif from "../../../../images/gif/Занятие_3.gif";
import styles from "./EmployeesPanel.module.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import TextButton from "../../../../ui/components/TextButton/TextButton";
function EmployeesPanel() {
  const [activeSection, setActiveSection] = useState("before-start");
  const blockRefs = useRef([]);
  const isMobile = useMediaQuery({ maxWidth: 480 });

  const smoothScroll = (ref) => {
    if (ref) {
      const elementPosition = ref.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - (window.innerWidth * 5.21) / 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const activateLink = () => {
    const sections = ["before-start", "onboarding", "work"];

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
      {!isMobile && (
        <div className={styles.links}>
          <TextButton
            type={"m"}
            redirect
            text={"До старта"}
            url={"#before-start"}
            activeClass={
              activeSection === `before-start` ? "active" : "disabled"
            }
          />
          <TextButton
            type={"m"}
            redirect
            text={"Онбординг"}
            url={"#onboarding"}
            activeClass={activeSection === `onboarding` ? "active" : "disabled"}
          />
          <TextButton
            type={"m"}
            redirect
            text={"Работа"}
            url={"#work"}
            activeClass={activeSection === `work` ? "active" : "disabled"}
          />
        </div>
      )}
      <div className={styles.content}>
        <div ref={(el) => (blockRefs.current[0] = el)} id="before-start">
          <ContentBlock title={"До старта"} photoList={["Вася", "Миша", "Аня"]}>
            <div>
              <Content
                title={"Честно расскажем о\u00A0работе"}
                description={
                  "Мы\u00A0— студия без\u00A0текучки, но\u00A0работа подходит не\u00A0всем. Посмотрите ролик, где\u00A0рассказываем о\u00A0плюсах и\u00A0минусах"
                }
              >
                {/* <TextAvatarButton
                  text={"Видео с обзором студии"}
                  url={"https://www.loom.com/share/73db04b9e171470db3fa05aa72957fbf?sid=c8cfd40c-edde-4de8-83c2-f7544582d24e"}
                  type={"small"}
                  gif={studioGif}
                /> */}
              </Content>
              <Content
                title={
                  "Попросим кейсы и\u00A0видео с\u00A0рассказом об\u00A0одном из\u00A0них"
                }
                description={
                  "Хотим сразу проверить софт-скиллы. Не\u00A0смотрим CV и\u00A0красивые кейсы. Лучше\u00A0— ссылки на\u00A0фигму"
                }
              >
                {/* <TextAvatarButton
                  text={"Видео дизайнера, которого взяли"}
                  url={"https://www.loom.com/share/30e242fa5a404d9fa883e5b582124090?sid=7a31cfbc-a54c-40b1-9f63-a2e1e0e77018"}
                  type={"small"}
                  gif={designerGif}
                /> */}
              </Content>
              <Content
                title={"Вместо интервью\u00A0— whiteboard challenge"}
                description={
                  "Встретимся и\u00A0вместе поработаем над\u00A0созданием макета, проверим навыки «на\u00A0лету»"
                }
              >
                {/* <TextAvatarButton
                  text={"Как проходит whiteboard?"}
                  url={"https://www.loom.com/share/0d3d3739453345b8affce917f69012cd?sid=49caf204-3d30-4124-937a-72fbf80c52f4"}
                  type={"small"}
                  gif={whiteboardGif}
                /> */}
              </Content>
              <Content
                title={"Заочно познакомим с\u00A0командой"}
                description={
                  "Отправим видео-визитки будущих коллег с\u00A0рассказом о\u00A0себе, попросим записать такую\u00A0же"
                }
              ></Content>
            </div>
          </ContentBlock>
        </div>
        <div ref={(el) => (blockRefs.current[1] = el)} id="onboarding">
          <ContentBlock
            title={"Онбординг"}
            photoList={["Вася", "Миша", "Игорь", "Аня"]}
            id={"process"}
          >
            <div>
              <Content
                title={"Месяц обучаем работе в\u00A0студии"}
                description={
                  "40-часовой курс по\u00A0коммуникации и\u00A0нашим процессам. Нужно будет пройти и\u00A0сдать тест в\u00A0конце"
                }
              >
                {/* <TextAvatarButton
                  text={"Занятие 3. Про задачи"}
                  url={"https://www.loom.com/share/052234b454ce4fd6a638caf41cf7e5e4"}
                  type={"small"}
                  gif={lessonGif}
                /> */}
              </Content>
              <Content
                title={"Бадди и\u00A0руководитель"}
                description={
                  "Руководитель\u00A0— поможет пройти курс и\u00A0расскажет о\u00A0предстоящей работе. Бадди\u00A0— погрузит в\u00A0процессы"
                }
              ></Content>
            </div>
          </ContentBlock>
        </div>
        <div ref={(el) => (blockRefs.current[2] = el)} id="work">
          <ContentBlock title={"Работа"} photoList={["Вася", "Миша", "Аня"]}>
            <div>
              <Content
                title={"Вкладываемся в\u00A0рост"}
                description={
                  "1:1\u00A0с\u00A0руководителем раз\u00A0в\u00A0неделю. Карты роста, регулярное обучение"
                }
              >
                {/* <TextAvatarButton
                  text={"Как мы делаем карты роста"}
                  url={"/"}
                  type={"small"}
                  gif={gif}
                /> */}
              </Content>
              <Content
                title={"Даём крутые проекты"}
                description={
                  "Верим, что\u00A0дизайнеры растут на\u00A0сложных и\u00A0масштабных работах."
                }
              >
                <TextIconButton
                  icon={"arrow up"}
                  side={"left"}
                  text={"Проекты в портфолио"}
                  url={"/cases"}
                  redirect
                  size={"xs"}
                />
              </Content>
              <Content
                title={"Без\u00A0ненужного контроля"}
                description={
                  "Отчитываемся лумами. Не\u00A0вводим встречи и\u00A0отчёты, если\u00A0они\u00A0не\u00A0нужны"
                }
              ></Content>
              <Content
                title={"Уважаем отдых"}
                description={
                  "Не\u00A0приветствуем переработки, заканчиваем в\u00A018:00\u00A0и\u00A0не\u00A0требуем подключаться в\u00A0выходные"
                }
              ></Content>
            </div>
          </ContentBlock>
        </div>
      </div>
    </div>
  );
}

export default EmployeesPanel;
