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

//sub - guide

// sec2 - 탭메뉴
const tipBtns = document.querySelectorAll(".tip_src > li");
const tipConts = document.querySelectorAll(".master_tip_con > div");

tipBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    tipBtns.forEach((otherBtn) => {
      otherBtn.classList.remove("active");
    });
    tipConts.forEach((othercont) => {
      othercont.classList.remove("active");
    });
    tipBtns[index].classList.add("active");
    tipConts[index].classList.add("active");
  });
});

//sec3 - 탭메뉴
const tipBtns2 = document.querySelectorAll(".playtip_src > li");
const tipConts2 = document.querySelectorAll(".play_tip_con > div");

tipBtns2.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    tipBtns2.forEach((otherBtn) => {
      otherBtn.classList.remove("active");
    });
    tipConts2.forEach((othercont) => {
      othercont.classList.remove("active");
    });
    tipBtns2[index].classList.add("active");
    tipConts2[index].classList.add("active");
  });
});

//sec4 - 탭메뉴
const assetBtns2 = document.querySelectorAll(".assets_category > li");
const assetConts2 = document.querySelectorAll(".assets_con > div");

assetBtns2.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    assetBtns2.forEach((otherBtn) => {
      otherBtn.classList.remove("active");
    });
    assetConts2.forEach((othercont) => {
      othercont.classList.remove("active");
    });
    assetBtns2[index].classList.add("active");
    assetConts2[index].classList.add("active");
  });
});
