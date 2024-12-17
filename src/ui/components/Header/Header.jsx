import {useEffect, useMemo, useState} from "react";
import {Desktop} from "../../../lib/media/request";
import Logo from "../../icons/Logo/Logo";
import HeaderLink from "../HeaderLink/HeaderLink";
import styles from "./Header.module.css";

const HEADER_HEIGHT = 80
const INTRO_HEIGHT = 320
const DYNAMIC_HEADER_HEIGHT = HEADER_HEIGHT + INTRO_HEIGHT

function Header({mainPage}) {
    // const isDesktop = useMediaQuery({ minWidth: 1440 })

    // TODO:
    // 1) Убрать отсюда весь мусор, все стили перенести из компонента в css (кроме тех, которые задаются по условию)
    // 2) В компоненте Header оставить только <header>. Создать еще один компонент DynamicHeader, внутри которого будет рендерится Header + Intro (блок с текстом над видео).
    // 3) В пропсы Header добавь возможность прокидывать нужные для работы стили, в данном случае это position, height, marginTop итд

    const [scrollTop, setScrollTop] = useState(document.documentElement.scrollTop)
    const {isIntroVisible, logoOffset, logoScale} = useMemo(() => {
        const logoOffset = Math.max(INTRO_HEIGHT - scrollTop - 30, 0)

        return {
            isIntroVisible: (scrollTop + HEADER_HEIGHT) < DYNAMIC_HEADER_HEIGHT,
            logoScale: 1 + (logoOffset / INTRO_HEIGHT),
            logoOffset: logoOffset,
        }
    }, [scrollTop])

    useEffect(() => {
        const handleScroll = () => setScrollTop(document.documentElement.scrollTop)
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={styles.header}
                style={{
                    height: `${HEADER_HEIGHT}px`,
                    position: isIntroVisible ? 'fixed' : 'static',
                    marginTop: isIntroVisible ? 0 : `${INTRO_HEIGHT}px`
                }}
            >
                <Desktop></Desktop>
                <nav className={styles.nav_menu}>
                    <HeaderLink link={"/cases"}>Кейсы</HeaderLink>
                    <HeaderLink link={"/principles"}>Принципы</HeaderLink>
                    <HeaderLink link={"/journal"}>Журнал</HeaderLink>
                    <HeaderLink link={"/education"}>Школа</HeaderLink>
                </nav>
                <div
                    style={{transform: `translateY(+${logoOffset}px) scale(${logoScale})`}}>
                    <Logo width={6.25} height={1.389}/>
                </div>
                <nav className={styles.nav_menu}>
                    <HeaderLink link={"/brif"}>Бриф</HeaderLink>
                    <HeaderLink link={"/contacts"}>Контакты</HeaderLink>
                    <HeaderLink link={"#form"}>Оценить проект</HeaderLink>
                </nav>
            </header>
            {isIntroVisible && <div
                style={{
                    width: '100%',
                    height: `${DYNAMIC_HEADER_HEIGHT}px`,
                }}
            />}
        </>
    );
}

export default Header;
