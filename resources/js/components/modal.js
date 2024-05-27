export function openModal(modal) {
  const body = document.querySelector('body');
  modal.style.display = 'block';
  modal.style.opacity = 0;
  body.classList.add('no-scroll');

  setTimeout(function () {
    modal.style.opacity = 1;
  }, 300);
}

export function closeModal(modal) {
  const body = document.querySelector('body');
  modal.style.display = 'none';
  body.classList.remove('no-scroll');
}

export const modal = () => {
  const modalsOpenTrigger = document.querySelectorAll('[data-trigger]');
  const modalsCloseTrigger = document.querySelectorAll('.js-modal-close');

  document.addEventListener('click', (e) => {
    if (e.target.matches('[data-trigger]')) {
      const modal = document.querySelector(
        `[data-modal="${e.target.dataset.trigger}"]`
      );
      openModal(modal);
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.matches('.js-modal-close')) {
      closeModal(e.target.closest('[data-modal]'));
    }
  });
};
