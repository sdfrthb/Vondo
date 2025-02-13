import styles from "./TextButton.module.css";
//TODO: убрать размеры, если на других страницах тоже будут только xs
function TextButton({ text, url, type, invisiblePart }) {
  return (
    <a
      href={url}
      className={`text text_color_primary text_type_${type} ${
        styles[`btn_${type}`]
      }`}
    >
      {text}
      {invisiblePart && (
        <div className={styles.invisible}>
          <p className={`text text_type_xs`}>{invisiblePart}</p>
        </div>
      )}
    </a>
  );
}

export default TextButton;
