import { useMediaQuery } from 'react-responsive';
import styles from './RateButton.module.css'

function RateButton() {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  return (
    <a href="#form" id='block-to-hide' className={`${styles.btn}`}>
      <div className={styles.photo}></div>
      <p className={`text ${isDesktop ? 'text_type_xs' : 'texy_type_s'} text_color_accent ${styles.content}`}>Оценить проект</p>
    </a>
   );
}

export default RateButton;
