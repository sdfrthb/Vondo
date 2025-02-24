import TextButton from "../../ui/components/TextButton/TextButton";
import AboutWork from "./components/AboutWork/AboutWork";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import ContactPerson from "./components/ContactPerson/ContactPerson";
import styles from "./ContactPage.module.css";
import placemark from "../../images/maplogo.svg";
import { useMediaQuery } from "react-responsive";
import  { YMaps, Map, Placemark } from "@r3flector/react-yandex-maps";

function ContactPage() {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return (
    <div className={styles.content}>
      <ContactInfo />
      <section className={styles.map}>
        <YMaps query={{ apikey: "19a524a0-17ff-4ab0-97c2-b36960de264c" }}>
          <Map
            defaultState={{ center: [55.768481, 37.592231], zoom: 16.5 }}
            width={"100%"}
            height={"100%"}>
            <Placemark
              geometry={[55.768481, 37.592231]}
              options={{
                iconImageHref: placemark,
                iconImageSize: [30, 42],
                iconLayout: "default#image",
              }}
            />
            </Map>
        </YMaps>
      </section>
      <AboutWork />
      <section className={styles.persons}>
        <p className={`text text_type_xs`}>Лица для связи</p>
        <div className={styles.persons_wrapper}>
          <ContactPerson person={"Вася"}>
            <TextButton
              text={"v.vyalkov@vondo.ru"}
              url={"mailto:v.vyalkov@vondo.ru"}
              type={isMobile ? "xs" : "m"}
            />
            <TextButton
              text={"@vondostudio"}
              url={"https://t.me/vondostudio"}
              type={isMobile ? "xs" : "m"}
            />
          </ContactPerson>
          <ContactPerson person={"Аня"}>
            <TextButton
              text={"a.lebedeva@vondo.ru"}
              url={"mailto:a.lebedeva@vondo.ru"}
              type={isMobile ? "xs" : "m"}
            />
            <TextButton
              text={"@lebedeva_vondo"}
              url={"https://t.me/lebedeva_vondo"}
              type={isMobile ? "xs" : "m"}
            />
          </ContactPerson>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
