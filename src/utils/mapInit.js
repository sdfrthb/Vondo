// ymaps.ready(init);

// export function init () {
//     var myMap = new ymaps.Map("map", {
//         // Центр карты, указываем коордианты
//         center:[55.752161956105276,37.61949517968746],
//         // Масштаб, тут все просто
//         zoom: 9,
//         // Отключаем все элементы управления
//         controls: []
//     });

//     var myGeoObjects = [];

//     // Наша метка, указываем коордианты
//     myGeoObjects = new ymaps.Placemark([55.800151390638646,37.61400201562497],{
//                     balloonContentBody: 'Текст в балуне',
//                     },{
//                     iconLayout: 'default#image',
//                     // Путь до нашей картинки
//                     iconImageHref: 'assets/img/address.png',
//                     // Размер по ширине и высоте
//                     iconImageSize: [70, 70],
//                     // Смещение левого верхнего угла иконки относительно
//                     // её «ножки» (точки привязки).
//                     iconImageOffset: [-35, -35]
//     });

//     var clusterer = new ymaps.Clusterer({
//         clusterDisableClickZoom: false,
//         clusterOpenBalloonOnClick: false,
//     });

//     clusterer.add(myGeoObjects);
//     myMap.geoObjects.add(clusterer);
//     // Отлючаем возможность изменения масштаба
//     myMap.behaviors.disable('scrollZoom');

// }
// // </script>
