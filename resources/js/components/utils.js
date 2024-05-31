import Cookies from 'js-cookie';

export function slideDown(target, duration = 300) {
  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = 'border-box';
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = `${duration}ms`;
  target.style.height = `${height}px`;
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

export function slideUp(target, duration = 300) {
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = `${duration}ms`;
  target.style.boxSizing = 'border-box';
  target.style.height = `${target.offsetHeight}px`;
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    //alert("!");
  }, duration);
}

export function fadeOut(element, duration = 300) {
  element.style.transitionProperty = 'opacity';
  element.style.transitionDuration = `${duration}ms`;
  element.style.opacity = '1';
  element.style.display = 'block';

  requestAnimationFrame(function () {
    element.style.opacity = '0';
  });

  element.addEventListener('transitionend', function () {
    element.style.transition = '';
    element.style.opacity = '';
    element.style.display = 'none';
  });
}

export function fadeIn(element, duration = 300) {
  element.style.transitionProperty = 'opacity';
  element.style.transitionDuration = `${duration}ms`;
  element.style.opacity = '0';
  element.style.display = 'block';

  requestAnimationFrame(function () {
    element.style.opacity = '1';
  });

  element.addEventListener('transitionend', function () {
    element.style.transition = '';
    element.style.opacity = '';
    element.style.display = 'block';
  });
}

export function hide(element, duration = 300) {
  element.style.transitionProperty = 'opacity';
  element.style.transitionDuration = `${duration}ms`;
  element.style.opacity = '';
  element.style.display = 'none';
}

// export function show(element) {
//   element.style.transition = '';
//   element.style.opacity = '';
//   element.style.display = 'block';
// }

export function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function peopleNameSep(item) {
  const name = item.textContent.trim();
  const nameArr = name.split(' ');
  return `${nameArr[0]}</br>${nameArr[1]} ${nameArr[2]}`;
}

export const utils = () => {
  // Перенос фамилии у членов команды
  if (document.querySelectorAll('.js-name-sep').length) {
    document.querySelectorAll('.js-name-sep').forEach((item) => {
      item.innerHTML = peopleNameSep(item);
    });
  }

  // Числа с разделением на разряды
  if (document.querySelectorAll('.js-digit-number').length) {
    document.querySelectorAll('.js-digit-number').forEach((item) => {
      item.textContent = numberWithSpaces(item.textContent);
    });
  }
};

let cart = [];

// Добавление в корзину
export function addToCart(elem) {
  const id = elem.getAttribute('data-id');
  const count = elem
    .closest('tr')
    .querySelector('.js-count .count__input').value;

  cart.push({ id, count: +count });

  console.log(cart);
  saveCart();
  showCart();
}

// удаления одного элемента
export function removeElemCart(elem) {
  const id = elem.getAttribute('data-id');
  cart = cart.filter((elem) => elem.id != id);

  console.log(cart);
  saveCart();
  showCart();
}

export function incElemList(elem) {
  const id = elem.getAttribute('data-id');
  const elemInCart = cart.find((elem) => elem.id == id);

  if (elemInCart) {
    elemInCart.count += 1;
    console.log(cart);
  }

  saveCart();
  showCart();
}

export function decElemList(elem) {
  const id = elem.getAttribute('data-id');
  const elemInCart = cart.find((elem) => elem.id == id);

  if (elemInCart) {
    if (elemInCart.count > 1) {
      elemInCart.count -= 1;
    } else {
      cart = cart.filter((elem) => elem.id != id);
    }
  }

  saveCart();
  showCart();
}

export function incElemCart(elem) {
  let id = $(elem).attr('data-id');
  const elemInCart = cart.find((elem) => elem.id == id);

  elemInCart.count += 1;

  saveCart();
}

export function decElemCart(elem) {
  let id = $(elem).attr('data-id');
  const elemInCart = cart.find((elem) => elem.id == id);

  elemInCart.count -= 1;

  saveCart();
}

// сохранение в корзину
export function saveCart() {
  Cookies.set('cart', JSON.stringify(cart), 7);
}

// Показ счетчика корзины
export function showCart() {
  const countItems = cart.length;

  const headerCartCount = document.querySelector('.header__cart .cart span');

  if (countItems) {
    headerCartCount.textContent = countItems;
  } else {
    headerCartCount.textContent = '0';
  }
}

// Загрузка корзины
export function loadCart() {
  if (Cookies.get('cart')) {
    cart = JSON.parse(Cookies.get('cart'));
  }

  showCart();

  // отмечаем добавленные элементы
  if (document.querySelectorAll('.js-add-to-cart').length) {
    cart.forEach((elem) => {
      const addToCartBtn = document.querySelector(
        `.js-add-to-cart[data-id="${elem.id}"]`
      );
      const countInput = addToCartBtn
        .closest('tr')
        .querySelector('.js-count .count__input');

      countInput.value = elem.count;
      addToCartBtn.classList.add('in-cart');

      addToCartBtn.textContent = 'В корзине';
    });
  }
}
