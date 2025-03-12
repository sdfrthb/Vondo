import styles from "./Button.module.css";

function ArrowButton({ text, type, onClick, isDisabled, color }) {
  return (
    <button
      className={`${styles.btn} ${color && styles.color}`}
      type={type === "submit" ? "submit" : "button"}
      disabled={isDisabled}
      onClick={onClick}
      style={isDisabled ? { cursor: 'default' } : null}
    >
      <p className={`text text_type_m`}>{text}</p>
    </button>
  );
}

export default ArrowButton;
