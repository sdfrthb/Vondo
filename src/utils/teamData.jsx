import kostyaPhoto from '/Users/sdfrthb/vondo/src/images/kostya-min.png';
import mishaPhoto from '/Users/sdfrthb/vondo/src/images/misha-min.png';
import anyaPhoto from '/Users/sdfrthb/vondo/src/images/anya-min.png';
import vasyaPhoto from '/Users/sdfrthb/vondo/src/images/vasya-min.png';
import tanyaPhoto from '/Users/sdfrthb/vondo/src/images/tanya-min.png';
import marinaPhoto from '/Users/sdfrthb/vondo/src/images/marina-min.png';

function teamData(name) {
  switch (name) {
    case 'Костя':
      return {
        name: name,
        projectRole: "Организовывал работу",
        role: "",
        photo: kostyaPhoto,
      }
      case 'Миша':
      return {
        name: name,
        fullname: "Миша Хориков",
        projectRole: "",
        role: "Руководит дизайном",
        fullRole: "Управляет дизайнерами и отвечает за качество, будет на ключевых встречах по проекту",
        photo: mishaPhoto,
        loom: ""
      }
      case 'Аня':
      return {
        name: name,
        projectRole: "",
        role: "Руководит проектами",
        photo: anyaPhoto,
      }
      case 'Вася':
      return {
        name: name,
        projectRole: "",
        role: "Руководит студией",
        photo: vasyaPhoto,
      }
      case 'Таня':
      return {
        name: name,
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
        name: name,
        projectRole: "",
        role: "",
        photo: marinaPhoto,
      }
  }
}

export default teamData;
