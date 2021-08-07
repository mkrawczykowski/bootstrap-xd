$(window).on("load", function () {
    $(".image-slideshow").each((i, item) => {
       const slideshowIndex = "#imageslideshow" + $('.carousel', item).attr('data-slideshowid');
       const totalItems = $(".carousel-item", slideshowIndex).length;
       getCurrentSlideNumber($(slideshowIndex), totalItems);
       $(slideshowIndex).on("slid.bs.carousel", () => {
         getCurrentSlideNumber(slideshowIndex, totalItems);
       });
     });
   
     function getCurrentSlideNumber(slideshow, totalItems) {
       const currentIndex = $(".carousel-item.active", slideshow).index() + 1;
       const currentSlide = currentIndex < 10 ? "0" + currentIndex : currentIndex;
       const items = totalItems < 10 ? "0" + totalItems : totalItems;
       $(".image-slideshow-control__num", slideshow)
         .html(
           '<span class="image-slideshow-control__value">' +
             currentSlide +
             "</span>" +
             '<span class="image-slideshow-control__separator">/</span>' +
             '<span class="image-slideshow-control__value">' +
             items +
             "</span>"
         );
     }
  });