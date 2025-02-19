import TextIconButton from "../../../../ui/components/TextIconButton/TextIconButton";
import styles from "./CasesInfo.module.css";

function CasesInfo() {
  return (
    <section className={styles.wrapper}>
      <h1
        className={`text text_type_h2 ${styles.title}`}
      >
        Стремимся к&nbsp;длительным отношениям с&nbsp;каждым клиентом
      </h1>
      <div className={styles.flex_wrapper}>
        <p className={`text text_type_m ${styles.description}`}>
        Часть кейсов в&nbsp;виде статей, для&nbsp;остальных записали видеообзоры
        </p>
        <TextIconButton
          icon={"link"}
          side={"left"}
          text={"Открыть презентацию"}
          url={"/"}
        />
      </div>
    </section>
  );
}

export default CasesInfo;
