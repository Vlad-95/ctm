export const mmenu = () => {
  const mmenu = document.querySelector('.js-mmenu');
  const burger = document.querySelector('.burger');

  function mmenuToggle() {
    burger.classList.toggle('active');
    mmenu.classList.toggle('show');
  }

  burger.addEventListener('click', mmenuToggle);
};
