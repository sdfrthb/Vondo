function WorkHoursTexts() {
  // const date = new Date()
  // const hours = date.getHours()
  // const weekDay = date.getUTCDay()
  // console.log(date, hours, weekDay)
  // let timeOfDay

  // if (hours < 12) {
  //   timeOfDay = "morning"
  // } else if (hours >= 12 && hours < 17) {
  //   timeOfDay = "afternoon"
  // } else {
  //   timeOfDay = "night"
  // }
  setInterval(function() {
    const date = new Date()
    const currentTime = date.toLocaleTimeString('ru-RU', { timeZone: 'Europe/Moscow' }).slice(0,2);
    const currentDay = date.getDay()
    let text
    if (currentDay === 6 || currentDay === 0 || ( currentDay === 5 && currentTime > 18 )) {
      text = 'Уже ушли на&nbsp;выходные, напишем<br />до&nbsp;11:00 понедельника (по МСК)'
    }
    else if (currentTime > 18) {
      text = 'Сейчас отдыхаем, свяжемся<br />завтра до 11:00 (по МСК)'
    }
    else {
      text = 'Напишем до 18:00 (по МСК)<br />и&nbsp;договоримся о встрече'
    }
    document.getElementById('currentTime').innerHTML = text;
  }, 5000);


  return (
    <p id="currentTime" className={`text text_type_m`}></p>
  )
}

export default WorkHoursTexts;
