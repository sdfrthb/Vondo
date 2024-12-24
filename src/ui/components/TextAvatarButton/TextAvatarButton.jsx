import { useMediaQuery } from "react-responsive";
import styles from "./TextAvatarButton.module.css";

function TextAvatarButton({ text, photo, onClick, type, team }) {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <>
      {type === "big" ? (
        <button className={`${styles.btn} ${styles.btn_big}`} onClick={onClick}>
          <div
            style={{ backgroundImage: `url(${photo})` }}
            className={`${styles.photo} ${styles.photo_big}`}
          ></div>
          <p className="text spacing">
            <span className={`text text_type_m spacing ${styles.under}`}>
              {text}
            </span>
          </p>
        </button>
      ) : (
        <button className={styles.btn} onClick={onClick}>
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
        </button>
      )}
    </>
  );
}

export default TextAvatarButton;
