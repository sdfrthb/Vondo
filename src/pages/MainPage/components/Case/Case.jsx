import CaseData from "./CaseData/CaseData";
import styles from './Case.module.css'
import LoomVideo from "../LoomVideo/LoomVideo";
import TextAvatarButton from "../../../../ui/components/TextAvatarButton/TextAvatarButton";
import { useMediaQuery } from "react-responsive";
import teamData from "../../../../utils/teamData";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../services/slices/modalSlice";


function Case({type,caseImage, loomData, ...props}) {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const dispatch = useDispatch();
  const onOpenVideo = () => {
    dispatch(openModal("video"));
  };
  return (
    <article className={type==="horizontal" ? styles.case_hor : styles.case_vert}>
      <img src={caseImage} className={type==="horizontal" ? styles.image_hor : styles.image_vert} />
      <CaseData {...props} onOpenVideo={onOpenVideo} loomData={loomData} />
      {!isDesktop && <TextAvatarButton
        text={"Отчет о кейсе"}
        photo={teamData(loomData).photo}
        onClick={onOpenVideo}
      />}
    </article>

   );
}

export default Case;
