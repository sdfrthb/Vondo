import styles from './TextButton.module.css'

function TextButton({text, url}) {
  return (
    <a href={url} className={`text text_color_primary text_type_xs ${styles.btn}`}>{text}</a>
   );
}

export default TextButton;
