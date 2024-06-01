import AirDatepicker from 'air-datepicker';
import Inputmask from 'inputmask';
import SlimSelect from 'slim-select';
import axios from 'axios';

import { mmenuClose, langsClose } from './utils';

export const form = () => {
  // открытие/закрытие формы поиска
  const searchToggleBtn = document.querySelector('.js-search-toggle');
  const searchForm = document.querySelector('.js-search-form');

  searchToggleBtn.addEventListener('click', () => {
    mmenuClose();
    langsClose();
    searchToggleBtn.classList.toggle('active');

    if (searchToggleBtn.classList.contains('active')) {
      searchForm.classList.add('show');
    } else {
      searchForm.classList.remove('show');
    }
  });

  if (document.querySelector('.form').length) {
    const phoneInput = document.querySelectorAll('.js-phone');
    const birthDateInput = document.querySelector('.js-birthdate-calendar');
    const file = document.querySelectorAll('.js-file');
    const select = document.querySelectorAll('.form .select');

    if (birthDateInput) {
      new AirDatepicker(birthDateInput, {
        // isMobile: true,
        // autoClose: true,
        container: birthDateInput.closest('.form__item'),
        maxDate: new Date(),
        dateFormat: 'dd.MM.yyyy',
      });
    }

    phoneInput.forEach((item) => {
      new Inputmask('+7 (999) 999-99-99').mask(item);
    });

    // показ имени файла
    file.forEach((item) => {
      item.addEventListener('change', (e) => {
        e.target.closest('.file').querySelector('p').textContent =
          e.target.files[0].name;
      });
    });

    // Селект
    select.forEach((item) => {
      new SlimSelect({
        select: item,
        settings: {
          contentPosition: 'absolute',
          showSearch: false,
          placeholderText: 'Выберите пункт выдачи',
        },
      });
    });

    // изменение способа доставки
    const deliveryFormItem = document.querySelector('.form__item_delivery');
    const deliveryRadios = document.querySelectorAll('.form__radio input');
    const deliveryInput = document.querySelector('.input[data-type="1"]');
    const deliverySelect = document.querySelector('.select[data-type="0"]');
    deliveryRadios.forEach((item) => {
      item.addEventListener('change', (e) => {
        if (e.target.value === '1') {
          deliveryInput.disabled = false;
          deliverySelect.disabled = true;
        } else {
          deliveryInput.disabled = true;
          deliverySelect.disabled = false;
        }
        console.log(deliveryInput);
      });
    });
  }

  // для отправки запросов Аяксом использовать axios https://axios-http.com/
};
