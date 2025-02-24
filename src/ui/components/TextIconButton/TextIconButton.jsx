import styles from "./TextIconButton.module.css";
import { ReactComponent as ArrowRightIcon } from "../../../images/icon/arrow/right.svg";
import { ReactComponent as ArrowDownIcon } from "../../../images/icon/arrow/down.svg";
import { ReactComponent as ArrowUpIcon } from "../../../images/icon/arrow/up.svg";
import { ReactComponent as DownloadIcon } from "../../../images/icon/download.svg";
import { ReactComponent as LinkIcon } from "../../../images/icon/link.svg";
import { ReactComponent as VideoIcon } from "../../../images/icon/video.svg";
import { useMediaQuery } from "react-responsive";

function TextIconButton({
  icon,
  download,
  redirect,
  text,
  url,
  side,
  invisiblePart,
  color
}) {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const iconType = () => {
    switch (icon) {
      case "arrow right":
        return <ArrowRightIcon className={styles.icon}/>;
      case "arrow down":
        return <ArrowDownIcon className={styles.icon}/>;
      case "arrow up":
        return <ArrowUpIcon className={`${styles.icon} ${color && styles.white}`}/>;
      case "link":
        return <LinkIcon className={styles.icon}/>;
      case "download":
        return <DownloadIcon className={styles.icon}/>;
      case "video":
        return <VideoIcon className={styles.icon}/>;
        default:
          return <ArrowUpIcon className={styles.icon}/>;
    }
  };
  return (
    <a
      className={`${styles.btn} ${color && styles.btn_black}`}
      download={download}
      href={url}
      target={redirect ? "_self" : "_blank"}
      rel="noreferrer"
    >
      {side === "left" && iconType()}
      <p className={`text text_type_${isDesktop && !color ? 'm' : 'xs'} text_color_${color ? 'accent' : 'primary'} ${styles.content}`}>
        {text}
        {invisiblePart && isDesktop && (
        <div className={`${styles.invisible}`}>
          <p className={`text text_type_s text_color_accent`}>{invisiblePart}</p>
        </div>
      )}
      </p>
      {side === "rigth" && iconType()}

    </a>
  );
}

export default TextIconButton;
