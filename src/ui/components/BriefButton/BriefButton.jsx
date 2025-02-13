import styles from './BriefButton.module.css'

function BriefButton() {
  return (
    <a href="/" className={styles.link}>
      <p className={`text text_type_m ${styles.text}`}>
        Заполнить бриф
      </p>
      <div className={styles.invisible}>
        <p className={`text text_type_xs`}>
        займет 2 минуты
        </p>
      </div>
    </a>
  );
}

export default BriefButton;
