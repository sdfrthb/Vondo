import vcIcon from '../../../../../images/vc.svg';
import tgIcon from '../../../../../images/tg.svg';
import vondoIcon from '../../../../../images/maplogo.svg';
import styles from './News.module.css'
import { useMediaQuery } from 'react-responsive';

function News({title, icon, date, url}) {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  return (
    <a href={url} target="_blank" className={styles.news}>
      <div className={`${styles.title}`}>
      <span className={`text text_type_m text_color_primary ${styles.under} spacing`}>{title}</span>
      {!isDesktop && <p className={`text text_type_xs text_color_secondary ${styles.date}`}>{date}</p>}
      </div>
      <div className={styles.wrapper}>
         <div style={{backgroundImage: `url(${icon==='vc' ? vcIcon : icon==='tg' ? tgIcon : vondoIcon})`}} className={styles.icon}></div>
         {isDesktop && <p className={`text text_type_xs text_color_primary`}>{date}</p>}
      </div>
      { isDesktop && <p className={`text text_type_xs text_color_primary ${styles.invisible}`}>Читать</p>}
    </a>
   );
}

export default News;
