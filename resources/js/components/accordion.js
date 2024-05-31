import { slideDown, slideUp } from './utils';

export const accordion = () => {
  // аккордион выпадающих списков
  const accordion = document.querySelectorAll('.js-accordion');
  accordion.forEach((item) => {
    item.addEventListener('click', (e) => {
      const target = e.target;

      if (target.closest('.js-accordion-toggle')) {
        const parent = target.closest('.js-accordion-item');
        const toggle = parent.querySelector('.js-accordion-toggle');
        parent.classList.toggle('active');
        toggle.classList.toggle('active');

        if (parent.classList.contains('active')) {
          slideDown(parent.querySelector('.js-accordion-dropdown'));
        } else {
          slideUp(parent.querySelector('.js-accordion-dropdown'));
        }

        item.querySelectorAll('.js-accordion-item').forEach((elem) => {
          if (elem !== parent) {
            elem.classList.remove('active');
            elem
              .querySelector('.js-accordion-toggle')
              .classList.remove('active');

            slideUp(elem.querySelector('.js-accordion-dropdown'));
          }
        });
      }
    });
  });
};
