import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function SchoolHoursTexts() {
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
        (currentDay === 5 && currentTime > 15)
      ) {
        text =
          "Если&nbsp;остались вопросы&nbsp;— оставьте заявку, напишем напишем до&nbsp;18:00 понедельника";
      } else if (currentTime > 15) {
        text = "Если&nbsp;остались вопросы&nbsp;— оставьте заявку, напишем завтра до&nbsp;18:00";
      } else {
        text = "Если&nbsp;остались вопросы&nbsp;— оставьте заявку, напишем сегодня до&nbsp;18:00";
      }
      document.getElementById("currentTimeSchool").innerHTML = text;
    }, 300);

    return () => clearInterval(intervalId);
  }, []);
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return <p id="currentTimeSchool" className={`text text_type_${isDesktop ? 'h3' : 'accent_m'}`}></p>;
}

export default SchoolHoursTexts;
