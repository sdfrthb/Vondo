import { createPortal } from "react-dom";
import styles from "./LoomVideo.module.css";
import IconButton from "../../../../ui/components/IconButton/IconButton";
import closeBtn from "../../../../images/closeVideoButton.svg"

const modalRoot = document.getElementById("video-modal");
console.log(modalRoot)

export default function LoomVideo({loom, onClose}) {
  return createPortal(
    <div className={styles.video_wrapper}>
      <div className={styles.btn_wrapper}>
      <IconButton icon={closeBtn} width={2.778} onClick={onClose}/>
      </div>

      <video
        className={styles.video}
        preload="auto"
        playsInline
        autoPlay="auto"
        controls
      >
        <source src={loom} type="video/mp4" />
      </video>
    </div>,
    modalRoot
  );
}
