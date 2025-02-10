//탭메뉴 
// 오류 발생 이유: 탭메뉴가 개별적 처리가 아닌 전체가 일괄적으로 동시에 처리됨.
//html 클래스명 변경하여 개별적으로 코드가 적용되도록 수정할 것.
//layout(Css)도 클래스명 수정필요함. 
// 참고한 코드: https://abcdqbbq.tistory.com/88
// 해당 코드는 탭안의 이벤트 타겟명(div에 적힌 것)은 class가 아닌 '#아이디' 로 처리되어있음.
// 현재 활성화 할 탭 컨텐츠를 변수로 받아
// 탭 버튼을 클릭할 때마다 a태그의 href 값을 받아와 해당하는 id값을 가진 컨텐츠를 보여준다.
const tabList = document.querySelectorAll('.tab_menu .list li');
const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
      // 나머지 버튼 클래스 제거
      tabList[j].classList.remove('is_on');

      // 나머지 컨텐츠 display:none 처리
      contents[j].style.display = 'none';
    }

    // 버튼 관련 이벤트
    this.parentNode.classList.add('is_on');

    // 버튼 클릭시 컨텐츠 전환
    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'block';
  });
}



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
