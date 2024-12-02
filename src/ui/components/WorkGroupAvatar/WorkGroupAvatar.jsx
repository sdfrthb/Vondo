import styles from './WorkGroupAvatar.module.css'

function WorkGroupAvatar({name, work, photo}) {
  return (
    <div className={styles.avatar}>
      <p className={`text text_type_xs text_color_primary`}>{name}</p>
      <p className={`text text_type_xs text_color_primary ${styles.info}`}>{work}</p>
      <div style={{backgroundImage: `url(${photo})`}} className={styles.photo}> </div>
    </div>
   );
}

export default WorkGroupAvatar;
