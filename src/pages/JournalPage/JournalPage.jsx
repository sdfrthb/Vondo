import TextIconButton from "../../ui/components/TextIconButton/TextIconButton";
import News from "../MainPage/components/NewsList/News/News";
import styles from "./JournalPage.module.css"
function JournalPage() {
  return (
  <div className={styles.content}>
    <div className={styles.info}>
      <h1 className="text text_type_h2">Пишем статьи, записываем ролики и&nbsp;выступаем на&nbsp;конференциях. Все&nbsp;ссылки&nbsp;здесь</h1>
      <div className={styles.btn_wrapper}>
        <TextIconButton icon={"arrow up"} url={"https://t.me/wevondo"} side={"left"} text={"Telegram"} />
        <TextIconButton icon={"arrow up"} url={"https://vk.com/wevondo"} side={"left"} text={"Вконтакте"} />
        <TextIconButton icon={"arrow up"} url={"https://vc.ru/u/3757624-studiya-vondo"} side={"left"} text={"VC"} />
      </div>
    </div>
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
  </div> );
}

export default JournalPage;
