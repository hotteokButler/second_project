'use strict';

const quickBox = document.querySelector('.quick-box');
const goToTopBtn = quickBox.querySelector('.quick-box__top');

function showQuickBox() {
  let scrollY = window.scrollY;
  if (scrollY !== 0) {
    quickBox.classList.add('active');
  } else {
    quickBox.classList.remove('active');
  }
}

function handleGoTop(event) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

window.addEventListener('scroll', showQuickBox);
goToTopBtn.addEventListener('click', handleGoTop);
