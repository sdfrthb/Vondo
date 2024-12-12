import BriefButton from "../../../../ui/components/BriefButton/BriefButton";
import ShowreelButton from "../../../../ui/components/ShowreelButton/ShowreelButton";
import TextButton from "../../../../ui/components/TextButton/TextButton";
import TextIconButton from "../../../../ui/components/TextIconButton/TextIconButton";
import WorkHoursStatus from "../../../../utils/WorkHoursStatus";
import styles from "./ContactInfo.module.css";

function ContactInfo() {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={`text text_type_h1`}>Контакты</h1>
        <WorkHoursStatus />
      </div>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <p className={`text text_type_xs`}>Офис</p>
          <p className={`text text_type_m ${styles.column}`}>
            Мы – распределенная команда, но с нами можно встретиться
            <br />
            <a
              target="_blank"
              href="https://yandex.ru/maps/213/moscow/house/shlyuzovaya_naberezhnaya_8s1/Z04YcANnTEMAQFtvfXtycXhqZg==/?ll=37.651921%2C55.729760&z=15.87"
              className={styles.link}
            >
              Шлюзовая набережная 8с1
              <br />
              (м. Павелецкая)
            </a>
          </p>
          <div className={styles.info_wrapper}>
            <TextButton
              text={"+7 912 992-53-84"}
              url={"tel:89129925384"}
              type={"m"}
            />
            <TextButton
              text={"hello@vondo.ru"}
              url={"mailto:hello@vondo.ru"}
              type={"m"}
            />
          </div>
        </div>

        <div className={styles.wrapper}>
          <p className={`text text_type_xs`}>Поддержка проектов</p>
          <div className={styles.column}>
            <p className={`text text_type_m`}>
              Для срочных вопросов
              <br />с 09:00 до 21:00 по Москве
            </p>
            <a
              href="tel:89292362770"
              className={`${styles.link} ${styles.gap} text text text_type_m`}
            >
              +7 (929) 236 27 70
            </a>
            <p className={`text text_type_m`}>Анна</p>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div></div>
          <div>
            <TextIconButton
              type={"link"}
              text={"Открыть презентацию"}
              invisiblePart={"PDF"}
            />
            <ShowreelButton />
          </div>
          <BriefButton />
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
