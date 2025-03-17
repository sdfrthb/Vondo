import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function SchoolLessonHoursTexts() {
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
          "Свяжемся с&nbsp;вами в&nbsp;понедельник до&nbsp;18:00 и&nbsp;расскажем подробности";
      } else if (currentTime > 15) {
        text = "Свяжемся с&nbsp;вами завтра до&nbsp;18:00 и&nbsp;расскажем подробности";
      } else {
        text = "Свяжемся с&nbsp;вами сегодня до&nbsp;18:00 и&nbsp;расскажем подробности";
      }
      document.getElementById("currentTimeLesson").innerHTML = text;
    }, 300);

    return () => clearInterval(intervalId);
  }, []);
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return <p id="currentTimeLesson" className={`text text_type_${isMobile ? 'm' : 's'}`}></p>;
}

export default SchoolLessonHoursTexts;
