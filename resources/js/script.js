import { utils } from './components/utils';
import { mmenu } from './components/mmenu';
import { accordion } from './components/accordion';
import { sliders } from './components/sliders';
import { map } from './components/map';

document.addEventListener('DOMContentLoaded', function () {
  utils();
  mmenu();
  accordion();
  sliders();
  map();
});
