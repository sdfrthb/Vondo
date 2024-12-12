import TextButton from "../../ui/components/TextButton/TextButton";
import AboutWork from "./components/AboutWork/AboutWork";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import ContactPerson from "./components/ContactPerson/ContactPerson";
import styles from "./ContactPage.module.css";

function ContactPage() {
  // ymaps.ready(init);
  return (
    <div className={styles.content}>
      <ContactInfo />
      <section className={styles.map_container}>
        <div className={styles.map}></div>
        <p className={`text text_type_m ${styles.padding}`}>Мы на карте</p>
      </section>
      <AboutWork />
      <section className={styles.persons}>
        <h2 className={`text text_type_h2 ${styles.heading}`}>
          Лица для связи
        </h2>
        <ContactPerson person={"Вася"}>
          <TextButton
            text={"v.vyalkov@vondo.ru"}
            url={"mailto:v.vyalkov@vondo.ru"}
            type={"s"}
          />
          <TextButton
            text={"@vondostudio"}
            url={"https://t.me/vondostudio"}
            type={"s"}
          />
        </ContactPerson>
        <ContactPerson person={"Аня"}>
          <TextButton
            text={"a.lebedeva@vondo.ru"}
            url={"mailto:a.lebedeva@vondo.ru"}
            type={"s"}
          />
          <TextButton
            text={"@lebedeva_vondo"}
            url={"https://t.me/lebedeva_vondo"}
            type={"s"}
          />
        </ContactPerson>
      </section>
    </div>
  );
}

export default ContactPage;
