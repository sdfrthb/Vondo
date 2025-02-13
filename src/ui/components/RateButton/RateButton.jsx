import { useMediaQuery } from 'react-responsive';
import styles from './RateButton.module.css'
import { useEffect } from 'react';

function RateButton() {
  const isDesktop = useMediaQuery({ minWidth: 1440 });

  useEffect(() => {
    const handleScroll = function () {
      const anchor = document.getElementById("form");
      const blockToHide = document.getElementById("block-to-hide");
      if (blockToHide) {
        if (window.scrollY > anchor.offsetTop - 840) {
          blockToHide.setAttribute("style", "display:none;");
        } else {
          blockToHide.setAttribute("style", "display:flex;");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Удаление обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  const handleClick = (e) => {
      e.preventDefault();
    const targetElement = document.querySelector("#form");
    if (targetElement)  {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    }


  return (
    <a href="#form" onClick={handleClick} id='block-to-hide' className={`${styles.btn}`}>
      <div className={styles.photo}></div>
      <p className={`text ${isDesktop ? 'text_type_xs' : 'texy_type_s'} text_color_accent ${styles.content}`}>Оценить проект</p>
    </a>
   );
}

export default RateButton;
