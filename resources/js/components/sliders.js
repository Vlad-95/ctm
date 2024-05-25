import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

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

  const gallerySlider = new Swiper('.js-gallery-slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.gallery__arrow.next',
      prevEl: '.gallery__arrow.prev',
    },
    breakpoints: {
      577: {
        slidesPerView: 2,
      },
      769: {
        slidesPerView: 3,
      },
    },
  });
};
