import TextIconButton from "../../../../ui/components/TextIconButton/TextIconButton";
import News from "./News/News";
import styles from "./NewsList.module.css";

function NewsList() {
  return (
    <section className={styles.wrapper}>
      <h2 className={`text text_type_h2 ${styles.title}`}>Последние публикации</h2>
      <div className={styles.container}>
        <News
          title={
            "Изменили процесс найма и\u00A0остались в\u00A0плюсе. Пара инсайтов от\u00A0студии Vondo"
          }
          date={`7 марта 2024`}
          url={
            "https://vc.ru/design/1383444-izmenili-process-naima-dizainerov-i-ostalis-v-plyuse-para-insaitov-ot-studii-vondo"
          }
          icon={"vc"}
          authors={["Вася"]}
        />
        <News
          title={"Зачем выстраивать процессы, пока компания маленькая? Опыт дизайн-студии Vondo"}
          date={`19 августа`}
          url={"https://360.yandex.ru/blog/articles/kak-malomu-biznesu-sokratit-risk-putanicy-v-rabote-opyt-dizajn-studii-vondo?utm_source=telegram360&utm_medium=social&utm_campaign=tg_030924"}
          icon={"360"}
          authors={["Вася"]}
        />
        <News
          title={"«Дейлики\u00A0— скучно», — подумали мы\u00A0и\u00A0перешли на\u00A0лумы"}
          date={`21 мая`}
          url={"https://t.me/wevondo/19"}
          icon={"tg"}
          authors={["Миша"]}
        />
        <News
          title={
            "Как\u00A0давать обратную связь"
          }
          date={`24 июня`}
          url={"https://t.me/wevondo/46"}
          icon={"tg"}
          authors={["Аня"]}
        />
        <News
          title={
            "Как\u00A0мы\u00A0делали приложение для\u00A0сенсорного экрана величиной с\u00A0телевизор"
          }
          date={`7 августа`}
          url={"https://t.me/wevondo/101"}
          icon={"tg"}
          authors={["Миша", "Аня"]}
        />
      </div>
      <TextIconButton text={"Читать все"} icon={"arrow up"} side={"left"} url={"/journal"} redirect/>
    </section>
  );
}

export default NewsList;
