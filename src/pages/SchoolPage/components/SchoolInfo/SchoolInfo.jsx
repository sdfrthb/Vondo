import styles from "./SchoolInfo.module.css"

function SchoolInfo() {
  return ( <div className={styles.wrapper}>
    <div className={styles.schedule_wrapper}>
      <h1 className="text text_type_h2">Проводим дизайн-тренировки в&nbsp;мини-группах по&nbsp;вечерам</h1>
      <div className={styles.schedule_info}>
        <div className={styles.left_column}>
          <p className="text text_type_accent_s">Cобираем вместе до&nbsp;6&nbsp;дизайнеров. Созваниваемся в&nbsp;зуме и&nbsp;заходим в&nbsp;фигму</p>
          <div className={styles.tabloid_wrapper}>
            <div className={styles.tabloid}>
              <p className="text text_type_h3">12</p>
              <p className="text text_type_m">тренировок провели</p>
            </div>
            <div className={styles.tabloid}>
              <p className="text text_type_h3">20</p>
              <p className="text text_type_m">дизайнеров посетили</p>
            </div>
          </div>
        </div>
        <div className={styles.right_column}>
          <div className={styles.card}>
            <p className="text text_type_accent_s">пн, ср, пт</p>
            <p className="text text_type_s">Дни проведения</p>
          </div>
          <div className={styles.card}>
            <p className="text text_type_accent_s">19:00–20:00</p>
            <p className="text text_type_s">Время по Москве</p>
          </div>
          <div className={styles.card}>
            <p className="text text_type_accent_s">3 месяца</p>
            <p className="text text_type_s">Продолжительность</p>
          </div>
          <div className={styles.card}>
            <p className="text text_type_accent_s">36 модулей</p>
            <p className="text text_type_s">Объём</p>
          </div>
        </div>
      </div>
    </div>

  </div> );
}

export default SchoolInfo;
