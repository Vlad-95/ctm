export const map = () => {
  ymaps.ready(init);

  function init() {
    let myMap = new ymaps.Map(
      'map',
      {
        center: [55.76, 37.64], // Москва
        zoom: 10,
      },
      {
        searchControlProvider: 'yandex#search',
      }
    );
  }

  // клик по табам в карте
  const tabs = document.querySelector('.map-block .plate__tabs');

  tabs.addEventListener('click', function (e) {
    const parent = e.target.closest('.plate__tabs');
    const target = e.target;
    const targetClass = target.classList[0];
    // const siblings

    parent.querySelectorAll('li').forEach((item) => {
      item.classList.remove('active');
    });

    target.classList.add('active');
    // if (e.target.classList.contains('plate__tab')) {
    //   tabs.querySelector('.plate__tab_active').classList.remove('plate__tab_active');
    //   e.target.classList.add('plate__tab_active');
    // }
  });
};
