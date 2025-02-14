//탭메뉴
// 오류 발생 이유: 탭메뉴가 개별적 처리가 아닌 전체가 일괄적으로 동시에 처리됨.
//html 클래스명 변경하여 개별적으로 코드가 적용되도록 수정할 것.
//layout(Css)도 클래스명 수정필요함.
// 참고한 코드: https://abcdqbbq.tistory.com/88
// 해당 코드는 탭안의 이벤트 타겟명(div에 적힌 것)은 class가 아닌 '#아이디' 로 처리되어있음.
// 현재 활성화 할 탭 컨텐츠를 변수로 받아
// 탭 버튼을 클릭할 때마다 a태그의 href 값을 받아와 해당하는 id값을 가진 컨텐츠를 보여준다.

//섹션1 탭메뉴
const tabList = document.querySelectorAll(".tab_menu .list li");
const contents = document.querySelectorAll(".tab_menu .cont_area .cont");
let activeCont = ""; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for (let i = 0; i < tabList.length; i++) {
  tabList[i].querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    for (let j = 0; j < tabList.length; j++) {
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove("is_on");

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = "none";
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add("is_on");

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute("href");
    document.querySelector(activeCont).style.display = "block";
  });
}

//섹션2 탭메뉴 - 위의 코드가 적용되지 않아, 다시 만듦.
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

//섹션4 탭메뉴
const ruleBtns = document.querySelectorAll(".rules > li");
const ruleConts = document.querySelectorAll(".rule_wrap > div");

ruleBtns.forEach((btn2, index) => {
  btn2.addEventListener("click", () => {
    ruleBtns.forEach((otherBtn2) => {
      otherBtn2.classList.remove("active");
    });
    ruleConts.forEach((othercont2) => {
      othercont2.classList.remove("active");
    });
    ruleBtns[index].classList.add("active");
    ruleConts[index].classList.add("active");
  });
});

//섹션1 swiper slide
const swiper1 = new Swiper("#tab1", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesOffsetBefore: 260,
      slidesOffsetAfter: 260,
    },

    480: {
      slidesPerView: "auto",
      slidesOffsetBefore: 310,
      slidesOffsetAfter: -220,
    },

    768: {
      slidesPerView: "auto",
      slidesOffsetBefore: 280,
      slidesOffsetAfter: 270,
    },

    1023: {
      slidesPerView: "auto",
      slidesOffsetBefore: 270,
      slidesOffsetAfter: 189,
    },

    1024: {
      slidesPerView: "auto",
      slidesOffsetBefore: 270,
      slidesOffsetAfter: 190,
    },
  },
});

const swiper2 = new Swiper("#tab2", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesOffsetBefore: 260,
      slidesOffsetAfter: 260,
    },

    480: {
      slidesPerView: "auto",
      slidesOffsetBefore: 310,
      slidesOffsetAfter: -220,
    },

    768: {
      slidesPerView: "auto",
      slidesOffsetBefore: 280,
      slidesOffsetAfter: 270,
    },

    1023: {
      slidesPerView: "auto",
      slidesOffsetBefore: 270,
      slidesOffsetAfter: 189,
    },

    1024: {
      slidesPerView: "auto",
      slidesOffsetBefore: 270,
      slidesOffsetAfter: 190,
    },
  },
});

const swiper3 = new Swiper("#tab3", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesOffsetBefore: 260,
      slidesOffsetAfter: 260,
    },

    480: {
      slidesPerView: "auto",
      slidesOffsetBefore: 310,
      slidesOffsetAfter: -220,
    },

    768: {
      slidesPerView: "auto",
      slidesOffsetBefore: 280,
      slidesOffsetAfter: 270,
    },

    1023: {
      slidesPerView: "auto",
      slidesOffsetBefore: 270,
      slidesOffsetAfter: 189,
    },

    1024: {
      slidesPerView: "auto",
      slidesOffsetBefore: 270,
      slidesOffsetAfter: 190,
    },
  },
});

// 섹션2 swiper slide
// 메뉴만 슬라이드 적용.

// 탭메뉴 영역 이벤트
// 클릭 드래그 스크롤 이벤트
// https://iborymagic.tistory.com/52 참고
// https://just-joat.tistory.com/10

// sec2 메뉴 부분
const slider = document.querySelector(".tips");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("scroll");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("scroll");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("scroll");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});

//sec3 컨텐츠 영역

const slider2 = document.querySelector(".room_wrap");
let isDown2 = false;
let startX2;
let scrollLeft2;

slider2.addEventListener("mousedown", (e) => {
  isDown2 = true;
  slider2.classList.add("scroll");
  startX2 = e.pageX - slider2.offsetLeft;
  scrollLeft2 = slider2.scrollLeft;
});

slider2.addEventListener("mouseleave", () => {
  isDown2 = false;
  slider2.classList.remove("scroll");
});

slider2.addEventListener("mouseup", () => {
  isDown2 = false;
  slider2.classList.remove("scroll");
});

slider2.addEventListener("mousemove", (e) => {
  if (!isDown2) return;
  e.preventDefault();
  const x = e.pageX - slider2.offsetLeft;
  const walk = x - startX2;
  slider2.scrollLeft = scrollLeft2 - walk;
});

//sec4
// 메뉴 영역
