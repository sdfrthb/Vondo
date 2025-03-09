import { useMediaQuery } from "react-responsive";
import styles from "./HeaderLink.module.css";

function HeaderLink({ children, link, scroll }) {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const handleClick = (e) => {
    if (!link) {
      e.preventDefault();
    } else if (scroll) {
      e.preventDefault();
      const targetElement = document.querySelector(link);
      if (targetElement && scroll) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      {link ? (
        <a
          href={link}
          className={`text ${
            isDesktop ? "text_type_xs" : "text_type_accent_l"
          }  text_color_primary ${styles.link}`}
          onClick={handleClick}
        >
          {children}
        </a>
      ) : (
        <div
          className={`text ${
            isDesktop ? "text_type_xs" : "text_type_accent_l"
          }  text_color_primary ${styles.link}`}
        >
          {children}
          {!link && (
            <div className={`${styles.invisible}`}>
              <p
                className={`text text_type_xs ${
                  isDesktop ? "text_color_accent" : "text_color_secondary"
                } ${styles.info}`}
              >
                {children==="Школа" ? "Опубликуем 14 марта" : "Опубликуем 10 марта"}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default HeaderLink;
