import styles from './TextAvatarButton.module.css'

function TextAvatarButton({text, photo, onClick}) {
  return (
    <button className={styles.btn} onClick={onClick}>
      <div style={{backgroundImage: `url(${photo})`}} className={styles.photo}></div>
      <p className={`text text_type_m`}>{text}</p>
    </button>
   );
}

export default TextAvatarButton;
