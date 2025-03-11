import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function BriefHoursTexts() {
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
          "Изучим заявку и&nbsp;свяжемся с&nbsp;вами в&nbsp;понедельник до&nbsp;18:00";
      } else if (currentTime > 15) {
        text = "Изучим заявку и&nbsp;свяжемся с&nbsp;вами завтра до&nbsp;18:00";
      } else {
        text = "Изучим заявку и&nbsp;свяжемся с вами сегодня до&nbsp;18:00";
      }
      document.getElementById("currentTimeBrief").innerHTML = text;
    }, 300);

    return () => clearInterval(intervalId);
  }, []);
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return <p id="currentTimeBrief" className={`text text_type_accent_${isDesktop ? 's' : 'm'}`}></p>;
}

export default BriefHoursTexts;
