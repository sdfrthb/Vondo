import kostyaPhoto from '../images/kostya-min.png';
import mishaPhoto from '../images/misha-min.png';
import anyaPhoto from '../images/anya-min.png';
import vasyaPhoto from '../images/vasya-min.png';
import tanyaPhoto from '../images/tanya-min.png';
import marinaPhoto from '../images/marina-min.png';
import vasyaFullPhoto from '../images/vasya_full-min.png';
import anyaFullPhoto from '../images/anya_full-min.png'

function teamData(name) {
  switch (name) {
    case 'Костя':
      return {
        name: 'Константин',
        projectRole: "Организовывал работу",
        role: "",
        photo: kostyaPhoto,
      }
      case 'Миша':
      return {
        name: 'Михаил',
        fullname: "Михаил Хориков",
        projectRole: "",
        role: "Руководит дизайном",
        fullRole: "Управляет дизайнерами и отвечает за качество, будет на ключевых встречах по проекту",
        photo: mishaPhoto,
        loom: ""
      }
      case 'Аня':
      return {
        name: 'Анна',
        projectRole: "",
        role: "Руководит проектами",
        photo: anyaPhoto,
        fullPhoto: anyaFullPhoto,
      }
      case 'Вася':
      return {
        name: 'Василий',
        projectRole: "",
        role: "Руководит студией",
        photo: vasyaPhoto,
        fullPhoto: vasyaFullPhoto,
      }
      case 'Таня':
      return {
        name: 'Татьяна',
        projectRole: "",
        role: "",
        photo: tanyaPhoto,
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
        projectRole: "",
        role: "",
        photo: marinaPhoto,
      }
      case 'Егор':
      return {
        name: name,
        projectRole: "",
        role: "",
        photo: marinaPhoto,
      }
      case 'Родион':
      return {
        name: name,
        projectRole: "",
        role: "",
        photo: marinaPhoto,
      }
      case 'Басель':
      return {
        name: name,
        projectRole: "",
        role: "",
        photo: marinaPhoto,
      }
      case 'Дарина':
      return {
        name: name,
        projectRole: "",
        role: "",
        photo: marinaPhoto,
      }
      case 'Даша':
      return {
        name: 'Дарья',
        projectRole: "",
        role: "",
        photo: marinaPhoto,
      }
  }
}

export default teamData;
