const nav = document.querySelector('nav');
const navBtn = document.getElementById('nav-btn');
const slidePrevBtn = document.getElementById('prev-slide');
const slideNextBtn = document.getElementById('next-slide');
const slideItems = document.getElementsByClassName('carousel-item');
let slideIndex = 0;

navBtn.addEventListener('click', function () {
  const isOpen = nav.classList.contains('open');
  navBtn.innerHTML = isOpen
    ? "<img src='./images/icon-hamburger.svg' alt='hamburger menu icon open' />"
    : "<img src='./images/icon-close.svg' alt='hamburger menu icon close' />";
  nav.classList.toggle('open');
});
slidePrevBtn.addEventListener('click', () => {
  if (slideIndex === 0) {
    slideIndex = 2;
  } else {
    slideIndex--;
  }

  for (const slide of slideItems) {
    slide.classList.remove('visible');
  }
  slideItems[slideIndex].classList.add('visible');
});
slideNextBtn.addEventListener('click', () => {
  if (slideIndex === 2) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  for (const slide of slideItems) {
    slide.classList.remove('visible');
  }
  slideItems[slideIndex].classList.add('visible');
});
