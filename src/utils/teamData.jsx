import kostyaPhoto from '/Users/sdfrthb/vondo/src/images/kostya-min.png';
import mishaPhoto from '/Users/sdfrthb/vondo/src/images/misha-min.png';
import anyaPhoto from '/Users/sdfrthb/vondo/src/images/anya-min.png';

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
        projectRole: "",
        role: "Руководит дизайном",
        photo: mishaPhoto,
      }
      case 'Аня':
      return {
        name: name,
        projectRole: "",
        role: "Руководит проектами",
        photo: anyaPhoto,
      }
  }
}

export default teamData;
