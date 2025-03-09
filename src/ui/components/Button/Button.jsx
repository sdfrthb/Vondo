import styles from "./Button.module.css";

function ArrowButton({ text, type, onClick, isDisabled, color }) {
  return (
    <button
      className={`${styles.btn} ${color && styles.color}`}
      type={type === "submit" ? "submit" : "button"}
      disabled={isDisabled ? true : false}
      onClick={onClick}
    >
      <p className={`text text_type_m`}>{text}</p>
    </button>
  );
}

export default ArrowButton;
