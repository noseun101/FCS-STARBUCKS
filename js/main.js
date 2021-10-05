const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector(' input');

// input 검색란을 focus하는 함수 작성
searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  // 특정요소에 클래스 정보를 가진 객체에 추가함
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// focus가 해제되었을 때 (blur)
searchInputEl.addEventListener('blur', function() {
  // 특정요소에 클래스 정보를 가진 객체에 추가함
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 오류 해결: remove를 안하고 blur를 하였더니 검색란이 blur되지 않았음


const badgeEl = document.querySelector('header .badges');


// 화면 자체에 스크롤을 추가하면 해당 함수를 출력한다.
// 스크롤 낭비 절감: lodash의 throttle() 이용하여 스크롤 제한함.
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {    
    // badge 숨김
    // gsap.to(요소, 지속 시간(sec) , 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,   // 점차 투명해짐
      display: 'none'   // 실제로 요소 안보이게 함
    });
  } else {
    // badge 보임
    gsap.to(badgeEl, .6, {
      opacity: 1,   // 점차 투명해짐
      display: 'block'
    });
  }
}, 300));
// _.throttle(함수, 시간(msec)) 추가. 
// forEach: 반복적인 일을 수행할 때 능률 향상됨
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    // 각 요소가 반복할 때 0.7초뒤에 시작
    delay: (index + 1) * .7,  // 0.7 -> 1.4 -> 2.1 -> 2.7초 마다 실행.
    opacity: 1
  });
});

// Swiper Running Code
// new Swiper(선택자 , 옵션)
new Swiper('.notice-line .swiper-container', {
  // 수직 슬라이드 설정
  direction: 'vertical',
  // 자동 재생 여부 설정
  autoplay: true,
  // 반복 재생 여부 설정
  // 4번째 슬라이드 다음 1번째 슬라이드가 나타남
  loop: true
});

new Swiper('.promotion .swiper-container', {
  // 수평 슬라이드 설정에서 horizontal은 기본값이기에 명시 x
  // direction: 'horizontal',
  // 한번에 보여줄 슬라이드 개수
  slidesPerView: 3,
  // 슬라이드 사이 여백
  spaceBetween: 4, 
  // 1번 슬라이드가 가운데 보이기
  centeredSlides: true,
  // 반복 재생 여부 설정
  loop: true,
  // autoplay: {
  //   delay: 5000  // 0.5초 동안 delay
  // }
  pagination: {
    // 페이지 번호 요소 선택자
    el: '.promotion .swiper-pagination',  
    // 사용자 페이지 번호 요소를 시각적 및 제어 가능
    clickable: true 
  }, 
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 슬라이드 버튼
    // CSS 속성으로 지정해줘야 뷰포트에 출력된다.
    nextEl: '.promotion .swiper-next', // 이후 슬라이드 버튼
  }
});

// promotionToggleBtn을 클릭 했을 때 열기 / 닫기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  // 변수 재할당
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    // isHidePromotion == true -> hidden
    promotionEl.classList.add('hide');
  } else {
    // isHidePromotion == false ->  show
    promotionEl.classList.remove('hide');
  }
});