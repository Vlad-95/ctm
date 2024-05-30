import { fadeIn, hide } from './utils';
export const tabs = () => {
  const tabs = document.querySelector('.js-tabs');

  tabs.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('js-tab-item')) {
      const tabsItems = document.querySelectorAll('.js-tab-item');
      const tabsContent = document.querySelectorAll('.js-tab-content');
      const targetTabName = target.getAttribute('data-tab');
      const targetTabContent = document.querySelector(
        `.js-tab-content[data-tab="${targetTabName}"]`
      );

      tabsItems.forEach((item) => {
        item.classList.remove('active');
      });

      tabsContent.forEach((item) => {
        item.classList.remove('active');
        hide(item);
      });

      target.classList.add('active');
      targetTabContent.classList.add('active');
      fadeIn(targetTabContent);
    }
  });
};
