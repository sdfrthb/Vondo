import kostyaPhoto from "../images/Костя.png";
import mishaPhoto from "../images/Миша.png";
import anyaPhoto from "../images/Аня.png";
import vasyaPhoto from "../images/Вася.png";
import tanyaPhoto from "../images/Таня.png";
import alenaPhoto from "../images/Алена.png";
import marinaPhoto from "../images/Марина.png";
import egorPhoto from "../images/Егор.png";
import sashaPhoto from "../images/Саша.png";
import melissaPhoto from "../images/Мелисса.png";
import dashaPhoto from "../images/Даша.png";
import arinaPhoto from "../images/Арина.png";
import mishaDavidovPhoto from "../images/Миша Давыдов.png";
import igorPhoto from "../images/Игорь.png"


import mishaFullPhoto from "../images/fullphotos/Миша-full.jpg";
import vasyaFullPhoto from "../images/fullphotos/Вася-full.jpg";
import anyaFullPhoto from "../images/fullphotos/Аня-full.jpg";
import tanyaFullPhoto from "../images/fullphotos/Таня-full.jpg";
import kostyaFullPhoto from "../images/fullphotos/Костя-full.jpg";
import egorFullPhoto from "../images/fullphotos/Егор-full.jpg";

import vasyaFullPhotoContact from "../images/other/Вася-contacts.jpg";
import anyaFullPhotoContact from "../images/other/Аня-contacts.jpg";

import anyaProcess from "../images/other/Аня-process.jpg";
import mishaProcess from "../images/other/Миша-process.jpg";
import vasyaProcess from "../images/other/Вася-process.jpg";

function teamData(name) {
  switch (name) {
    case "Костя":
      return {
        name: "Константин",
        fullname: "Константин Бережков",
        projectRole: "Организовывал работу",
        fullRole: "Менеджер",
        role: "Менеджер",
        photo: kostyaPhoto,
        fullPhoto: kostyaFullPhoto,
      };
    case "Миша":
      return {
        name: "Михаил",
        fullname: "Михаил Хориков",
        projectRole: "Руководил дизайном",
        role: "Руководит дизайном",
        fullRole:
          "Управляет дизайнерами и\u00A0отвечает за\u00A0качество, будет на\u00A0ключевых встречах по\u00A0проекту",
        photo: mishaPhoto,
        loom: "",
        fullPhoto: mishaFullPhoto,
        photoProcess: mishaProcess
      };
    case "Аня":
      return {
        name: "Анна",
        fullname: "Анна Лебедева",
        projectRole: "Организовывала процесс",
        role: "Руководит проектами",
        fullRole:
          "Руководит проектами и\u00A0отвечает за\u00A0сервис. Подключится к\u00A0оценке и\u00A0сформирует команду",
        photo: anyaPhoto,
        fullPhotoContact: anyaFullPhotoContact,
        fullPhoto: anyaFullPhoto,
        photoProcess: anyaProcess
      };
    case "Вася":
      return {
        name: "Василий",
        fullname: "Василий Вьялков",
        projectRole: "Руководил процессом",
        role: "Руководит студией",
        fullRole:
          "Руководит студией, будет на\u00A0установочных встречах по\u00A0проекту",
        photo: vasyaPhoto,
        fullPhotoContact: vasyaFullPhotoContact,
        fullPhoto: vasyaFullPhoto,
        photoProcess: vasyaProcess
      };
    case "Таня":
      return {
        name: "Татьяна",
        fullname: "Татьяна Захарова",
        projectRole: "Разрабатывала макеты",
        fullRole: "Разработчик",
        role: "Разработчик",
        photo: tanyaPhoto,
        fullPhoto: tanyaFullPhoto,
      };
    case "Марина":
      return {
        name: name,
        projectRole: "",
        role: "",
        photo: marinaPhoto,
      };
    case "Алёна":
      return {
        name: name,
        projectRole: "Разрабатывала макеты",
        role: "",
        photo: alenaPhoto,
      };
    case "Егор":
      return {
        name: name,
        fullname: "Егор Шпак",
        projectRole: "Делал дизайн",
        fullRole: "Дизайнер",
        role: "Дизайнер",
        photo: egorPhoto,
        fullPhoto: egorFullPhoto,
      };
    case "Саша":
      return {
        name: "Александр",
        projectRole: "Делал дизайн",
        role: "",
        photo: sashaPhoto,
      };
    case "Мелисса":
      return {
        name: name,
        projectRole: "Делала дизайн",
        role: "",
        photo: melissaPhoto,
      };
    case "Даша":
      return {
        name: "Дарья",
        projectRole: "Делала дизайн",
        role: "",
        photo: dashaPhoto,
      };
    case "Арина":
      return {
        name: "Арина",
        projectRole: "Делала дизайн",
        role: "",
        photo: arinaPhoto,
      };
      case "Игорь":
        return {
          name: "Игорь",
          projectRole: "HR",
          role: "HR",
          photo: igorPhoto,
        };
      case "Миша Давыдов":
      return {
        name: "Михаил",
        projectRole: "Разрабатывал макеты",
        role: "",
        photo: mishaDavidovPhoto,
      };
      default:
  }
}

export default teamData;
