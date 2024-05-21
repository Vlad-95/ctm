import { options } from 'less';
import { slideDown, slideUp, fadeOut } from './utils';

export const map = () => {
  let myMap;
  let objectManager;

  if (document.querySelector('#map')) {
    ymaps.ready(init);
  }

  function init() {
    myMap = new ymaps.Map(
      'map',
      {
        center: [55.76, 37.64], // Москва
        zoom: 10,
        controls: [],
      },
      {
        searchControlProvider: 'yandex#search',
      }
    );
    myMap.behaviors.disable('scrollZoom');
    myMap.controls.add('zoomControl', {
      position: { right: '20px', top: '20px' },
    });

    objectManager = new ymaps.ObjectManager();
    let objects = [];

    document
      .querySelectorAll('.map-block .plate__item .item')
      .forEach((item, index) => {
        const dataGroup = item.getAttribute('data-group');
        const dataCoords = item.getAttribute('data-coord').split(',');
        let placeholderImage;

        switch (dataGroup) {
          case 'offices':
            placeholderImage = '/img/icons/placeholder-violet.png';
            break;
          case 'productions':
            placeholderImage = '/img/icons/placeholder-blue.png';
            break;
          case 'platforms':
            placeholderImage = '/img/icons/placeholder-green.png';
            break;
        }

        console.log(dataGroup);
        objects.push({
          type: 'Feature',
          id: index,
          geometry: {
            type: 'Point',
            coordinates: dataCoords,
          },
          options: {
            iconLayout: 'default#image',
            iconImageHref: placeholderImage,
            iconImageSize: [41, 34],
            iconImageOffset: [-20, -20],
          },
        });
      });

    objectManager.add(objects);
    myMap.geoObjects.add(objectManager);

    myMap.setBounds(objectManager.getBounds());
    myMap.setZoom(myMap.getZoom());

    console.log(objects);

    // клик по метке, чтобы подсветить элемент в списке
    objectManager.objects.events.add('click', function (e) {
      const objectId = e.get('objectId');
      const coords = e.get('coords');
      const itemInList = document.querySelector(
        `.map-block .plate__item .item[data-id="${objectId}"]`
      );
      const itemInListGroup = itemInList.getAttribute('data-group');
      // перемещение карты
      myMap.panTo(coords);

      itemInList.click();
      console.log(itemInListGroup);

      // objectManager.objects.setObjectOptions(objectId, {
      //   iconImageHref: '/img/icons/placeholder-active.png',
      // });

      // $(
      //   `.plate .plate__item .block[data-id="${objectId}"] .block__name`
      // ).trigger('click');

      // $('.plate .plate__wrap').animate(
      //   {
      //     scrollTop: $(
      //       `.plate .plate__item .block[data-id="${objectId}"]`
      //     ).position().top,
      //   },
      //   300
      // );
    });
  }

  // клик по табам в карте
  const tabs = document.querySelector('.map-block .plate__tabs');

  tabs.addEventListener('click', function (e) {
    const tabsContainer = e.target.closest('.plate__tabs');
    const target = e.target;

    if (target.tagName === 'LI' && !target.classList.contains('active')) {
      const targetClass = target.classList[0];
      const contentContainer = document.querySelector(
        '.map-block .plate__content'
      );
      const contentItemTarget = contentContainer.querySelector(
        `.${targetClass}`
      );

      tabsContainer.querySelectorAll('li').forEach((item) => {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        }
      });

      contentContainer.querySelectorAll('.plate__item').forEach((item) => {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
          // slideUp(item, 300);
        }
      });

      target.classList.add('active');
      contentItemTarget.classList.add('active');
      contentContainer.classList.add('active');
      // slideDown(contentItemTarget, 300);

      setTimeout(() => {
        myMap.container.fitToViewport();
      }, 300);
    }
  });
};
