import vcIcon from '../../../../../images/vc.svg';
import tgIcon from '../../../../../images/tg.svg';
import styles from './News.module.css'

function News({title, icon, date, url}) {
  return (
    <a href={url} target="_blank" className={styles.news}>
      <p className={`text text_type_m text_color_primary spacing ${styles.title}`}>{title}</p>
      <div className={styles.wrapper}>
         <div style={{backgroundImage: `url(${icon==='vc' ? vcIcon : tgIcon})`}} className={styles.icon}></div>
        <p className={`text text_type_xs text_color_primary`}>{date}</p>
      </div>
      <p className={`text text_type_xs text_color_primary ${styles.invisible}`}>Читать</p>
    </a>
   );
}

export default News;
