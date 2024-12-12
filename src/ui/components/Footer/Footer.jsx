import Logo from '../../icons/Logo/Logo';
import mishaPhoto from '../../../images/misha-min.png';
import vasyaPhoto from '../../../images/vasya-min.png';
import tanyaPhoto from '../../../images/tanya-min.png';
import marinaPhoto from '../../../images/marina-min.png';
import TextButton from '../TextButton/TextButton';
import card from '../../../images/company_card.pdf'
import styles from './Footer.module.css'
function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo width={8.33} height={1.806}/>
      <div className={styles.columns}>
        <div className={styles.info}>
          <p className={`text text_type_xs`}>Москва, шлюзовая набережная, 8   м. Павелецкая</p>
          <TextButton text={'+7 912 992-53-84'} url={'tel:89129925384'}/>
          <div className={styles.creators}>
            <div className={styles.photo_wrapper}>
              <div style={{backgroundImage: `url(${vasyaPhoto})`}} className={styles.photo}></div>
              <div style={{backgroundImage: `url(${mishaPhoto})`}} className={styles.photo}></div>
              <div style={{backgroundImage: `url(${marinaPhoto})`}} className={styles.photo}></div>
              <div style={{backgroundImage: `url(${tanyaPhoto})`}} className={styles.photo}></div>
            </div>
            <p className={`text text_type_xs`}>Сделали этот сайт за 30 дней</p>
          </div>
        </div>
        <div className={styles.add_info}>
        <TextButton text={'sales@vondo.ru'} url={'mailto:sales@vondo.ru'}/>
        <TextButton text={'Карточка компании 0.4Mb'} url={card} invisiblePart={'PDF'}/>
        </div>
        <div className={styles.social_privacy}>
          <div className={styles.social}>
          <TextButton text={'Dprofile'} url={''}/>
          <TextButton text={'Behance'} url={''}/>
          <TextButton text={'Instagram'} url={''}/>
          <TextButton text={'Вконтакте'} url={''}/>
          <TextButton text={'Telegram'} url={''}/>
          <TextButton text={'VC'} url={''}/>
          </div>
          <div className={styles.privacy}>
          <p className={`text text_type_xs`}>Vondo 2022-2024</p>
          <TextButton text={'Политика обработки персональных данных'} url={''}/>
          </div>
        </div>
      </div>
    </footer>
   );
}

export default Footer;
