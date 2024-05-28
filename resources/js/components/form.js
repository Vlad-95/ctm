import AirDatepicker from 'air-datepicker';
import Inputmask from 'inputmask';

export const form = () => {
  if (document.querySelector('.form').length) {
    const birthDateInput = document.querySelector('.js-birthdate-calendar');

    if (birthDateInput) {
      new AirDatepicker(birthDateInput, {
        // isMobile: true,
        // autoClose: true,
        container: birthDateInput.closest('.form__item'),
        maxDate: new Date(),
        dateFormat: 'dd.MM.yyyy',
      });
    }

    document.querySelectorAll('.js-phone').forEach((item) => {
      new Inputmask('+7 (999) 999-99-99').mask(item);
    });
  }
};