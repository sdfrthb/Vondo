import styles from "./WorkHoursStatus.module.css";

function WorkHoursStatus() {
  let color
  setInterval(function () {
    const date = new Date();
    const currentTime = date
      .toLocaleTimeString("ru-RU", { timeZone: "Europe/Moscow" })
      .slice(0, 2);
    const currentDay = date.getDay();
    const currentMinutes = date.getMinutes();
    let text;
    if (
      currentDay === 6 ||
      currentDay === 0 ||
      (currentDay === 5 && currentTime > 18)
    ) {
      text = "Ушли на&nbsp;выходные, вернемся в&nbsp;10:00 в&nbsp;понедельник";
      color = "#FF5A19";
    } else if (currentTime > 18) {
      text = `Отдыхаем, у нас ${currentTime}:${currentMinutes < 10 ? `0` + currentMinutes : currentMinutes}`;
      color = "#FFAE19";
    } else {
      text = `Работаем, у нас ${currentTime}:${currentMinutes < 10 ? `0` + currentMinutes : currentMinutes}`;
      color = "#19AA1E";
    }
    document.querySelectorAll(".status").forEach((el) => {
      if (el) {
        el.innerHTML = text
      }
    })
    document.querySelectorAll("circle").forEach((element) => {
      element.setAttribute("fill", color);
    })
  }, 1000);

  return (
    <div className={styles.time_wrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="none"
        className={styles.point}
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="8" cy="8" r="8" fillOpacity="0.07" />
        <circle cx="8" cy="8" r="8" fillOpacity="0.07" />
        <circle cx="8" cy="8" r="4" className={styles.point_one} />
        <circle
          opacity="0.6"
          cx="8"
          cy="8"
          r="6"
          className={styles.point_three}
        />
        <circle
          opacity="0.5"
          cx="8"
          cy="8"
          r="7"
          className={styles.point_two}
        />
      </svg>
      <p className={`text text_type_xs status`}></p>
    </div>
  );
}

export default WorkHoursStatus;
