// sub - TRPG란?
// sec1 - 슬라이드(세로형)
let vertical = new Swiper(".trpg_wrap", {
  spaceBetween: 10,
  mousewheel: true,
  keyboard: true,
  resistanceRatio: 0,
  direction: "vertical",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//sec3 - 탭메뉴

const tabBtns = document.querySelectorAll(".tips > li");
const tabConts = document.querySelectorAll(".tip_wrap > div");

tabBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((otherBtn) => {
      otherBtn.classList.remove("active");
    });
    tabConts.forEach((othercont) => {
      othercont.classList.remove("active");
    });
    tabBtns[index].classList.add("active");
    tabConts[index].classList.add("active");
  });
});
