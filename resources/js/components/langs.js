import { searchClose, mmenuClose } from './utils';

export const langs = () => {
  const langs = document.querySelector('.header__langs');
  const langsToggle = langs.querySelector('.current');
  const langsDropdown = langs.querySelector('.dropdown');

  langsToggle.addEventListener('click', () => {
    mmenuClose();
    searchClose();
    langsToggle.classList.toggle('active');

    if (langsToggle.classList.contains('active')) {
      langsDropdown.classList.toggle('show');
    } else {
      langsDropdown.classList.toggle('show');
    }
  });
};
