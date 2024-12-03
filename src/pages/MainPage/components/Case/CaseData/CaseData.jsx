import WorkGroupAvatar from '../../../../../ui/components/WorkGroupAvatar/WorkGroupAvatar';
import styles from './CaseData.module.css'
function CaseData({title, description, photo}) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
      <div className={styles.avatars}>
        <WorkGroupAvatar name={'Костя'} work={'Организовывал работу'} photo={photo}/>
        <WorkGroupAvatar name={'Костя'} work={'Организовывал работу'} photo={photo}/>
      </div>
      <h3 className={`text text_type_accent_m text_color_primary`}>{title}</h3>
      <p className={`text text_type_accent_s text_color_primary ${styles.description}`}>{description}</p>
      </div>
      <p>лялялл</p>
    </div>
   );
}

export default CaseData;
