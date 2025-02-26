let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// sub-커뮤니티
// 1sec 탭메뉴
const roomBtns = document.querySelectorAll(".room_on_off > li");
const roomConts = document.querySelectorAll(".diceroom_con > div");

roomBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    roomBtns.forEach((otherBtn) => {
      otherBtn.classList.remove("active");
    });
    roomConts.forEach((othercont) => {
      othercont.classList.remove("active");
    });
    roomBtns[index].classList.add("active");
    roomConts[index].classList.add("active");
  });
});

//sec2 - 슬라이드
let swiper2 = new Swiper(".post_wrap", {
  // spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
