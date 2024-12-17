import styles from "./TextIconButton.module.css";

function TextIconButton({ type, text, url, invisiblePart }) {
  return (
    <a
      className={`${styles.btn}`}
      download={type === "download" ? true : false}
      href={url}
      target={type === "arrow" ? "_self" : "_blank"}

    >
      {type === "link" ? (
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M9.40234 12.5995C10.2319 13.4281 11.3561 13.8941 12.5286 13.8956C12.9159 13.8906 13.3015 13.8413 13.6776 13.7486C14.4235 13.5404 15.1038 13.1448 15.6537 12.5995L16.7012 11.5531L19.8122 8.43125C20.3957 7.80662 20.7853 7.02608 20.9339 6.18434C21.0824 5.34261 20.9835 4.47585 20.6491 3.68924C20.3146 2.90263 19.7591 2.22999 19.0499 1.75292C18.3407 1.27585 17.5082 1.01487 16.6536 1.00164C15.508 0.9818 14.3992 1.40641 13.5598 2.1864L10.4487 5.30937"
            stroke="#1A1A1A"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.4816 16.7677L8.3554 19.8896C7.72539 20.4456 6.95011 20.8107 6.12022 20.9423C5.29034 21.0739 4.44013 20.9665 3.66902 20.6327C2.89791 20.2989 2.23776 19.7525 1.76575 19.0574C1.29375 18.3622 1.02941 17.547 1.00363 16.7072C0.972717 15.5819 1.37118 14.487 2.11812 13.6447L5.24433 10.5229L6.2918 9.47646C6.84133 8.93227 7.52077 8.53748 8.26568 8.32953C9.01656 8.12916 9.80692 8.12975 10.5575 8.33125C11.3081 8.53274 11.9925 8.92806 12.5421 9.47754"
            stroke="#1A1A1A"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : type === "arrow" ? (
        <svg
          className={styles.arrow}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17.6067 6.83792L9.1215 6.86797M17.6067 6.83792L17.6368 15.3231M17.6067 6.83792L7.74236 16.7724"
            stroke="#1A1A1A"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M5 20.005V21.25C5 22.2446 5.39509 23.1984 6.09835 23.9017C6.80161 24.6049 7.75544 25 8.75 25H21.25C22.2446 25 23.1984 24.6049 23.9017 23.9017C24.6049 23.1984 25 22.2446 25 21.25V20M15 5.625V19.375M15 19.375L19.375 15M15 19.375L10.625 15"
            stroke="#1A1A1A"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <p className={`text text_type_m text_color_primary ${styles.content}`}>{text}</p>

      {invisiblePart && (
        <div className={styles.invisible}>
          <p className={`text text_type_xs`}>{invisiblePart}</p>
        </div>
      )}
    </a>
  );
}

export default TextIconButton;
