import { useEffect, useMemo, useState } from "react";
import { Desktop, Tablet, Mobile } from "../../../lib/media/request";
import Logo from "../../icons/Logo/Logo";
import HeaderLink from "../HeaderLink/HeaderLink";
import styles from "./Header.module.css";
import { useMediaQuery } from "react-responsive";
import OpenHeader from "../OpenHeader/OpenHeader";

const INTRO_HEIGHT = 8.056

function Header({ mainPage, animation }) {
  const isDesktop = useMediaQuery({ minWidth: 1440 })
  const [headerOpen, setHeaderOpen] = useState();
  const [scrollTop, setScrollTop] = useState(document.documentElement.scrollTop)

    const {logoOffset, logoScale} = useMemo(() => {
        const logoOffset = Math.max(INTRO_HEIGHT - scrollTop , 0.12)

        return {
            logoOffset: logoOffset,
            logoScale: 1 + (logoOffset / INTRO_HEIGHT),
        }
    }, [scrollTop])

    useEffect(() => {
        const handleScroll = () => setScrollTop(document.documentElement.scrollTop / 14.4)
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
        <header
      className={`${styles.header} ${animation ? styles.animation : ''}`}
    >
      <Desktop>
      <nav className={styles.nav_menu}>
        <HeaderLink link={""}>Кейсы</HeaderLink>
        <HeaderLink link={""}>Прoцессы</HeaderLink>
        <HeaderLink link={"/journal"}>Журнал</HeaderLink>
        <HeaderLink link={""}>Школа</HeaderLink>
      </nav>
      {mainPage ? (
        <div style={{transform: `translateY(+${logoOffset}vw) scale(${logoScale})`}}>
          <Logo width={8.333} height={1.875} />
        </div>
      ) : (
        <Logo width={6.25} height={1.389} />
      )}

      <nav className={styles.nav_menu}>
        <HeaderLink link={""}>Бриф</HeaderLink>
        <HeaderLink link={"/"}>Контакты</HeaderLink>
        <HeaderLink link={"#form"} scroll>Оценить проект</HeaderLink>
      </nav>
      </Desktop>
      {!isDesktop &&
      <>
        <Tablet>
        <Logo width={10.94} height={2.343} />
        </Tablet>
        <Mobile>
        <Logo width={22.4} height={4.8} />
        </Mobile>
        <div className={styles.nav_menu}>
          <a href={'#form'} className={`text text_type_s text_color_primary ${styles.link}`}>Оценить проект</a>
          <button className={styles.btn} onClick={() => setHeaderOpen(true)}></button>
        </div>
      </>
      }
      { headerOpen && <OpenHeader onClose={() => {setHeaderOpen(); document.querySelector('body').style = 'overflow: auto;'}}>
      </OpenHeader> }
    </header>
     { mainPage && isDesktop && <div
      style={{
          width: '100%',
          height: `${0.4398 * logoOffset + 8.003}vw`,

      }}
      />}
    </>



  );
}

export default Header;


