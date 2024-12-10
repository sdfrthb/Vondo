import styles from './Avatar.module.css'

function Avatar({name, role, photo, size}) {
  return (
    size === 's' ?
    <div className={styles.avatar_s}>
      <div style={{backgroundImage: `url(${photo})`}} className={styles.photo_s}> </div>
      <div className={styles.info_s}>
        <p className={`text text_type_m`}>{name}</p>
        <p className={`text text_type_xs`}>{role}</p>
      </div>
      </div>
      :
      <div className={styles.avatar}>
      <div style={{backgroundImage: `url(${photo})`}} className={styles.photo}> </div>
      <div className={styles.info}>
        <p className={`text text_type_accent_m`}>{name}</p>
        <p className={`text text_type_xs`}>{role}</p>
      </div>
    </div>

   );

}

export default Avatar;
