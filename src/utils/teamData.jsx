import kostyaPhoto from '../images/kostya-min.png';
import mishaPhoto from '../images/misha-min.png';
import anyaPhoto from '../images/anya-min.png';
import vasyaPhoto from '../images/vasya-min.png';
import tanyaPhoto from '../images/tanya-min.png';
import alenaPhoto from '../images/alena-min.png';
import marinaPhoto from '../images/marina-min.png';
import egorPhoto from '../images/egor-min.png';
import rodionPhoto from '../images/rodion-min.png';
import baselPhoto from '../images/basel-min.png';
import darinaPhoto from '../images/darina-min.png';
import dashaPhoto from '../images/dasha-min.png';
import arinaPhoto from '../images/arina-min.png';
import mishaFullPhoto from '../images/Миша-min.png'
import vasyaFullPhoto from '../images/Вася-min.png'
import anyaFullPhoto from '../images/Аня-min.png'
import tanyaFullPhoto from '../images/tanya_full-min.png'
import kostyaFullPhoto from '../images/kostya_full-min.png'
import egorFullPhoto from '../images/egor_full-min.png'
import vasyaFullPhotoContact from '../images/vasya_full-min.png';
import anyaFullPhotoContact from '../images/anya_full-min.png'

function teamData(name) {
  switch (name) {
    case 'Костя':
      return {
        name: 'Константин',
        fullname: "Константин Бережков",
        projectRole: "Организовывал работу",
        fullRole: "Менеджер",
        role: "",
        photo: kostyaPhoto,
        fullPhoto: kostyaFullPhoto,
      }
      case 'Миша':
      return {
        name: 'Михаил',
        fullname: "Михаил Хориков",
        projectRole: "Руководил дизайном",
        role: "Руководит дизайном",
        fullRole: "Управляет дизайнерами\u000Aи отвечает за качество,\u000Aбудет на ключевых\u000Aвстречах по проекту",
        photo: mishaPhoto,
        loom: "",
        fullPhoto: mishaFullPhoto,
      }
      case 'Аня':
      return {
        name: 'Анна',
        fullname: "Анна Лебедева",
        projectRole: "Организовывала процесс",
        role: "Руководит проектами",
        fullRole: "Руководит проектами\u000Aи отвечает за сервис.\u000AПодключится к оценке\u000Aи сформирует команду",
        photo: anyaPhoto,
        fullPhotoContact: anyaFullPhotoContact,
        fullPhoto: anyaFullPhoto,
      }
      case 'Вася':
      return {
        name: 'Василий',
        fullname: "Василий Вьялков",
        projectRole: "",
        role: "Руководит студией",
        fullRole: "Руководит студией,будет\u000Aна установочных встречах\u000Aпо проекту",
        photo: vasyaPhoto,
        fullPhotoContact: vasyaFullPhotoContact,
        fullPhoto: vasyaFullPhoto,
      }
      case 'Таня':
      return {
        name: 'Татьяна',
        fullname: "Татьяна Захарова",
        projectRole: "Разрабатывала макеты",
        fullRole: "Разработчик",
        role: "",
        photo: tanyaPhoto,
        fullPhoto: tanyaFullPhoto,
      }
      case 'Марина':
      return {
        name: name,
        projectRole: "",
        role: "",
        photo: marinaPhoto,
      }
      case 'Алёна':
      return {
        name: name,
        projectRole: "Разрабатывала макеты",
        role: "",
        photo: alenaPhoto,
      }
      case 'Егор':
      return {
        name: name,
        projectRole: "Делал дизайн",
        fullRole: "Дизайнер",
        role: "",
        photo: egorPhoto,
        fullPhoto: egorFullPhoto,
      }
      case 'Родион':
      return {
        name: name,
        projectRole: "Делал дизайн",
        role: "",
        photo: rodionPhoto,
      }
      case 'Басель':
      return {
        name: name,
        projectRole: "Делал дизайн",
        role: "",
        photo: baselPhoto,
      }
      case 'Дарина':
      return {
        name: name,
        projectRole: "Делала дизайн",
        role: "",
        photo: darinaPhoto,
      }
      case 'Даша':
      return {
        name: 'Дарья',
        projectRole: "Делала дизайн",
        role: "",
        photo: dashaPhoto,
      }
      case 'Арина':
      return {
        name: 'Арина',
        projectRole: "Делала дизайн",
        role: "",
        photo: arinaPhoto,
      }
  }
}

export default teamData;
