import { slideDown, slideUp } from './utils.js';
export const factory = () => {
  // функция обратного отсчета
  function countdown(timer, item) {
    const currentDate = new Date();
    const targetDate = new Date(parseInt(timer));
    const daysContainer = item.querySelector('.js-timer-days');
    const hoursContainer = item.querySelector('.js-timer-hours');
    const minutesContainer = item.querySelector('.js-timer-minutes');

    const timeDifference = targetDate.getTime() - currentDate.getTime();

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );

      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      daysContainer.textContent = days;
      hoursContainer.textContent = formattedHours;
      minutesContainer.textContent = formattedMinutes;
    }
  }

  const timers = document.querySelectorAll('.js-timer');

  timers.forEach((item) => {
    const timer = item.getAttribute('data-timer');

    setInterval(() => {
      countdown(timer, item);
    }, 1000);
  });

  // Показ характеристик
  const chars = document.querySelectorAll('.item__chars');
  const charsToggle = document.querySelectorAll('.item__chars-toggle');

  chars.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('item__chars-toggle')) {
        e.target.classList.toggle('active');

        if (e.target.classList.contains('active')) {
          e.target.textContent = 'Скрыть';
          slideDown(item.querySelector('.item__chars-hidden'));
        } else {
          e.target.textContent = 'Показать все';
          slideUp(item.querySelector('.item__chars-hidden'));
        }
      }
    });
  });
};
