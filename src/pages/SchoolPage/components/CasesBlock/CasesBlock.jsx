import styles from "./CasesBlock.module.css";
import poster1 from "../../../../images/posters/poster1.png"
import poster2 from "../../../../images/posters/poster2.png"
import poster3 from "../../../../images/posters/poster3.png"
import poster4 from "../../../../images/posters/poster4.png"
import poster5 from "../../../../images/posters/poster5.png"
import poster6 from "../../../../images/posters/poster6.png"
import React, { useCallback, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

function CasesBlock() {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.115,
  });

  const handleIntersection = useCallback(() => {
    if (inView) {
      setIsVisible(true); // Устанавливаем состояние видимости
    }
  }, [inView]);

  React.useEffect(() => {
    handleIntersection(); // Отслеживаем изменение видимости
  }, [handleIntersection]);
  return (
    <div className={styles.wrapper} ref={ref}>
      <p className="text text_type_m">
        После&nbsp;каждого занятия&nbsp;— готовый макет
      </p>
      <div className={styles.columns}>
        <div className={styles.column} style={ isDesktop ? { top: isVisible ? '0px' : '12.5vw' } : {}}>
          <img src={poster1} className={styles.poster} alt=""/>
          <img src={poster2} className={styles.poster} alt=""/>
          <img src={poster3} className={styles.poster} alt=""/>
        </div>
        <div className={`${styles.column} ${styles.column_offset}`} style={ isDesktop ? { top: isVisible ? '0px' : '12.5vw' } : {}}>
        <img src={poster4} className={styles.poster} alt=""/>
        <img src={poster5} className={styles.poster} alt=""/>
        <img src={poster6} className={styles.poster} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default CasesBlock;
