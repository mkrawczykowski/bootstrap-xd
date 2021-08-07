document.addEventListener('DOMContentLoaded', function () {

  const lightboxButton = document.querySelector('[data-enable-lightbox]');
  const lightbox = document.querySelector('.lightbox');
  lightboxButton.addEventListener('click', function () {
    document.documentElement.style.overflow = "hidden";
    lightbox.style.display = 'block';
  });
})
