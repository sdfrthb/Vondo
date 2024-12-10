import styles from './RateButton.module.css'

function RateButton() {
  return (
    <a href="#form" id='block-to-hide' className={`${styles.btn}`}>
      <div className={styles.photo}></div>
      <p className={`text text_type_xs text_color_accent ${styles.content}`}>Оценить проект</p>
    </a>
   );
}

export default RateButton;
