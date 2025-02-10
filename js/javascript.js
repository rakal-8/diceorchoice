// 섹션1 swiper slide
const swiper1 = new Swiper(".menu01", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "auto",
  observer: true,
  observeParents: true,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  loopedSlides: 1,
  watchOverflow: true,
  mousewheel: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      loopedSlides: 1,
    },

    768: {
      slidesPerView: "auto",
      loop: true,
      loopedSlides: 1,
    },
  },
});
const swiper2 = new Swiper(".menu02", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "auto",
  observer: true,
  observeParents: true,
  spaceBetween: 10,
  centeredSlides: false,
  loop: true,
  loopedSlides: 1,
  watchOverflow: true,
  mousewheel: true,
  breakpoints: {
    320: {
      slidesPerView: "auto",
      loop: true,
      centeredSlides: true,
      mousewheel: true,
      loopedSlides: 1,
    },

    768: {
      slidesPerView: "auto",
      loop: true,
      loopedSlides: 1,
    },
  },
});
const swiper3 = new Swiper(".menu03", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: "auto",
  observer: true,
  observeParents: true,
  spaceBetween: 10,
  centeredSlides: false,
  loop: true,
  loopedSlides: 1,
  watchOverflow: true,
  mousewheel: true,
  breakpoints: {
    320: {
      slidesPerView: "auto",
      loop: true,
      centeredSlides: true,
      mousewheel: true,
      loopedSlides: 3,
    },

    769: {
      slidesPerView: "auto",
      loop: true,
      loopedSlides: 3,
      mousewheel: true,
    },
  },
});

// 수정방안 : 페이지네이션 고려

// 섹션2 swiper slide
