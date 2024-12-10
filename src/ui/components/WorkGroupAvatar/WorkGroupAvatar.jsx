import teamData from '../../../utils/teamData';
import styles from './WorkGroupAvatar.module.css'

function WorkGroupAvatar({person}) {
  const {name, projectRole, photo} = teamData(person)
  return (
    <div className={styles.avatar}>
      <div style={{backgroundImage: `url(${photo})`}} className={styles.photo}> </div>
      <div className={styles.invisible}>
      <p className={`text text_type_xs text_color_primary ${styles.info}`}>{projectRole}</p>
      <p className={`text text_type_xs text_color_primary`}>{name}</p>
      </div>
    </div>
   );
}

export default WorkGroupAvatar;
