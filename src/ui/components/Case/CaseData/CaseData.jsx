import React from "react";
import TextAvatarButton from "../../TextAvatarButton/TextAvatarButton";
import teamData from "../../../../utils/teamData";
import styles from "./CaseData.module.css";
import { useMediaQuery } from "react-responsive";
import Avatar from "../../Avatar/Avatar";

function CaseData({
  title,
  description,
  photoList,
  loomData,
  caseLink,
  children,
}) {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.avatars}>
          {photoList.map((name, index) => (
            <React.Fragment key={name}>
              <Avatar
                person={name}
                size_l={54}
                size_m={44}
                size_s={34}
                invisible={true}
                optionalData
                index={index === 1 && !isDesktop ? true : false}
              />
            </React.Fragment>
          ))}
        </div>
        {caseLink ? (
          <a
            className={`text text_type_accent_m text_color_primary spacing ${styles.title}`}
            href={caseLink}
          >
            {title}
          </a>
        ) : (
          <h3
            className={`text text_type_accent_m text_color_primary spacing ${styles.title}`}
          >
            {title}
          </h3>
        )}

        {loomData &&
          (caseLink ? (
            <a
              className={`text text_type_s text_color_primary ${styles.description}`}
              href={caseLink}
            >
              {description}
            </a>
          ) : (
            <p
              className={`text text_type_s text_color_primary ${styles.description}`}
            >
              {description}
            </p>
          ))}
      </div>
      {loomData && (
        <TextAvatarButton
          text={"Отчет о кейсе"}
          photo={teamData(loomData).photo}
          url={"https://www.loom.com/share/fbaae457328b4773ac0547e3aef117d1"}
        />
      )}
      {children}
    </div>
  );
}

export default CaseData;
