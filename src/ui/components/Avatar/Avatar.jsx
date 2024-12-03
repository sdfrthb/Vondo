import styles from './Avatar.module.css'

function Avatar({name, role, photo}) {
  return (
    <div className={styles.avatar}>
      <div style={{backgroundImage: `url(${photo})`}} className={styles.photo}> </div>
      <div className={styles.info}>
        <p className={`text text_type_accent_m ${styles.invisible}`}>{name}</p>
        <p className={`text text_type_xs ${styles.invisible}`}>{role}</p>
      </div>
    </div>
   );
}

export default Avatar;
