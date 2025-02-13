import { useMediaQuery } from "react-responsive";
import TextIconButton from "../../../../ui/components/TextIconButton/TextIconButton";
import styles from "./CasesInfo.module.css";

function CasesInfo() {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <section className={styles.wrapper}>
      <h1
        className={`text text_type_${isDesktop ? "h2" : "h1"} ${styles.title}`}
      >
        Гордимся длительными отношениями, не гонимся за разовыми проектами
      </h1>
      <div className={styles.flex_wrapper}>
        <p className={`text text_type_m ${styles.description}`}>
          Часть кейсов в виде статей. Для остальных записали видеообзоры
        </p>
        <TextIconButton
          type={"link"}
          text={"Открыть презентацию"}
          invisiblePart={"PDF"}
        />
      </div>
    </section>
  );
}

export default CasesInfo;
