import styles from "./BriefPage.module.css";
import BriefForm from "./components/BriefForm/BriefForm";

function BriefPage() {
  return <div className={styles.content}>
    <div className={styles.info}>
      <h1 className="text text_type_h1">Бриф</h1>
      <p className="text text_type_accent_m">Поможет нам&nbsp;подготовиться к&nbsp;первой встрече</p>
    </div>
    <BriefForm />
  </div>;
}

export default BriefPage;
