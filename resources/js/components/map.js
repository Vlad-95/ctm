export const map = () => {
  let myMap;
  let objectManager;

  if (document.querySelector('#map')) {
    ymaps.ready(init);

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
      const placeholdersImage = [
        {
          group: 'offices',
          default: '/img/icons/placeholder-violet.png',
          active: '/img/icons/placeholder-violet_big.png',
        },
        {
          group: 'productions',
          default: '/img/icons/placeholder-blue.png',
          active: '/img/icons/placeholder-blue_big.png',
        },
        {
          group: 'platforms',
          default: '/img/icons/placeholder-green.png',
          active: '/img/icons/placeholder-green_big.png',
        },
      ];

      document
        .querySelectorAll('.map-block .plate__item .item')
        .forEach((item, index) => {
          const dataGroup = item.parentElement.getAttribute('data-group');
          const dataCoords = item.getAttribute('data-coord').split(',');

          objects.push({
            type: 'Feature',
            id: index,
            group: dataGroup,
            geometry: {
              type: 'Point',
              coordinates: dataCoords,
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: placeholdersImage.find(
                (obj) => obj.group === dataGroup
              ).default,
              iconImageSize: [41, 34],
              iconImageOffset: [-20, -20],
            },
          });
        });

      objectManager.add(objects);
      myMap.geoObjects.add(objectManager);

      myMap.setBounds(objectManager.getBounds());
      myMap.setZoom(myMap.getZoom());

      // клик по метке, чтобы подсветить элемент в списке
      objectManager.objects.events.add('click', function (e) {
        const objectId = e.get('objectId');
        const coords = e.get('coords');
        const itemInList = document.querySelector(
          `.map-block .plate__item .item[data-id="${objectId}"]`
        );
        const itemInListGroup =
          itemInList.parentElement.getAttribute('data-group');

        // перемещение карты
        myMap.panTo(coords);

        objectManager.objects.setObjectOptions(objectId, {
          iconImageHref: placeholdersImage.find(
            (obj) => obj.group === itemInListGroup
          ).active,
          iconImageSize: [63, 51],
          iconImageOffset: [-30, -35],
        });

        objectManager.objects.each(function (obj) {
          console.log(obj);
          if (obj.id !== objectId) {
            objectManager.objects.setObjectOptions(obj.id, {
              iconImageHref: placeholdersImage.find(
                (elem) => elem.group === obj.group
              ).default,
              iconImageSize: [41, 34],
              iconImageOffset: [-20, -20],
            });
          }
        });

        itemInList.click();
      });
    }

    // клик по табам в карте
    const tabs = document.querySelector('.map-block .plate__tabs');
    const contentContainer = document.querySelector(
      '.map-block .plate__content'
    );

    tabs.addEventListener('click', function (e) {
      const tabsContainer = e.target.closest('.plate__tabs');
      const target = e.target;

      if (target.tagName === 'LI' && !target.classList.contains('active')) {
        const targetGroup = target.getAttribute('data-group');
        const contentItemTarget = contentContainer.querySelector(
          `[data-group="${targetGroup}"]`
        );

        tabsContainer.querySelectorAll('li').forEach((item) => {
          if (item.classList.contains('active')) {
            item.classList.remove('active');
          }
        });

        contentContainer.querySelectorAll('.plate__item').forEach((item) => {
          if (item.classList.contains('active')) {
            item.classList.remove('active');
          }
        });

        target.classList.add('active');
        contentItemTarget.classList.add('active');
        contentContainer.classList.add('active');

        setTimeout(() => {
          myMap.container.fitToViewport();
        }, 300);
      }
    });

    // клик по элементам в списке
    document
      .querySelectorAll('.map-block .plate__item .item')
      .forEach((item) => {
        item.addEventListener('click', function () {
          const currentGroup = item.parentElement.getAttribute('data-group');

          tabs.querySelectorAll('li').forEach((item) => {
            if (item.getAttribute('data-group') === currentGroup) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          });

          contentContainer.querySelectorAll('.plate__item').forEach((item) => {
            if (item.getAttribute('data-group') === currentGroup) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          });
          contentContainer.classList.add('active');

          setTimeout(() => {
            myMap.container.fitToViewport();
          }, 300);
        });
      });
  }
};
