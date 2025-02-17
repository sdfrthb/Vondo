import { useMediaQuery } from "react-responsive";
import styles from "./TextAvatarButton.module.css";

function TextAvatarButton({ text, photo, url, type }) {
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
        <a
          className={`text text_color_primary ${styles[`btn${type === "big" && isDesktop ? "_big" : ""}`]}`}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <div
            style={{
              backgroundImage: `url(https://i.pinimg.com/originals/09/5e/87/095e87d79230fed0dfae0259ebe6f8c3.gif)`,
            }}
            className={
              styles[`photo${type === "big" && isDesktop ? "_big" : ""}`]
            }
          ></div>
          <p className={`text text_type_${isDesktop ? 'm' : 'xs'} ${styles.content}`}>{text}</p>
        </a>

  );
}

export default TextAvatarButton;
