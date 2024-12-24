import Avatar from '../../../../ui/components/Avatar/Avatar';
import TextIconButton from '../../../../ui/components/TextIconButton/TextIconButton';
import teamData from '../../../../utils/teamData';
import styles from './Process.module.css'

function Process({title, person, children, type}) {

  const {name, role, photo} = teamData(person)
  return (
    <section className={styles.card}>
      <div className={styles.col_left}>
        <p className={`text text_type_xs ${styles.text}`}>Процессы</p>
        <p className={`text text_type_accent_l under ${styles.title}`}>{title}</p>
        <Avatar name={name} role={role} photo={photo}/>
      </div>
      {children && <div className={styles.col_right}>
      <p className={`text text_type_xs ${styles.artifacts}`}>{type==="links" ? "Ссылки" :"Артефакты"}</p>
      {children}
      </div>}
    </section>
   );
}

export default Process;
