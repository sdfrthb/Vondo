import { useEffect, useState } from "react";
import { Desktop, Tablet, Mobile } from "../../../lib/media/request";
import ScrollComponent from "../../../utils/ScrollComponent";
import Logo from "../../icons/Logo/Logo";
import HeaderLink from "../HeaderLink/HeaderLink";
import styles from "./Header.module.css";
import { useMediaQuery } from "react-responsive";
import OpenHeader from "../OpenHeader/OpenHeader";
import WorkHoursStatus from "../../../utils/WorkHoursStatus";

function Header({ mainPage }) {
  const isDesktop = useMediaQuery({ minWidth: 1440 })
  const [style, setStyle] = useState(0);
  const [headerOpen, setHeaderOpen] = useState();
  // console.log(style);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      let translateValue = Math.max(0, scrollTop / 3);
      mainPage && setStyle(translateValue);
    };

     mainPage && window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={
        mainPage && isDesktop
          ? {
              height: `calc(11.528vw - ${style}px)`,
              position: style > 17 ? "static" : "fixed",
            }
          :
          isDesktop ?
          { position: "static", height: "auto" }
          : {}
      }
      className={styles.header}
    >
      <Desktop>
      <nav className={styles.nav_menu}>
        <HeaderLink link={"/cases"}>Кейсы</HeaderLink>
        <HeaderLink link={"/principles"}>Принципы</HeaderLink>
        <HeaderLink link={"/journal"}>Журнал</HeaderLink>
        <HeaderLink link={"/education"}>Школа</HeaderLink>
      </nav>
      {mainPage ? (
        <div className={styles.scroll}>
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

  );
}

export default Header;
