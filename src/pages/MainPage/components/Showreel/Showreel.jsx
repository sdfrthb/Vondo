import Logo from '../../../../ui/icons/Logo/Logo';
import styles from './Showreel.module.css'
import reel from '../../../../images/aboutData1.mp4'

function Showreel() {
  return (
    <section>
      <div className={styles.wrapper}>
        {/* <Logo width={11.111} height={2.5} /> */}
        {/*  <div style={{background: 'blue', width: '100%', height: '30vw'}}>*/}
            {/*<h1 className={`text text_type_accent_l text_color_primary ${styles.title}`}>Помогаем крупным компаниям эффективно решать дизайн-задачи</h1>*/}
          {/*</div>*/}
        {/*  TODO: унести это отсюда */}
        <video className={styles.video} preload="auto" muted playsInline autoPlay="auto" loop="loop">
          <source src={reel} type="video/mp4" />
        </video>
      </div>
    </section>
   );
}

export default Showreel;
