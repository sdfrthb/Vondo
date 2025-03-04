import { useEffect } from "react";

function WorkHoursTexts() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const currentTime = date
        .toLocaleTimeString("ru-RU", { timeZone: "Europe/Moscow" })
        .slice(0, 2);
      const currentDay = date.getDay();
      let text;

      if (
        currentDay === 6 ||
        currentDay === 0 ||
        (currentDay === 5 && currentTime > 17)
      ) {
        text =
          "Уже ушли на&nbsp;выходные, напишем до&nbsp;11:00 понедельника (по&nbsp;МСК)";
      } else if (currentTime > 17) {
        text = "Сейчас отдыхаем, свяжемся завтра до&nbsp;11:00 (по&nbsp;МСК)";
      } else {
        text = "Напишем до 18:00 (по&nbsp;МСК) и&nbsp;договоримся о&nbsp;встрече";
      }
      document.getElementById("currentTime").innerHTML = text;
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <p id="currentTime" className={`text text_type_m`}></p>;
}

export default WorkHoursTexts;
