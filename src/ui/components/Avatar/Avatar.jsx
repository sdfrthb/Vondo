import { useMediaQuery } from "react-responsive";
import teamData from "../../../utils/teamData";
import styles from "./Avatar.module.css";
import { useEffect, useRef } from "react";

function Avatar({
  person,
  size_l,
  size_m,
  size_s,
  invisible,
  optionalData,
  index
}) {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });
  const size = isDesktop
    ? (size_l * 100) / 1440
    : isTablet
    ? (size_m * 100) / 768
    : (size_s * 100) / 375;
  const { name, projectRole, photo } = teamData(person);

  const myDivRef = useRef(null); // Используем useRef для получения ссылки на элемент

  // function updatePosition() {
  //   if ( isTablet && index && myDivRef.current) { // Проверяем, что элемент существует
  //     if (myDivRef.current.offsetWidth > 112) {
  //       myDivRef.current.style.left = '-6.5101vw';
  //       myDivRef.current.style.transform = 'translate(0, -50%)';
  //     }
  //   }
  //   else if (!isDesktop && index && myDivRef.current) {
  //     if (myDivRef.current.offsetWidth > 112) {
  //       myDivRef.current.style.left = '-10.667vw';
  //       myDivRef.current.style.transform = 'translate(0, -50%)';
  //       myDivRef.current.classList.add(styles.move)
  //     }
  //   }
  // }
    useEffect(() => {
      function updatePosition() {
        if ( isTablet && index && myDivRef.current) { // Проверяем, что элемент существует
          if (myDivRef.current.offsetWidth > 112) {
            myDivRef.current.style.left = '-6.5101vw';
            myDivRef.current.style.transform = 'translate(0, -50%)';
          }
        }
        else if (!isDesktop && index && myDivRef.current) {
          if (myDivRef.current.offsetWidth > 112) {
            myDivRef.current.style.left = '-10.667vw';
            myDivRef.current.style.transform = 'translate(0, -50%)';
            myDivRef.current.classList.add(styles.move)
          }
        }
      }
      updatePosition(); // Вызываем функцию при монтировании компонента
      window.addEventListener('resize', updatePosition); // Добавляем обработчик события resize

      return () => {
        window.removeEventListener('resize', updatePosition); // Убираем обработчик при размонтировании
      };
    }, [index, isDesktop, isTablet]);
  return (
    <div className={styles.avatar}>
      <div
        style={{
          backgroundImage: `url(${photo})`,
          width: `${size}vw`,
          height: `${size}vw`,
        }}
        className={styles.photo}
      ></div>
      {invisible && (
        <div ref={myDivRef} className={`${styles.invisible} ${!optionalData ? styles.invisible_small : ''}`}>
          <p className={`text text_type_s text_color_accent`}>{name}</p>
          {optionalData && (
            <p
              className={`text text_type_xs text_color_secondary_accent`}
            >
              {projectRole}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Avatar;
