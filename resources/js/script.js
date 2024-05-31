import { Fancybox } from '@fancyapps/ui';
import { tabs } from './components/tabs';
import { utils } from './components/utils';
import { mmenu } from './components/mmenu';
import { accordion } from './components/accordion';
import { sliders } from './components/sliders';
import { map } from './components/map';
import { modal } from './components/modal';
import { form } from './components/form';
import { factory } from './components/factory';
import { cart } from './components/cart';

document.addEventListener('DOMContentLoaded', function () {
  utils();
  mmenu();
  accordion();
  sliders();
  map();
  modal();
  form();
  tabs();
  factory();
  cart();

  Fancybox.bind('[data-fancybox]', {});
});
