import { mmenu } from './components/mmenu';
import { accordion } from './components/accordion';
import { sliders } from './components/sliders';
import { map } from './components/map';
import { teamList } from './components/team-list';

document.addEventListener('DOMContentLoaded', function () {
  mmenu();
  accordion();
  sliders();
  map();
  teamList();
});
