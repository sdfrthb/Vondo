import { useMediaQuery } from "react-responsive";
import TextButton from "../../../../ui/components/TextButton/TextButton";
import WorkHoursStatus from "../../../../utils/WorkHoursStatus";
import styles from "./ContactInfo.module.css";
import Avatar from "../../../../ui/components/Avatar/Avatar";

function ContactInfo() {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <section className={styles.container}>
      <div className={styles.title_wrapper}>
        <h1 className={`text text_type_h1`}>Контакты</h1>
        <WorkHoursStatus />
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          {!isMobile && <p className={`text text_type_xs`}>По&nbsp;любым вопросам</p>}
          <div className={styles.info_wrapper}>
            <TextButton
              text={"+7 929 236-27-70"}
              url={"tel:89292362770"}
              type={isMobile ? "xs" : "m"}
            />
            <TextButton
              text={"hello@vondo.ru"}
              url={"mailto:hello@vondo.ru"}
              type={isMobile ? "xs" : "m"}
            />
          </div>
          <div className={styles.buttons}>
            {/* <TextIconButton
              text={"Заполнить бриф"}
              invisiblePart={"Займет 2 минуты"}
              icon={"arrow up"}
              side={!isMobile ? "left" : "null"}
              redirect
              url={"/"}
            />
            <TextIconButton
              text={"Открыть презентацию"}
              invisiblePart={"PDF"}
              icon={"link"}
              side={!isMobile ? "left" : "null"}
              url={"/"}
            /> */}
          </div>
        </div>

        <div className={styles.wrapper}>
          <p className={`text text_type_xs`}>Поддержка проектов</p>
          <div className={styles.column}>
            <p className={`text text_type_m`}>
              На&nbsp;связи&nbsp;каждый&nbsp;день <br />
              с&nbsp;09:00&nbsp;до&nbsp;21:00&nbsp;по&nbsp;Москве
            </p>
            <div className={styles.avatar_data}>
              <Avatar person={"Аня"} size_l={54} size_m={44} size_s={44}/>
              <div className={styles.data}>
                <TextButton
                  text={"+7 929 236-27-70"}
                  url={"tel:89292362770"}
                  type={"m"}
                />
                <p className={`text text_type_m`}>Анна</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <p className={`text text_type_xs`}>Место встреч</p>
          <p className={`text text_type_m ${styles.column_adress}`}>
            Мы&nbsp;— распределённая команда, но&nbsp;с&nbsp;нами можно
            встретиться в&nbsp;Москве. Обычно мы&nbsp;делаем
            это&nbsp;по&nbsp;адресу:
            <a
              href="https://yandex.ru/maps/-/CHueqNof"
              target="_blank"
              rel="noreferrer"
              className={`${styles.link} text text text_type_m`}
            >
              ул. Большая Садовая, д. 5к
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
