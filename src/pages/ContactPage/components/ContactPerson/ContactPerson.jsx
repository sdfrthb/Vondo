import teamData from '../../../../utils/teamData';
import styles from './ContactPerson.module.css'

function ContactPerson({person, children}) {
  const {name, fullPhoto, role} = teamData(person)
  return (
    <div className={styles.wrapper}>
      <div style={{backgroundImage: `url(${fullPhoto})`}} className={styles.photo}> </div>
      <div className={styles.info}>
        <p className={`text text_type_m`}>{name}</p>
        <p className={`text text_type_accent_m ${styles.role}`}>{role}</p>
        <div className={styles.links}>
          {children}
        </div>
      </div>
    </div>
   );
}

export default ContactPerson;
