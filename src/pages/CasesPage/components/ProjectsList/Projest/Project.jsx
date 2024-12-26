import TextAvatarButton from "../../../../../ui/components/TextAvatarButton/TextAvatarButton";
import teamData from "../../../../../utils/teamData";
import styles from "./Project.module.css";

function Project({ title, tags, loom, index, photo }) {
  return (
    <div  className={styles.project}>
      <div className={`${styles.left_column}`}>
        <p
          className={`text text_type_s text_color_primary ${styles.under} spacing`}
        >
          {index + 1}
        </p>
        <p
          className={`text text_type_s text_color_primary ${styles.texts} spacing`}
        >
          {title}
        </p>
      </div>
      <div className={styles.right_column}>
        <p
          className={`text text_type_s text_color_primary ${styles.tags} spacing`}
        >
          {tags}
        </p>
        {loom ? (
          <TextAvatarButton
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
