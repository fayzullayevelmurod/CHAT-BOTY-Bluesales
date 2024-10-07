let swiper = new Swiper(".commentSwiper", {
  spaceBetween: 12,
  slidesPerView: 2,
  navigation: {
    nextEl: ".comment-button-next",
    prevEl: ".comment-button-prev",
  },
  pagination: {
    el: ".comment-pagination",
    type: "fraction",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      spaceBetween: 35,
      slidesPerView: 4,
    },
  },
});

let swiper2 = new Swiper(".commenttwoSwiper", {
  spaceBetween: 12,
  slidesPerView: 1,
  navigation: {
    nextEl: ".commenttwo-button-next",
    prevEl: ".commenttwo-button-prev",
  },
  pagination: {
    el: ".commenttwo-pagination",
    type: "fraction",
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1450: {
      spaceBetween: 35,
      slidesPerView: 4,
    },
  },
});
