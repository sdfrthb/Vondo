import { createPortal } from "react-dom";
import styles from "./LoomVideo.module.css";
import IconButton from "../../../../ui/components/IconButton/IconButton";
import closeBtn from "../../../../images/closeVideoBtn.svg"
import { Desktop, Mobile, Tablet } from "../../../../lib/media/request";

const modalRoot = document.getElementById("video-modal");



export default function LoomVideo({loom, onClose}) {
  return createPortal(
    <div className={styles.video_wrapper}>
      <div className={styles.btn_wrapper}>
        <Desktop>
        <IconButton icon={closeBtn} width={2.778} onClick={onClose}/>
        </Desktop>
        <Tablet>
        <IconButton icon={closeBtn} width={5.208} onClick={onClose}/>
        </Tablet>

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
