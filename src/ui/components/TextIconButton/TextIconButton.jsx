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
}) {
  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const iconType = () => {
    switch (icon) {
      case "arrow right":
        return <ArrowRightIcon className={styles.icon}/>;
      case "arrow down":
        return <ArrowDownIcon className={styles.icon}/>;
      case "arrow up":
        return <ArrowUpIcon className={styles.icon}/>;
      case "link":
        return <LinkIcon className={styles.icon}/>;
      case "download":
        return <DownloadIcon className={styles.icon}/>;
      case "video":
        return <VideoIcon className={styles.icon}/>;
    }
  };
  return (
    <a
      className={`${styles.btn}`}
      download={download}
      href={url}
      target={redirect ? "_self" : "_blank"}
      rel="noreferrer"
    >
      {side === "left" && iconType()}
      <p className={`text text_type_${isDesktop ? 'm' : 'xs'} text_color_primary ${styles.content}`}>
        {text}
      </p>
      {side === "rigth" && iconType()}
      {invisiblePart && (
        <div className={styles.invisible}>
          <p className={`text text_type_xs`}>{invisiblePart}</p>
        </div>
      )}
    </a>
  );
}

export default TextIconButton;
