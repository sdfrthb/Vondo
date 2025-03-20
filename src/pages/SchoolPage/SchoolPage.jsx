import styles from "./SchoolPage.module.css";
import SchoolInfo from "./components/SchoolInfo/SchoolInfo";
import Problem from "./components/Problem/Problem";
import Footer from "../../ui/components/Footer/Footer";
import Topic from "./components/Topic/Topic";
import FAQItem from "./components/FAQItem/FAQItem";
import ReviewItem from "./components/ReviewItem/ReviewItem";
import julia from "../../images/smallphotos/Юлия.png";
import anna from "../../images/smallphotos/Анна.png";
import elena from "../../images/smallphotos/Елена.png";
import karina from "../../images/smallphotos/Карина.png";
import natalya from "../../images/smallphotos/Наталья.png";
import tatyana from "../../images/smallphotos/Татьяна.png";
import CasesBlock from "./components/CasesBlock/CasesBlock";
import SchoolFormSection from "./components/SchoolFormSection/SchoolFormSection";
import SchoolHoursTexts from "../../utils/SchoolHoursTexts";
import TextIconButton from "../../ui/components/TextIconButton/TextIconButton";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function SchoolPage() {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const offset = isDesktop ? 840 : isMobile ? 900 : 1000;
  useEffect(() => {
    const handleScroll = function () {
      const anchor = document.getElementById("lesson");
      const blockToHide = document.getElementById("block-to-hide");
      if (blockToHide) {
        if (window.scrollY > anchor.offsetTop - offset) {
          blockToHide.setAttribute("style", "display:none;");
        } else {
          blockToHide.setAttribute("style", "display:flex;");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector("#lesson");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className={styles.content}>
        <div className={styles.fixed_btn} id="block-to-hide">
          <TextIconButton
            text={"Попробовать бесплатно"}
            icon={"arrow up"}
            side={"left"}
            url={"#lesson"}
            redirect
            color
            onClick={handleClick}
          />
        </div>
        <SchoolInfo />
        <CasesBlock />
        <div className={styles.block}>
          <h2 className="text text_type_h2">
            Решили проблемы курсов, с&nbsp;которыми сталкиваемся сами
          </h2>
          <div className={styles.problems}>
            <Problem
              problem={
                "Теория из\u00A0видеоуроков забывается на\u00A0следующий день"
              }
              solution={
                "Выученную теорию применяем на\u00A0том же\u00A0занятии"
              }
            />
            <Problem
              problem={
                "Без\u00A0подсказок в\u00A0процессе можно долго ошибаться и\u00A0тратить время"
              }
              solution={
                "Смотрим на\u00A0процесс работы и\u00A0указываем на\u00A0ошибки сразу"
              }
            />
            <Problem
              problem={
                "На\u00A0домашку нет\u00A0времени, сделать вовремя\u00A0— стресс"
              }
              solution={
                "Без\u00A0домашек, видеоуроков и\u00A0материалов для\u00A0чтения"
              }
            />
          </div>
        </div>
        <div className={styles.block}>
          <h2 className="text text_type_h2">
            36&nbsp;тем&nbsp;с&nbsp;полным прохождением за&nbsp;3&nbsp;месяца
          </h2>
          <div className={styles.table}>
            {!isMobile && (
              <div className={styles.table_titles}>
                <p className="text text_color_secondary text_type_xs">Темы</p>
                <p className="text text_color_secondary text_type_xs">
                  Занятия
                </p>
                <p className="text text_color_secondary text_type_xs">
                  Пример задания
                </p>
              </div>
            )}
            <div>
              <Topic
                title={"Якорные объекты"}
                example={
                  "Посмотрим как\u00A0меняется ощущение от\u00A0одного и\u00A0того\u00A0же\u00A0макета при\u00A0изменении конструкции якорных\u00A0объектов"
                }
                themes={[
                  "Виды якорей",
                  "Вариативность",
                  "Работа с\u00A0вниманием",
                ]}
              />
              <Topic
                title={"Сетки"}
                example={
                  "Разберёмся, как\u00A0устроены сетки в\u00A0работах швейцарских дизайнеров"
                }
                themes={["Виды сеток", "Снять сетку", "Вариативность"]}
              />
              <Topic
                title={"Лейаут"}
                example={
                  "Поработаем над\u00A0вариативностью решений внутри одного модуля в\u00A0рамках одной шрифтовой системы"
                }
                themes={["Модуль", "Ритм", "Сложный лэйаут"]}
              />
              <Topic
                title={"Контраст"}
                example={
                  "Соберём один и\u00A0тот\u00A0же\u00A0макет с\u00A0разным уровнем контраста: от\u00A0низкого до\u00A0чрезмерного"
                }
                themes={[
                  "Форма, размер, цвет",
                  "Вариативность",
                  "Контраст белого",
                ]}
              />
              <Topic
                title={"Напряжение"}
                example={
                  "Разберём референсы с\u00A0разными способами создания напряжения на\u00A0макете и\u00A0попробуем их\u00A0повторить"
                }
                themes={["Виды напряжения", "Вариативность"]}
              />
              <Topic
                title={"Типографика"}
                example={
                  "Разберёмся, когда и\u00A0зачем использовать много разных кеглей в\u00A0одном макете"
                }
                themes={[
                  "Шрифтовая система",
                  "Вариативность",
                  "Однокеглевой набор",
                  "Многокеглевой набор",
                ]}
              />
              <Topic
                title={"Читательское внимание"}
                example={
                  "Разберёмся с\u00A0базовым инструментарием управления читательским вниманием"
                }
                themes={[
                  "Заголовки, текст, картинки",
                  "Фактоид, подвёрстка, крик и\u00A0врезка",
                  "Презентация",
                ]}
              />
            </div>
          </div>
        </div>
        <div className={styles.block_min}>
          <h2 className="text text_type_h2">Часто задаваемые вопросы</h2>
          <div>
            <FAQItem
              question={"Я\u00A0не\u00A0знаю Figma, как\u00A0быть?"}
              answer={
                "Рисуем проекты в\u00A0Figma\u00A0— лучший инструмент для\u00A0дизайнеров на\u00A0сегодняшний день. Без\u00A0базы может быть сложнее, поэтому лучше заранее посмотреть обучающие видео."
              }
            />
            <FAQItem
              question={"Что делать, если пропущу часть занятий?"}
              answer={
                "Если пропустили\u00A0— приходите на\u00A0следующее занятие, темы лишь частично зависят друг от\u00A0друга. К\u00A0сожалению, мы не\u00A0делаем записи, но теорию по\u00A0темам можно легко найти в\u00A0интернете."
              }
            />
            <FAQItem
              question={
                "Останется\u00A0ли\u00A0у\u00A0меня доступ к\u00A0материалам после\u00A0обучения?"
              }
              answer={
                "Нет. Это не\u00A0классический курс с\u00A0лекциями\u00A0— все темы отрабатываем прямо на\u00A0занятиях. Но\u00A0у\u00A0вас останется доступ к\u00A0пространству в\u00A0Figma с\u00A0работами вас и\u00A0других участников."
              }
            />
            <FAQItem
              question={"Смогу\u00A0ли я найти работу после\u00A0курса?"}
              answer={
                "Мы не\u00A0даём гарантий трудоустройства, но активно ищем дизайнеров и\u00A0предлагаем наиболее талантливым выпускникам возможность присоединиться к\u00A0нашей команде."
              }
            />
            <FAQItem
              question={"Какие есть\u00A0способы оплаты?"}
              answer={
                "Через\u00A0Систему быстрых платежей (СБП) или\u00A0банковской картой."
              }
            />
            <FAQItem
              question={"Получу\u00A0ли\u00A0я документ после курса?"}
              answer={
                "Да, после\u00A0завершения курса мы отправим вам сертификат о\u00A0прохождении. Мы\u00A0—  не\u00A0образовательная организация, поэтому не\u00A0выдаём дипломы гос.\u00A0образца."
              }
            />
          </div>
        </div>
      </div>
      <SchoolFormSection type={"questions"}>
        <div className={`${styles.form_info} ${styles.form_info_reverse}`}>
          <SchoolHoursTexts />
        </div>
      </SchoolFormSection>
      <div className={`${styles.block} ${styles.review_block}`}>
        <h2 className="text text_type_h2">Отзывы учеников</h2>
        <div className={styles.review_table}>
          <div className={styles.review_list}>
            <ReviewItem
              text={
                "Жора, твои\u00A0тренировки по\u00A0дизайну\u00A0— это\u00A0просто что‑то невероятное! Спасибо большое)"
              }
              name={"Карина Путинцева"}
              role={"Маркетинг-менеджер B2B"}
              photo={karina}
            />
            <ReviewItem
              text={
                "Жора, спасибо за\u00A0организацию тренинга и\u00A0терпение при\u00A0просмотре макетов :)"
              }
              name={"Наталья Донцова"}
              role={"Проджект-менеджер"}
              photo={natalya}
            />
            {isDesktop && (
              <ReviewItem
                text={"Лучшему преподавателю по\u00A0Фигме! Спасибо тебе, ты невероятный!"}
                name={"Юлия Степанова"}
                role={"Администратор"}
                photo={julia}
              />
            )}
            {!isDesktop && (
              <>
                <ReviewItem
                  text={
                    "Жора, спасибо тебе за\u00A0твой педагогический талант) Все\u00A0по\u00A0делу и\u00A0без\u00A0лишней информации. Это\u00A0супер"
                  }
                  name={"Елена Захарова"}
                  role={"Контент-менеджер"}
                  photo={elena}
                />
                <ReviewItem
                  text={
                    "Жора, огромное спасибо за\u00A0наши тренировки! Чувствую себя на\u00A01/100 дизайнером)"
                  }
                  name={"Анна Задворнова"}
                  role={"Руководитель группы корпоративных медиа"}
                  photo={anna}
                />
              </>
            )}
          </div>
          {isDesktop && (
            <div className={styles.review_list}>
              <ReviewItem
                text={
                  "Жора, спасибо тебе за\u00A0твой педагогический талант) Все\u00A0по\u00A0делу и\u00A0без\u00A0лишней информации. Это\u00A0супер"
                }
                name={"Елена Захарова"}
                role={"Контент-менеджер"}
                photo={elena}
              />
              <ReviewItem
                text={
                  "Жора, спасибо за\u00A0крутой курс по\u00A0Фигме! За\u00A0твоё внимание и\u00A0терпение на\u00A0тренировках и\u00A0умение понятно объяснять"
                }
                name={"Татьяна Денисова"}
                role={"Менеджер по\u00A0развитию партнёрских отношений"}
                photo={tatyana}
              />
              <ReviewItem
                text={
                  "Жора, огромное спасибо за\u00A0наши тренировки! Чувствую себя на\u00A01/100 дизайнером)"
                }
                name={"Анна Задворнова"}
                role={"Руководитель группы корпоративных медиа"}
                photo={anna}
              />
            </div>
          )}
        </div>
      </div>
      <SchoolFormSection type={"lesson"}>
        <div className={styles.form_info}>
          <p
            className={`text text_type_${
              isDesktop ? "h3" : isMobile ? "h2" : "accent_l"
            }`}
          >
            Можно бесплатно сходить на&nbsp;пробную тренировку
          </p>
          <p className={`text text_type_${isDesktop ? "accent_xs" : "m"}`}>
            А&nbsp;дальше 18 000&nbsp;₽ в&nbsp;месяц. Занимаемся 3&nbsp;раза
            в&nbsp;неделю с&nbsp;19:00 до&nbsp;20:00 по&nbsp;Москве.&nbsp;
            {!isMobile && <br />}
            Весь&nbsp;курс&nbsp;—&nbsp;3&nbsp;месяца
          </p>
        </div>
      </SchoolFormSection>
      <Footer />
    </>
  );
}

export default SchoolPage;
