import styles from './ArrowButton.module.css'

function ArrowButton({text, type, onClick}) {
  return (
    <button className={styles.btn} type={type==="submit" ? 'submit' : 'button'} onClick={onClick}>
      <p className={`text text_color_accent text_type_m`}>{text}</p>
      <svg  className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M11.9529 17.2905C11.8177 17.1562 11.7417 16.9742 11.7417 16.7844C11.7417 16.5946 11.8177 16.4125 11.9529 16.2782L15.5353 12.7255L5.72226 12.7255C5.5307 12.7255 5.34699 12.6501 5.21154 12.5157C5.07609 12.3814 5 12.1992 5 12.0092C5 11.8193 5.07609 11.6371 5.21154 11.5028C5.34699 11.3684 5.5307 11.293 5.72226 11.293L15.5353 11.293L11.9529 7.7403C11.882 7.67472 11.8251 7.59565 11.7856 7.50778C11.7461 7.41992 11.7249 7.32508 11.7232 7.2289C11.7215 7.13273 11.7393 7.0372 11.7756 6.94801C11.8119 6.85882 11.866 6.7778 11.9346 6.70979C12.0032 6.64177 12.0849 6.58815 12.1748 6.55213C12.2647 6.51611 12.3611 6.49841 12.4581 6.50011C12.555 6.50181 12.6507 6.52286 12.7393 6.56201C12.8279 6.60115 12.9076 6.6576 12.9737 6.72797L17.7888 11.5031C17.924 11.6374 18 11.8194 18 12.0092C18 12.1991 17.924 12.3811 17.7888 12.5154L12.9737 17.2905C12.8383 17.4247 12.6547 17.5 12.4633 17.5C12.2719 17.5 12.0884 17.4247 11.9529 17.2905Z" fill="white"/>
</svg>
    </button>
   );
}

export default ArrowButton;
