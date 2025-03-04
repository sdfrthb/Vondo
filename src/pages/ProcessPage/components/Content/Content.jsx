import styles from "./Content.module.css"

function Content({title, description, children}) {
  return ( <div className={styles.content}>
    <p className={`text text_type_accent_s ${styles.title}`}>{title}</p>
    <p className={`text text_type_s ${styles.description}`}>{description}</p>
    {children}
  </div> );
}

export default Content;
