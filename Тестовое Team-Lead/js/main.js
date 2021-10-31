//  SLIDER:
$(function () {
  $('.slider-box').slick({
    prevArrow: '<img src="images/SVG/arrow-left.svg" alt="" class="slider__arrow slider__arrow-left">',
    nextArrow: '<img src="images/SVG/arrow-right.svg" alt="" class="slider__arrow slider__arrow-right">',
    dots: true,
  });
});


// TIMER:
let time = 1800;
const countDownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
const minutes = Math.floor(time / 60);
let seconds = time % 60;
seconds = seconds < 10 ? "0" + seconds: seconds;
countDownEl.innerHTML = `${minutes}:${seconds}`;
time--;
}

// SCROLL UP

const offset = 500;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = 'stroke-dashoffset 40ms';

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
// updateDashoffset
const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength / height);
  
  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// onScroll
window.addEventListener('scroll', () =>{
  updateDashoffset();

 if (getTop() > offset) {
   scrollUp.classList.add('scroll-up--active');
 } else {
    scrollUp.classList.remove('scroll-up--active');
   }
 

});

// click

scrollUp.addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'

  });
});
