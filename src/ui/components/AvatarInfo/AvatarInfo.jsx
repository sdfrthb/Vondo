import { useMediaQuery } from 'react-responsive';
import styles from './AvatarInfo.module.css'
import teamData from '../../../utils/teamData';


function AvatarInfo({person, size}) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { name, role, photoProcess } = teamData(person);
  return (
    size === 's' ?
    <div className={styles.avatar_s}>
      <div style={{backgroundImage: `url(${photoProcess})`}} className={styles.photo_s}> </div>
      <div className={styles.info_s}>
        <p className={`text text_type_m`}>{name}</p>
        <p className={`text text_type_xs text_color_inactive ${styles.role}`}>{role}</p>
      </div>
      </div>
      :
      <div className={styles.avatar}>
      <div style={{backgroundImage: `url(${photoProcess})`}} className={styles.photo}> </div>
      <div className={styles.info}>
        <p className={`text text_type_accent_m`}>{name}</p>
        <p className={isMobile ? 'text text_type_xs' :'text text_type_s'}>{role}</p>
      </div>
    </div>

   );

}

export default AvatarInfo;
