export function slideDown(target, duration) {
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

export function slideUp(target, duration) {
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

export function fadeOut(element, duration) {
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

export function fadeIn(element, duration) {
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
