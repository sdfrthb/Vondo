import styles from './Team.module.css'
import TeamTabs from './TeamTabs/TeamTabs';

function Team() {
  return (
    <section className={styles.wrapper}>
      <h2 className={`text text_type_h2`}>Команда</h2>
      <TeamTabs person={'Миша'}/>
    </section>
   );
}

export default Team;
