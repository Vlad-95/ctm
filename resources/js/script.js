import { utils } from './components/utils';
import { mmenu } from './components/mmenu';
import { accordion } from './components/accordion';
import { sliders } from './components/sliders';
import { map } from './components/map';
import { modal } from './components/modal';
import { form } from './components/form';
import { Fancybox } from '@fancyapps/ui';

document.addEventListener('DOMContentLoaded', function () {
  utils();
  mmenu();
  accordion();
  sliders();
  map();
  modal();
  form();

  Fancybox.bind('[data-fancybox]', {});
});
