let swiper = new Swiper(".bluesalesSwiper", {
  spaceBetween: 12,
  slidesPerView: 2,
  navigation: {
    nextEl: ".bluesales-button-next",
    prevEl: ".bluesales-button-prev",
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

let swiper2 = new Swiper(".bluesalestwoSwiper", {
  spaceBetween: 12,
  slidesPerView: 1,
  navigation: {
    nextEl: ".bluesalestwo-button-next",
    prevEl: ".bluesalestwo-button-prev",
  },
  pagination: {
    el: ".bluesalestwo-pagination",
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
