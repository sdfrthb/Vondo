import React from "react";
import styles from "./Timeline.module.css";

function Timeline({ title, children }) {
  const childrenArray = React.Children.toArray(children);
  return (
    <div className={styles.wrapper}>
      <p className="text text_type_accent_m">{title}</p>
      <div className={styles.timeline}>
        <div className={styles.image}></div>
        <div className={styles.info}>
          <p className="text text_type_s">Начинаем занятие</p>
          {childrenArray[0]}
          <p className="text text_type_s">Переходим к&nbsp;практике</p>
          {childrenArray[1]}
          <p className={`text text_type_s ${styles.result}`}>Готовый макет с&nbsp;закреплённой теорией</p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
