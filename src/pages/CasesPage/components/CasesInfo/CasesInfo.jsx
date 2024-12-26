import TextIconButton from "../../../../ui/components/TextIconButton/TextIconButton";
import styles from './CasesInfo.module.css'

function CasesInfo() {
  return (
    <section className={styles.wrapper}>
      <h1 className={`text text_type_h2 ${styles.title}`}>Гордимся длительными отношениями, не гонимся за разовыми проектами</h1>
      <div className={styles.flex_wrapper}>
        <p className={`text text_type_m ${styles.description}`}>Часть кейсов в виде статей.  Для остальных записали видеообзоры</p>
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
