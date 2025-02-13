import styles from './TeamTab.module.css'
function TeamTab({ isHovered, isNeighbor, onMouseEnter, onMouseLeave, onMouseMove, children }) {
  return (
    <div className={`${styles.button} ${isHovered ? styles.hovered : ''} ${isNeighbor ? styles.neighbor : ''}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
      {children}
    </div>
   );
}

export default TeamTab;
