// import Case from "../../ui/components/Case";
import styles from "./CasesPage.module.css";
import CasesInfo from "./components/CasesInfo/CasesInfo";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import Case from "../../ui/components/Case/Case";
import img2gis from "../../images/opkCase-min.png";
import imgBaladi from "../../images/baladyCase-min.png";
import imgEco from "../../images/ecoIndexCase-min.png";
import imgAttiro from "../../images/attiroCase-min.png";
import imgLab from "../../images/nutritionCase-min.png";

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
        >
          <div className={styles.case_statistic}>
            <p className="text text_type_accent_s">+10%</p>
            <p className="text text_type_accent_s">2</p>
            <p className="text text_type_s">
              увеличили доход <br /> клиента от корзины
            </p>
            <p className="text text_type_s">года вместе</p>
          </div>
        </Case>
        <Case
          type={"vertical"}
          caseImage={imgBaladi}
          title={
            "1.5 года развиваем\u000ABalady\u00A0- главного\u000Aконкурента Google-карт\u000Aв Саудовской Аравии"
          }
          description={
            "Встроились в продуктовую команду клиента, настроили дизайн-процесс"
          }
          photoList={["Аня", "Миша", "Саша", "Мелисса"]}
        >
          <div className={styles.case_statistic}>
            <p className="text text_type_accent_s">+10%</p>
            <p className="text text_type_accent_s">2</p>
            <p className="text text_type_s">
              увеличили доход <br /> клиента от корзины
            </p>
            <p className="text text_type_s">года вместе</p>
          </div>
        </Case>
        <Case
          type={"horizontal"}
          caseImage={imgEco}
          title={
            "За 50 дней запустили Экоиндекс,\u000Aсайт-исследование городов России"
          }
          description={"Работали по T&M,\u000Aзакончили раньше\u000Aсрока"}
          photoList={["Миша", "Даша", "Костя", "Таня"]}
        >
          <div className={styles.case_statistic}>
            <p className="text text_type_accent_s">3-й</p>
            <p className="text text_type_accent_s">2</p>
            <p className="text text_type_s">
              проект <br /> клиента
            </p>
            <p className="text text_type_s">года вместе</p>
          </div>
        </Case>
        <Case
          type={"vertical"}
          caseImage={imgLab}
          title={
            "Провели редизайн Nutrition\u00A0lab\u00A0- приложения для\u00A0контроля\u00A0питания"
          }
          description={
            "Решили UX-проблемы\u000Aи обновили визуал в\u00A0соответствии с новым брендбуком"
          }
          photoList={["Аня", "Арина"]}
        >
          <div className={styles.case_statistic}>
            <p className="text text_type_accent_s">+10%</p>
            <p className="text text_type_accent_s">2</p>
            <p className="text text_type_s">
              увеличили доход <br /> клиента от корзины
            </p>
            <p className="text text_type_s">года вместе</p>
          </div>
        </Case>
        <Case
          type={"horizontal"}
          caseImage={imgAttiro}
          title={
            "Сделали нейминг и\u00A0логобук для Attiro\u00A0- сервиса по\u00A0подбору одежды"
          }
          description={"Провели несколько итераций по\u00A0запросу клиента"}
          photoList={["Аня", "Миша"]}
        >
          <div className={styles.case_statistic}>
            <p className="text text_type_accent_s">+10%</p>
            <p className="text text_type_accent_s">2</p>
            <p className="text text_type_s">
              увеличили доход <br /> клиента от корзины
            </p>
            <p className="text text_type_s">года вместе</p>
          </div>
        </Case>
      </section>
      <ProjectsList />
    </div>
  );
}

export default CasesPage;
