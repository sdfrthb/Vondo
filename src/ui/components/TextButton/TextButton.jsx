import styles from "./TextButton.module.css";

function TextButton({ text, url, type, invisiblePart }) {
  return (
    <>
      {type === "s" ? (
        <a
          href={url}
          className={`text text_color_primary text_type_s ${styles.btn_s}`}
        >
          {text}
        </a>
      ) : type === "m" ? (
        <a
          href={url}
          className={`text text_color_primary text_type_m ${styles.btn_m}`}
        >
          {text}
        </a>
      ) : (
        <a
          href={url}
          className={`text text_color_primary text_type_xs ${styles.btn}`}
          target="_blank"
        >
          {text}
          {invisiblePart && <div className={styles.invisible}>
        <p className={`text text_type_xs`}>
        {invisiblePart}
        </p>
      </div> }
        </a>
      )}
    </>
  );
}

export default TextButton;
