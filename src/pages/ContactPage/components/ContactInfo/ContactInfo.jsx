import BriefButton from "../../../../ui/components/BriefButton/BriefButton";
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
            <span>
              Шлюзовая набережная 8с1
              <br />
              (м. Павелецкая)
            </span>
          </p>
          <div className={styles.info_wrapper}>
            <TextButton text={"+7 912 992-53-84"} url={"tel:89129925384"} />
            <TextButton text={"hello@vondo.ru"} url={"mailto:hello@vondo.ru"} />
          </div>
        </div>

        <div className={styles.wrapper}>
          <p className={`text text_type_xs`}>Поддержка проектов</p>
          <p className={`text text_type_m ${styles.column}`}>
            Для срочных вопросов
            <br />
            с 09:00 до 21:00 по Москве
            <br />
            <span>
              +7 (929) 236 27 70
              <br />
              Анна
            </span>
          </p>
        </div>

        <div className={styles.wrapper}>
          <div></div>
          <div>
          <TextIconButton type={'link'} text={'Открыть презентацию'} />
          <TextIconButton type={'link'} text={'Посмотреть шоурил'} />
          </div>
          <BriefButton />
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
