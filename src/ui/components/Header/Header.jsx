import { useEffect, useMemo, useState } from "react";
import { Desktop, Tablet, Mobile } from "../../../lib/media/request";
import ScrollComponent from "../../../utils/ScrollComponent";
import Logo from "../../icons/Logo/Logo";
import HeaderLink from "../HeaderLink/HeaderLink";
import styles from "./Header.module.css";
import { useMediaQuery } from "react-responsive";
import OpenHeader from "../OpenHeader/OpenHeader";
import WorkHoursStatus from "../../../utils/WorkHoursStatus";

const HEADER_HEIGHT = 3.472
const INTRO_HEIGHT = 8.056
const DYNAMIC_HEADER_HEIGHT = HEADER_HEIGHT + INTRO_HEIGHT

function Header({ mainPage, animation }) {
  const isDesktop = useMediaQuery({ minWidth: 1440 })
  const [headerOpen, setHeaderOpen] = useState();
  const [scrollTop, setScrollTop] = useState(document.documentElement.scrollTop)
    const {isIntroVisible, logoOffset} = useMemo(() => {
        const logoOffset = Math.max(INTRO_HEIGHT - scrollTop - 0.347, 0)

        return {
            isIntroVisible: (scrollTop + HEADER_HEIGHT) < DYNAMIC_HEADER_HEIGHT,
            logoScale: 1 + (logoOffset / INTRO_HEIGHT),
            logoOffset: logoOffset,
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
     style={(isDesktop && mainPage) ? {
      height: `${HEADER_HEIGHT}vw`,
      position: isIntroVisible ? 'fixed' : 'static',
      marginTop: isIntroVisible ? 0 : `${INTRO_HEIGHT}vw`
  } : {}}
      className={`${styles.header} ${animation ? styles.animation : ''}`}
    >
      <Desktop>
      <nav className={styles.nav_menu}>
        <HeaderLink link={"/cases"}>Кейсы</HeaderLink>
        <HeaderLink link={"/principles"}>Принципы</HeaderLink>
        <HeaderLink link={"/journal"}>Журнал</HeaderLink>
        <HeaderLink link={"/education"}>Школа</HeaderLink>
      </nav>
      {mainPage ? (
        <div style={{transform: `translateY(+${logoOffset}vw) `}}>
          <Logo width={11.111} height={2.5} />
        </div>
      ) : (
        <Logo width={6.25} height={1.389} />
      )}

      <nav className={styles.nav_menu}>
        <HeaderLink link={"/brif"}>Бриф</HeaderLink>
        <HeaderLink link={"/contacts"}>Контакты</HeaderLink>
        <HeaderLink link={"#form"}>Оценить проект</HeaderLink>
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
      { headerOpen && <OpenHeader onClose={() => setHeaderOpen()}>
      </OpenHeader> }
    </header>
     {isIntroVisible && mainPage && isDesktop && <div
      style={{
          width: '100%',
          height: `${DYNAMIC_HEADER_HEIGHT}vw`,
      }}
      />}
    </>



  );
}

export default Header;
