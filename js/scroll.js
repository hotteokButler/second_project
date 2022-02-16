'use strict';

/* qucik menu */

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

/* header UI*/

const header = document.querySelector('#header');
const container = document.querySelector('#container');

function headerfixed() {
  let scrollY = window.scrollY;

  if (scrollY < 500) {
    header.classList.remove('header--fixed-top');
    container.classList.remove('container--margin-top');
    return;
  }
  header.classList.add('header--fixed-top');
  container.classList.add('container--margin-top');
}

function scrollEvents(event) {
  showQuickBox();
  headerfixed();
}

window.addEventListener('scroll', scrollEvents);
goToTopBtn.addEventListener('click', handleGoTop);
