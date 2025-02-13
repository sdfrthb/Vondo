import { useMediaQuery } from "react-responsive";
import TextAvatarButton from "../../../../../ui/components/TextAvatarButton/TextAvatarButton";
import teamData from "../../../../../utils/teamData";
import styles from "./Project.module.css";

function Project({ title, tags, loom, index, photo }) {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <div  className={styles.project}>
      <div className={`${styles.left_column}`}>
        <p
          className={`text text_type_${isDesktop ? 's' : 'm'} text_color_primary ${styles.under} spacing`}
        >
          {index + 1}
        </p>
        <p
          className={`text text_type_${isDesktop ? 's' : 'm'} text_color_primary ${styles.texts} spacing`}
        >
          {title}
        </p>
      </div>
      <div className={styles.right_column}>
        <p
          className={`text text_type_${isDesktop ? 's' : 'xs'} text_color_primary ${styles.tags} spacing`}
        >
          {tags}
        </p>
        {loom ? (
          <TextAvatarButton
            type={"small"}
            text={"Смотреть отчет"}
            photo={teamData(photo).photo}
            url={loom}
          />
        ) : (
          <p
            className={`text text_type_s text_color_secondary ${styles.under} spacing`}
          >
            В работе
          </p>
        )}
      </div>
    </div>
  );
}

export default Project;
