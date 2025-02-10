document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".swiper-slide");

  let activeIndex = 1; // 초기 중앙 카드 (0: 왼쪽, 1: 중앙, 2: 오른쪽)
  let isReset = false; // 초기화 상태 여부

  function updateSlideClasses() {
    slides.forEach((slide, index) => {
      slide.classList.remove(
        "active",
        "left",
        "right",
        "moving-left",
        "moving-right",
        "reset"
      );

      if (isReset) {
        slide.classList.add("reset"); // 원래 상태로 복귀
      } else {
        if (index === activeIndex) {
          slide.classList.add("active");
        } else if (index < activeIndex) {
          slide.classList.add("left");
        } else {
          slide.classList.add("right");
        }
      }
    });
  }

  // slides.forEach((slide, index) => {
  //   slide.addEventListener("click", function () {
  //     if (index === activeIndex) {
  //       // 같은 카드 클릭 시 원래 상태로 복귀
  //       isReset = false;
  //       activeIndex = 1; // 중앙 카드 초기화
  //     } else {
  //       isReset = false;
  //       if (index < activeIndex) {
  //         slides[activeIndex].classList.add("moving-right"); // 중앙 → 오른쪽 이동
  //       } else {
  //         slides[activeIndex].classList.add("moving-left"); // 중앙 → 왼쪽 이동
  //       }
  //       activeIndex = index;
  //     }
  //     updateSlideClasses();
  //   });
  // });

  slides.forEach((slide, index) => {
    slide.addEventListener("click", function () {
      if (index === activeIndex) {
        return; // 이미 활성화된 카드를 클릭하면 아무 동작도 하지 않음
      }

      // 새 카드 선택 시 기존 카드 위치 이동
      if (index < activeIndex) {
        slides[activeIndex].classList.add("moving-right"); // 중앙 → 오른쪽 이동
      } else {
        slides[activeIndex].classList.add("moving-left"); // 중앙 → 왼쪽 이동
      }

      activeIndex = index;
      updateSlideClasses();
    });
  });

  // document.querySelectorAll(".tabmenu ul.menu li").forEach((tab, tabIndex) => {
  //   tab.addEventListener("click", function () {
  //     document
  //       .querySelectorAll(".menu1, .menu2, .menu3")
  //       .forEach((menu, index) => {
  //         if (index === tabIndex) {
  //           menu.classList.add("active");
  //         } else {
  //           menu.classList.remove("active");
  //         }
  //       });

  //     // 현재 슬라이드의 reset 상태 해제
  //     isReset = false;
  //     updateSlideClasses();
  //   });
  // });

  document.querySelectorAll(".tabmenu ul.menu li").forEach((tab, tabIndex) => {
    tab.addEventListener("click", function () {
      document
        .querySelectorAll(".menu1, .menu2, .menu3")
        .forEach((menu, index) => {
          if (index === tabIndex) {
            menu.classList.add("active");
          } else {
            menu.classList.remove("active");
          }
        });

      // 현재 활성화된 카드를 유지
      updateSlideClasses();
    });
  });

  updateSlideClasses(); // 초기화 실행
});
