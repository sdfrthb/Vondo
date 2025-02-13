import CaseData from "./CaseData/CaseData";
import styles from "./Case.module.css";
import { useMediaQuery } from "react-responsive";
import TextAvatarButton from "../TextAvatarButton/TextAvatarButton";
import teamData from "../../../utils/teamData";

function Case({
  type,
  caseLink,
  caseImage,
  backgroundColor,
  loomData,
  ...props
}) {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <article
      className={
        type === "horizontal" || type === "horizontal_down"
          ? styles.case_hor
          : styles.case_vert
      }
    >
      <div
        style={{ background: backgroundColor }}
        className={
          type === "horizontal" || type === "horizontal_down"
            ? styles.image_hor_bg
            : styles.image_vert_bg
        }
      >
        {caseLink ? (
          <a
            style={{ backgroundImage: `url(${caseImage})` }}
            className={
              type === "horizontal"
                ? styles.image_hor
                : type === "horizontal_down"
                ? styles.image_down
                : styles.image_vert
            }
            href={caseLink}
          />
        ) : (
          <div
            style={{ backgroundImage: `url(${caseImage})` }}
            className={
              type === "horizontal"
                ? styles.image_hor
                : type === "horizontal_down"
                ? styles.image_down
                : styles.image_vert
            }
          />
        )}
      </div>
      <CaseData {...props} loomData={loomData} caseLink={caseLink} />
    </article>
  );
}

export default Case;
