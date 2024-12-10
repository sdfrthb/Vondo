import TextButton from "../../../../ui/components/TextButton/TextButton";
import styles from "./ContactInfo.module.css";

function ContactInfo() {
  return (
      <>
      <div className={styles.container}>
        <h1 className={`text text_type_h1`}>Контакты</h1>
        <p>Работаем, у нас 16:39</p>
    </div>
    <div className={styles.wrapper}>
        <p className={`text text_type_xs`}>Офис</p>
        <p className={`text text_type_m ${styles.column}`}>
          Мы – распределенная команда, но с нами можно встретиться
          <br />
          <span>Шлюзовая набережная 8с1
            <br />
            (м. Павелецкая)</span>
        </p>
        </div>
        <div className={styles.info_wrapper}>
          <TextButton text={"+7 912 992-53-84"} url={"tel:89129925384"} />
          <TextButton text={"hello@vondo.ru"} url={"mailto:hello@vondo.ru"} />
        </div>

        <div className={styles.wrapper}>
          <p className={`text text_type_xs`}>Поддержка проектов</p>
          <p className={`text text_type_m ${styles.column}`}>
            Для срочных вопросов
            <br />
            <span>Шлюзовая набережная 8с1
              <br />
              (м. Павелецкая)</span>
          </p>

          <div className={styles.info_wrapper}>
            <TextButton text={"+7 912 992-53-84"} url={"tel:89129925384"} />
            <TextButton text={"hello@vondo.ru"} url={"mailto:hello@vondo.ru"} />
          </div>

        </div>
        </>
        );
        }

        export default ContactInfo;
