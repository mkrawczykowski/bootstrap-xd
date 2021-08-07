import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {

  console.log('swiper');
  const topSwiper = new Swiper('.home-page-swiper-1', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2500,
    },
  });
  const bottomSwiper = new Swiper('.home-page-swiper-2', {
    slidesPerView: 4,
    // spaceBetween: 100,
    freeMode: false,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 50
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
      },
      // when window width is >= 1480px
      1480: {
        slidesPerView: 4,
      },
    },
  });
});
