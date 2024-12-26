import CaseData from "./CaseData/CaseData";
import styles from "./Case.module.css";
import LoomVideo from "../LoomVideo/LoomVideo";
import TextAvatarButton from "../../../../ui/components/TextAvatarButton/TextAvatarButton";
import { useMediaQuery } from "react-responsive";
import teamData from "../../../../utils/teamData";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../services/slices/modalSlice";
import { useCallback, useEffect, useRef, useState } from "react";

function Case({ type, caseImage, loomData, ...props }) {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const dispatch = useDispatch();
  const onOpenVideo = () => {
    dispatch(openModal("video"));
  };
  const ref = useRef();
  const [imagePos, setImagePos] = useState({ x: 0, y: 0, display: 'none' });

  const handlerMoveMouse = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect();
    console.log(e.x - rect.x)
    if (ref.current.className.includes('vert')) {
      if (e.x - rect.x > 360) {
        setImagePos({ x: (e.x - rect.x - 80 ) * 0.0694, y: (e.y - rect.y + 20) * 0.0694, display: 'block'});
      }
      else {
        setImagePos({ x: (e.x - rect.x + 280) * 0.0694, y: (e.y - rect.y + 20) * 0.0694, display: 'block'});
      }
    }
    else {
      if (e.x - rect.x < 336) {
        setImagePos({ x: (e.x - rect.x ) * 0.0694, y: (e.y - rect.y + 20) * 0.0694, display: 'block'});
      }
      else {
        setImagePos({ x: (e.x - rect.x - 366) * 0.0694, y: (e.y - rect.y + 20) * 0.0694, display: 'block'});
      }
    }


  }, []);

  const handlerOutMouse = useCallback(() => {
    setImagePos({ x: 0, y: 0, display: 'none'});
  }, []);

  useEffect(() => {
    const _ref = ref.current;
    _ref.addEventListener("mousemove", handlerMoveMouse);
    _ref.addEventListener("mouseout", handlerOutMouse);
    return () => {
      _ref.removeEventListener("mousemove", handlerMoveMouse);
      _ref.removeEventListener("mouseout", handlerOutMouse);

    };
  }, [handlerMoveMouse, handlerOutMouse]);

  return (
    <article
      className={type === "horizontal" ? styles.case_hor : styles.case_vert}
    >
      <div
        ref={ref}
        style={{ backgroundImage: `url(${caseImage})` }}
        className={type === "horizontal" ? styles.image_hor : styles.image_vert}
      />
      {isDesktop && (
        <p
          className={`${styles.hint} text text_type_xs text_color_accent`}
          style={{ left: `${imagePos.x}vw`, top: `${imagePos.y}vw`, display: imagePos.display }}
        >
          Кейс в разработке, но уже очень скоро будет здесь
        </p>
      )}
      <CaseData {...props} onOpenVideo={onOpenVideo} loomData={loomData} />
      {!isDesktop && (
        <TextAvatarButton
          text={"Отчет о кейсе"}
          photo={teamData(loomData).photo}
          onClick={onOpenVideo}
        />
      )}
    </article>
  );
}

export default Case;
