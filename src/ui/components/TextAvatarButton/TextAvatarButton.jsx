import { useMediaQuery } from "react-responsive";
import styles from "./TextAvatarButton.module.css";

function TextAvatarButton({ text, photo, url, type, team }) {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <>
      {type === "big" ? (
        <a className={`text text_color_primary ${styles.btn} ${styles.btn_big}`} href={url} target="_blank">
          <div
            style={{ backgroundImage: `url(${photo})` }}
            className={`${styles.photo} ${styles.photo_big}`}
          ></div>
          <p className="text spacing">
            <span className={`text text_type_m spacing ${styles.under}`}>
              {text}
            </span>
          </p>
        </a>
      ) : (
        <a className={`text text_color_primary ${styles.btn}`} href={url} target="_blank">
          <div
            style={{ backgroundImage: `url(${photo})` }}
            className={`${styles.photo} ${team ? styles.photo_medium : ""}`}
          ></div>
          {isDesktop ? (
            <p className={`text text_type_m`}>{text}</p>
          ) : (
            <p className={`text spacing ${styles.text}`}>
              <span className={`text text_type_m spacing ${styles.under}`}>
                {text}
              </span>
            </p>
          )}
        </a>
      )}
    </>
  );
}

export default TextAvatarButton;
