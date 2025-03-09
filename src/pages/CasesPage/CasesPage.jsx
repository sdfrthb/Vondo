// import Case from "../../ui/components/Case";
import styles from "./CasesPage.module.css";
import CasesInfo from "./components/CasesInfo/CasesInfo";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import Case from "../../ui/components/Case/Case";
import img2gis from "../../images/cases/opkCase-min.png";
import imgBaladi from "../../images/cases/baladyCase-min.png";
import imgEco from "../../images/cases/ecoIndexCase-min.png";
import imgAttiro from "../../images/cases/attiro.png";
import imgLab from "../../images/cases/nutritionCase-min.png";
import imgAdvent from "../../images/cases/adventCase-min.png";

function CasesPage() {
  return (
    <div className={styles.content}>
      <CasesInfo />
      <section className={styles.cases}>
      <Case
          type={"horizontal"}
          caseImage={img2gis}
          backgroundColor={"#1A1A1A"}
          title={
            "Сделали дизайн и\u00A0разработали на\u00A0тильде новый\u00A0сайт 2ГИС"
          }
          description={
            "Быстро запустились, а\u00A0теперь готовимся к\u00A0переезду на\u00A0Next"
          }
          photoList={["Костя","Миша", "Егор", "Таня", "Алёна"]}
          number={19}
        />
        <Case
          type={"vertical"}
          caseImage={imgBaladi}
          backgroundColor={
            "linear-gradient(214deg, #1E928F 3.62%, #0B4D4C 95.55%), #1E928F"
          }
          title={
            "1.5\u00A0года развиваем Balady\u00A0— главного конкурента Google-карт в\u00A0Саудовской Аравии"
          }
          description={
            "Встроились в\u00A0продуктовую команду клиента, настроили дизайн-процесс"
          }
          photoList={["Аня", "Миша", "Саша", "Мелисса"]}
          number={18}
        />
        <Case
          type={"horizontal"}
          caseImage={imgEco}
          backgroundColor={
            "linear-gradient(180deg, #19AA1E 0%, #0E8712 100%), var(--bg-accent-primary, #1A1A1A)"
          }
          title={
            "За\u00A050\u00A0дней запустили Экоиндекс\u00A0— сайт\u2011исследование городов России"
          }
          description={"Работали по\u00A0T&M, закончили раньше срока"}
          photoList={["Таня","Костя", "Даша"]}
          number={13}
        />
        <Case
          type={"vertical"}
          caseImage={imgAdvent}
          backgroundColor={
            "linear-gradient(0deg, #FFB500 0%, #FFB500 100%), linear-gradient(0deg, #9BC19E 0%, #9BC19E 100%), linear-gradient(0deg, #A0C5A3 0%, #A0C5A3 100%), linear-gradient(213deg, #83D289 14.3%, #5A8E77 103.82%), linear-gradient(213deg, #97CC99 14.3%, #579A6A 103.82%), linear-gradient(214deg, #1E928F 3.62%, #0B4D4C 95.55%), #1E928F"
          }
          title={
            "Запустили адвент-календарь для 2GIS, поучаствовали 350,000 пользователей"
          }
          description={
            "Сделали дизайн и разработали на\u00A0React за 45 дней"
          }
          photoList={["Костя", "Миша", "Саша", "Миша Давыдов"]}
          number={16}
        />
        <Case
          type={"horizontal_down"}
          caseImage={imgAttiro}
          backgroundColor={
            "linear-gradient(0deg, #A0C5B2 0%, #A0C5B2 100%), linear-gradient(180deg, #19AA1E 0%, #0E8712 100%)"
          }
          title={
            "Сделали нейминг и\u00A0логобук для\u00A0Attiro\u00A0— сервиса по\u00A0подбору одежды"
          }
          description={"Провели несколько итераций по\u00A0запросу клиента"}
          photoList={["Арина", "Вася"]}
          number={12}
        />
        <Case
          type={"vertical"}
          caseImage={imgLab}
          backgroundColor={
            "linear-gradient(0deg, #E1E1E1 0%, #E1E1E1 100%), linear-gradient(213deg, #279464 14.3%, #014527 103.82%), linear-gradient(214deg, #1E928F 3.62%, #0B4D4C 95.55%), #1E928F"
          }
          title={
            "Провели редизайн Nutrition lab\u00A0— приложения для\u00A0контроля питания"
          }
          description={
            "Решили UX-проблемы и обновили визуал в\u00A0соответствии с новым брендбуком"
          }
          photoList={["Аня","Миша", "Арина",  "Вася"]}
          number={5}
        />
      </section>
      <ProjectsList />
    </div>
  );
}

export default CasesPage;
