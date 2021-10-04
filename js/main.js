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