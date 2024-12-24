import TextAvatarButton from '../../../../../ui/components/TextAvatarButton/TextAvatarButton';
import teamData from '../../../../../utils/teamData'
import styles from './TeamTabs.module.css'
import m from '../../../../../images/Component_5.png'
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../../services/slices/modalSlice';

function TeamTabs({person}) {

  const {fullname, fullRole, photo, fullPhoto} = teamData(person)
  const dispatch = useDispatch();
  const onOpenVideo = () => {
    dispatch(openModal("video"));
  };

  return (
    <div className={styles.card}>
      <div  className={styles.photo} style={{backgroundImage: `url(${fullPhoto})`}}></div>
      <div className={styles.data}>
        <div className={styles.info}>
        <p className={`text text_type_m`}>{fullname}</p>
        <p className={`text text_type_accent_m spacing`}>{fullRole}</p>
        </div>
        <div className={styles.btn}>
          <TextAvatarButton text={'Посмотреть видео-визитку'} photo={photo} team onClick={onOpenVideo}/>
        </div>
      </div>
    </div>
   );
}

export default TeamTabs;
