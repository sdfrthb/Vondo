import { useMediaQuery } from "react-responsive";
import TextAvatarButton from "../../../../../ui/components/TextAvatarButton/TextAvatarButton";
import styles from "./Project.module.css";

function Project({ title, tags, loom, index}) {
  const isMobile = useMediaQuery({ maxWidth: 480 });
  return (
    <div className={styles.project}>
      <div className={`${styles.left_column}`}>
        <p
          className={`text text_type_xs text_color_primary`}
        >
          №{index + 1}
        </p>
        { !isMobile && <p
          className={`text text_type_s text_color_primary ${styles.texts}`}
        >
          {title}
        </p>}
      </div>
      <div className={styles.right_column}>
        <p
          className={`text text_type_xs text_color_secondary ${styles.tags}`}
        >
          {tags}
        </p>
        { isMobile && <p
          className={`text text_type_m text_color_primary ${styles.texts}`}
        >
          {title}
        </p>}
        {loom && (
          <TextAvatarButton
            text={"Отчет о кейсе"}
            type={"small"}
            url={loom}
          />
        )}
      </div>
    </div>
  );
}

export default Project;
