import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

export const sliders = () => {
  const mainIntroSLider = new Swiper('.js-main-intro-slider', {
    modules: [Pagination],
    slidesPerView: 1,
    pagination: {
      el: '.main-intro__dots',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="dot ${className}">${index + 1}</span>`;
      },
    },
  });
};
