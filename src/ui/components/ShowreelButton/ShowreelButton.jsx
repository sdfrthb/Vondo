import styles from './ShowreelButton.module.css'

function ShowreelButton() {
  return (
    <button className={`${styles.btn}`}>
      <svg
      className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="15"
        viewBox="0 0 23 15"
        fill="none"
      >
        <path
          d="M15.583 8.29247L21.0236 11.9196C21.1021 11.9717 21.1932 12.0017 21.2873 12.0062C21.3814 12.0107 21.475 11.9896 21.558 11.9451C21.6411 11.9007 21.7105 11.8345 21.7589 11.7537C21.8074 11.6729 21.833 11.5804 21.833 11.4862V2.94872C21.833 2.85708 21.8089 2.76705 21.763 2.68773C21.7171 2.60841 21.6511 2.5426 21.5716 2.49695C21.4921 2.4513 21.402 2.42743 21.3104 2.42774C21.2188 2.42805 21.1288 2.45253 21.0497 2.49872L15.583 5.68831"
          stroke="#1A1A1A"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 1H3.08333C1.93274 1 1 1.93274 1 3.08333V11.4167C1 12.5673 1.93274 13.5 3.08333 13.5H13.5C14.6506 13.5 15.5833 12.5673 15.5833 11.4167V3.08333C15.5833 1.93274 14.6506 1 13.5 1Z"
          stroke="#1A1A1A"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className={`text text_type_m ${styles.content}`}>Посмотреть шоурил</p>

        <div className={styles.invisible}>
        </div>

    </button>
  );
}

export default ShowreelButton;
