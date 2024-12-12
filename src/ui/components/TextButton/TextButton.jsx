import styles from "./TextButton.module.css";

function TextButton({ text, url, type }) {
  return (
    <>
      {type==='s' ? (
        <a
          href={url}
          className={`text text_color_primary text_type_s ${styles.btn_s}`}
        >
          {text}
        </a>
      ) : (
        <a
          href={url}
          className={`text text_color_primary text_type_xs ${styles.btn}`}
        >
          {text}
        </a>
      )}
    </>
  );
}

export default TextButton;
