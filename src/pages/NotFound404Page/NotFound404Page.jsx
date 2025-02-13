import React from "react";
import styles from "./NotFound404Page.module.css";
import TextButton from "../../ui/components/TextButton/TextButton";
import { useMediaQuery } from "react-responsive";
import TextIconButton from "../../ui/components/TextIconButton/TextIconButton";

function NotFound404Page() {

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.titles}>
          <h1 className={`text text_type_h1`}>404</h1>
          <p className={`text text_type_accent_s`}>Что‑то не открылось</p>
        </div>
        <div className={styles.contacts}>
          <TextButton
            text={"+7 929 236 27 70"}
            url={"tel:89292362770"}
            type={"s"}
          />
          <TextButton
            text={"hello@vondo.ru"}
            url={"mailto:hello@vondo.ru"}
            type={"s"}
          />
        </div>
      </div>
      <div className={styles.wrapper_btn}>
        <TextIconButton
          icon={"arrow up"}
          redirect
          text={"Вернуться на главную"}
          url={"/"}
          side={"left"}
        />
      </div>
    </div>
  );
}

export default NotFound404Page;
