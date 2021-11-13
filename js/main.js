const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3.6,
  spaceBetween: 30,
  initialSlide: 4,
  speed: 800,
  //ширина экрана
  breakpointsInverse: true,
  dynamicMainBullets: 6,
  breakpoints: {
    
    768: {
      slidesPerVierv: 3,
      initialSlide: 1,
      spaceBetween: 30,
    },
    480: {
      slidesPerVierv: 2,
      initialSlide: 1,
      spaceBetween: 30,
    },
    320: {
      slidesPerVierv: 1,
      initialSlide: 1,
      spaceBetween: 30,
    },
  },

  // пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },


});