import TextAvatarButton from "../../../../../ui/components/TextAvatarButton/TextAvatarButton";
import teamData from "../../../../../utils/teamData";
import styles from "./TeamTabs.module.css";

function TeamTabs({ person }) {
  const { fullname, fullRole, photo, fullPhoto } = teamData(person);

  return (
    <div className={styles.card}>
      <div
        className={styles.photo}
        style={{ backgroundImage: `url(${fullPhoto})` }}
      ></div>
      <div className={styles.data}>
        <div className={styles.info}>
          <p className={`text text_type_m`}>{fullname}</p>
          <p className={`text text_type_accent_m`}>{fullRole}</p>
        </div>
          <TextAvatarButton
            text={"Посмотреть видео-визитку"}
            photo={photo}
            team
            url={"https://www.loom.com/share/fbaae457328b4773ac0547e3aef117d1"}
          />
      </div>
    </div>
  );
}

export default TeamTabs;
