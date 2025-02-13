import React from "react";
import styles from "./NotFound404Page.module.css";
import TextButton from "../../ui/components/TextButton/TextButton";
import { useMediaQuery } from "react-responsive";


function NotFound404Page() {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <h1 className={`text ${styles.error}`}>404</h1>
        <div className={styles.contacts}>
          <TextButton text={"+7 912 992-53-84"} url={"tel:89129925384"} type={"xs"} />
          <TextButton text={"hello@vondo.ru"} url={"mailto:hello@vondo.ru"} type={"xs"}/>
        </div>
      </div>
      <div className={styles.wrapper_btn}>
        {isDesktop ? (
          <p className={`text text_type_accent_s`}>
            что-то
            <br />
            не открылось
          </p>
        ) : (
          <p className={`text text_type_m`}>
            что-то
            <br />
            не открылось
          </p>
        )}

        <a className={`text text_type_m ${styles.link}`} href="/">
          на главную
        </a>
      </div>
    </div>
  );
}

export default NotFound404Page;
