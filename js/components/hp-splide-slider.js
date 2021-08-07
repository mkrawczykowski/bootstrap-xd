import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

document.addEventListener('DOMContentLoaded', function () {

  //nawigacja
  var carouselnav = new Splide('#carouselnav', {
    type: 'loop',
    gap: 10,
    perPage: 4,
    perMove: 1,
    isNavigation: true,
    pagination: false,
    arrows: false,
  }).mount();

  $('.splide__slide').on("click", function () {
    const slideTo = $(this).data('slide-to');
    carouselnav.go(slideTo);
    $("#textcarousel").carousel(slideTo);
    $("#imagecarousel").carousel(slideTo);
    $("#textcarousel").carousel('pause');
    $("#imagecarousel").carousel('pause');
  });

  $('.carousel-indicators__item').on("click", function () {
    const slideTo = $(this).data('slide-to');
    carouselnav.go(slideTo);
    $("#textcarousel").carousel(slideTo);
    $("#textcarousel").carousel('pause');
  })

  //zdjęcia
  // var tertiarySlider = new Splide('#tertiary-slider', {
  //   type: 'fade',
  //   gap: 10,
  //   pagination: false,
  //   arrows: false,
  // }).mount();

  // //kolorowe linie
  // var quaternarySlider = new Splide('#quaternary-slider', {
  //   isNavigation: true,
  //   pagination: false,
  //   arrows: false,
  // }).mount();

  // primarySlider.sync(secondarySlider).mount();
  // secondarySlider.sync(carousel).mount();
  // tertiarySlider.sync(quaternarySlider).mount();
  // quaternarySlider.sync(primarySlider).mount();
});