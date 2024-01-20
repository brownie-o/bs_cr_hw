// carousel - swiper
const swiper = new Swiper("#swiper01", {
  spaceBetween: 30,
  effect: "fade",
  rewind: true,
  loop: true,
  // direction: "horizontal",
  // mousewheel: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'bullets',
    dynamicBullets: true, // 下方指示器動態效果
  }
})


// #section01 viedo - swiper
$(document).ready(function () {
  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
  });
});

const swiper2 = new Swiper("#swiper02", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    920: {
      slidesPerView: 3,
    },
  },
})

