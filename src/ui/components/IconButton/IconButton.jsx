import styles from './IconButton.module.css'

function IconButton({icon, width, onClick}) {
  return (
    <button type='button' onClick={onClick} style={{backgroundImage: `url(${icon})`, width: `${width}vw`, height: `${width}vw`}}
    className={`${styles.btn}`}></button>
   );
}

export default IconButton;
