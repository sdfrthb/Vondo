import styles from "./TextIconButton.module.css";
import { ReactComponent as ArrowRightIcon } from "../../../images/icon/arrow/right.svg";
import { ReactComponent as ArrowDownIcon } from "../../../images/icon/arrow/down.svg";
import { ReactComponent as ArrowUpIcon } from "../../../images/icon/arrow/up.svg";
import { ReactComponent as LinkIcon } from "../../../images/icon/link.svg";
import { useMediaQuery } from "react-responsive";

function TextIconButton({
  icon,
  size,
  tabletSize,
  download,
  redirect,
  text,
  url,
  side,
  invisiblePart,
  color,
  onClick
}) {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const iconType = () => {
    switch (icon) {
      case "arrow right":
        return (
          <ArrowRightIcon
            className={`${styles.icon} ${size && styles.small}`}
          />
        );
      case "arrow down":
        return (
          <ArrowDownIcon className={`${styles.icon} ${size && styles.small}`} />
        );
      case "arrow up":
        return (
          <ArrowUpIcon
            className={`${styles.icon} ${color && styles.white} ${
              size && styles.small
            }`}
          />
        );
      case "link":
        return (
          <LinkIcon className={`${styles.icon} ${size && styles.small} ${tabletSize && styles.medium}`} />
        );
      default:
        return (
          <ArrowUpIcon className={`${styles.icon} ${size && styles.small}`} />
        );
    }
  };
  return (
    <a
      className={`${styles.btn} ${color && styles.btn_black} ${
        size && styles.btn_small
      }`}
      download={download}
      href={url}
      target={redirect ? "_self" : "_blank"}
      rel="noreferrer"
      onClick={onClick}
    >
      {side === "left" && iconType()}
      <p
        className={`text text_type_${
          isDesktop && !color && !size ? "m" : tabletSize==="m" ? "m" : "xs"
        } text_color_${color ? "accent" : "primary"} ${styles.content}`}
      >
        {text}
      </p>
      {invisiblePart && isDesktop && (
        <div className={`${styles.invisible}`}>
          <p className={`text text_type_s text_color_accent`}>
            {invisiblePart}
          </p>
        </div>
      )}
      {side === "rigth" && iconType()}
    </a>
  );
}

export default TextIconButton;
