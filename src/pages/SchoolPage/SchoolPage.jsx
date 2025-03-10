import styles from "./SchoolPage.module.css";
import SchoolInfo from "./components/SchoolInfo/SchoolInfo";

function SchoolPage() {
  return (
    <div className={styles.content}>
      <SchoolInfo />
    </div>
  );
}

export default SchoolPage;
