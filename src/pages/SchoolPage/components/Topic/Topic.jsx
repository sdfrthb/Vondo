import React from "react";
import styles from "./Topic.module.css";

function Topic({title, themes, example}) {
  return (
    <div className={styles.topic}>
      <p className="text text_type_accent_s">{title}</p>
      <ul className={`${styles.themes} ${styles.offset}`}>
      {themes.map((theme, index) => (
            <React.Fragment key={index}>
              <li className={`text text_type_s`}>{theme}</li>
            </React.Fragment>
          ))}
      </ul>
      <p className={`text text_type_s ${styles.offset}`}>{example}</p>
    </div>
  );
}

export default Topic;
