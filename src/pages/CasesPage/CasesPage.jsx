import Case from "../MainPage/components/Case/Case";
import styles from "./CasesPage.module.css";
import img2gis from "../../images/2gis_case-min.png";
import imgBaladi from "../../images/baladi_case-min.png"
import CasesInfo from "./components/CasesInfo/CasesInfo";
import ProjectsList from "./components/ProjectsList/ProjectsList";

function CasesPage() {
  return (
    <div className={styles.content}>
      <CasesInfo />
      <section className={styles.cases}>
        <Case
          type={"horizontal"}
          caseImage={img2gis}
          title={"Сделали дизайн и\u00A0разработали на тильде новый сайт 2ГИС"}
          description={
            "Быстро запустились,\u000Aа\u00A0теперь готовимся\u000Aк\u00A0переезду на\u00A0Next"
          }
          photoList={["Костя", "Егор", "Миша", "Таня", "Алёна"]}
          loomData={"Костя"}
        />
        <Case
          type={"vertical"}
          caseImage={imgBaladi}
          title={
            "1.5 года развиваем\u000ABalady\u00A0- главного\u000Aконкурента Google-карт\u000Aв Саудовской Аравии"
          }
          description={
            "Встроились в продуктовую команду клиента, настроили дизайн-процесс"
          }
          photoList={["Аня", "Миша", "Родион", "Басель", "Дарина"]}
          loomData={"Костя"}
        />
        <Case
          type={"horizontal"}
          caseImage={img2gis}
          title={
            "За 50 дней запустили Экоиндекс,\u000Aсайт-исследование городов России"
          }
          description={"Работали по T&M,\u000Aзакончили раньше\u000Aсрока"}
          photoList={["Миша", "Даша", "Костя", "Таня"]}
          loomData={"Костя"}
        />
        <Case
          type={"horizontal"}
          caseImage={img2gis}
          title={
            "Сделали нейминг и\u00A0логобук для Attiro\u00A0- сервиса по\u00A0подбору одежды"
          }
          description={"Провели несколько итераций по\u00A0запросу клиента"}
          photoList={["Аня", "Миша"]}
          loomData={"Костя"}
        />
        <Case
          type={"vertical"}
          caseImage={imgBaladi}
          title={
            "Провели редизайн Nutrition\u00A0lab\u00A0- приложения для\u00A0контроля\u00A0питания"
          }
          description={
            "Решили UX-проблемы\u000Aи обновили визуал в\u00A0соответствии с новым брендбуком"
          }
          photoList={["Аня", "Арина"]}
          loomData={"Костя"}
        />
      </section>
      <ProjectsList />
    </div>
  );
}

export default CasesPage;
