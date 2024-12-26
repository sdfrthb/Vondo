import React from "react";
import TextAvatarButton from "../../../../../ui/components/TextAvatarButton/TextAvatarButton";
import WorkGroupAvatar from "../../../../../ui/components/WorkGroupAvatar/WorkGroupAvatar";
import teamData from "../../../../../utils/teamData";
import styles from "./CaseData.module.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../../../../services/slices/modalSlice";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

function CaseData({ title, description, photoList, loomData }) {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const onOpenVideo = () => {
  //   navigate("https://www.loom.com/share/fbaae457328b4773ac0547e3aef117d1");
  // };
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.avatars}>
          {photoList.map((name) => (
            <React.Fragment key={name}>
              <WorkGroupAvatar person={name} invisible={true} />
            </React.Fragment>
          ))}
        </div>
        <h3
          className={`text text_type_accent_m text_color_primary spacing ${styles.title}`}
        >
          {title}
        </h3>
        <p
          className={`text text_type_s text_color_primary ${styles.description}`}
        >
          {description}
        </p>
      </div>
      {isDesktop && <TextAvatarButton
        text={"Отчет о кейсе"}
        photo={teamData(loomData).photo}
        url={'https://www.loom.com/share/fbaae457328b4773ac0547e3aef117d1'}
      />}
    </div>
  );
}

export default CaseData;
