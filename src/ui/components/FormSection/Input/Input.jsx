import styles from './Input.module.css'
function Input({label, placeholder}) {
  return (
    <div className={styles.wrapper}>
    <label htmlFor="first-name" className={`text text_type_xs`}>{label}</label>
<input type="text" id="first-name" placeholder={placeholder} className={`text text_type_s ${styles.input}`}></input>
    </div>

   );
}

export default Input;
