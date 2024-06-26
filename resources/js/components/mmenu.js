import { searchClose, langsClose } from './utils';

export const mmenu = () => {
  const mmenu = document.querySelector('.js-mmenu');
  const burger = document.querySelector('.burger');

  function mmenuToggle() {
    searchClose();
    langsClose();
    burger.classList.toggle('active');
    mmenu.classList.toggle('show');

    if (window.innerWidth < 768) {
      document.body.classList.toggle('no-scroll');
    }
  }

  burger.addEventListener('click', mmenuToggle);
};
