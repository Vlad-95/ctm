import {
  fadeIn,
  addToCart,
  removeElemCart,
  incElemList,
  decElemList,
  loadCart,
} from './utils';

export const cart = () => {
  loadCart();

  if (document.querySelector('.cart-page')) {
    // Показ формы, при клике на кнопку "Оформить заказ"
    const cartForm = document.querySelector('.cart-page__form');
    const cartFormToggle = document.querySelector('.js-form-toggle');

    cartFormToggle.addEventListener('click', () => {
      fadeIn(cartForm);
    });
  }

  // добавление в корзину
  const addToCartBtn = document.querySelectorAll('.js-add-to-cart');
  addToCartBtn.forEach((item) => {
    item.addEventListener('click', (e) => {
      item.classList.toggle('in-cart');

      if (item.classList.contains('in-cart')) {
        item.textContent = 'В корзине';
        addToCart(item);
      } else {
        item.textContent = 'В корзину';
        removeElemCart(item);
      }
    });
  });

  // Удаление из корзины
  const removeElemCartBtn = document.querySelectorAll('.js-remove-from-cart');
  removeElemCartBtn.forEach((item) => {
    item.addEventListener('click', () => {
      removeElemCart(item);
    });
  });

  // увеличение количества
  const incElemListBtn = document.querySelectorAll('.js-count .more');
  incElemListBtn.forEach((item) => {
    item.addEventListener('click', () => {
      const countInput = item
        .closest('.js-count')
        .querySelector('.count__input');
      const countInputVal = countInput.value;

      countInput.value = parseInt(countInputVal) + 1;

      incElemList(item);
    });
  });

  // уменьшение количества
  const decElemListBtn = document.querySelectorAll('.js-count .less');
  decElemListBtn.forEach((item) => {
    item.addEventListener('click', () => {
      const countInput = item
        .closest('.js-count')
        .querySelector('.count__input');

      if (countInput.value > 1) {
        countInput.value = parseInt(countInput.value) - 1;
        decElemList(item);
      }
    });
  });
};
