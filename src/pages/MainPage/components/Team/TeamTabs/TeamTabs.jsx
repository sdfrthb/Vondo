import TextAvatarButton from '../../../../../ui/components/TextAvatarButton/TextAvatarButton';
import teamData from '../../../../../utils/teamData'
import styles from './TeamTabs.module.css'
import m from '../../../../../images/Component_5.png'

function TeamTabs({person}) {

  const {fullname, fullRole, photo} = teamData(person)

  return (
    <div className={styles.card}>
      <div  className={styles.photo} style={{backgroundImage: `url(${m})`}}></div>
      <div className={styles.data}>
        <div className={styles.info}>
        <p className={`text text_type_m`}>{fullname}</p>
        <p className={`text text_type_accent_m`}>{fullRole}</p>
        </div>
        <TextAvatarButton text={'Посмотреть видео-визитку'} photo={photo}/>
      </div>
    </div>
   );
}

export default TeamTabs;
