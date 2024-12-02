import { Desktop } from "../../../lib/media/request";
import Logo from "../../icons/Logo/Logo";
import HeaderLink from "../HeaderLink/HeaderLink";
import styles from './Header.module.css'

function Header({mainPage}) {
  // const isDesktop = useMediaQuery({ minWidth: 1440 })
  return (
    <header className={styles.header}>
      <Desktop></Desktop>
      <nav className={styles.nav_menu}>
        <HeaderLink link={'/cases'}>Кейсы</HeaderLink>
        <HeaderLink link={'/principles'}>Принципы</HeaderLink>
        <HeaderLink link={'/journal'}>Журнал</HeaderLink>
        <HeaderLink link={'/education'}>Школа</HeaderLink>
      </nav>
      {!mainPage && <Logo width={6.25} height={1.389} />}
      <nav className={styles.nav_menu}>
      <HeaderLink link={'/brif'}>Бриф</HeaderLink>
      <HeaderLink link={'/contacts'}>Контакты</HeaderLink>
      <HeaderLink link={'#form'}>Оценить проект</HeaderLink>
      </nav>
    </header>
  );
}

export default Header;
