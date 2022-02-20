/*product info section  ------------------*/

//product image slide

const productImg = $('.product-info__main-img');
const productInfoSubImgs = $('.product-info__sub-img ul');
const productNextBtn = $('.product-info__sub-nextBtn');
const productPrevBtn = $('.product-info__sub-prevBtn');

$(document).ready(function () {
  productImg.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    fade: true,
    asNavFor: productInfoSubImgs,
  });

  productInfoSubImgs.slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: productImg,
    dots: false,
    infinite: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    prevArrow: productPrevBtn,
    nextArrow: productNextBtn,
  });

  // 슬라이드 시작되면 페이징 실시간 노출
  const productInfoNumbering = $('.product-info__numbering');

  productImg.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    productInfoNumbering.empty();
    productInfoNumbering.html(
      `<span class="numbering-first">${i}</span>
    <span class="numbering-slice">&#47;</span>
    <span class="numbering-last">${slick.slideCount}</span>`
    );
  });

  //popup

  const productPopup = $('.product-info__pop-up');
  const productPopupLink = $('.product-info__sub-popupLink');
  const popupClose = $('.pop-up__closeBtn');
  const popUp = $('.product-info__pop-list');

  popUp.slick({
    arrows: false,
    dots: true,
    appendDots: '.pop-up__pager',
    speed: 1000,
  });

  productPopupLink.on({
    click: function () {
      productPopup.fadeIn();
    },
  });

  popupClose.on({
    click: function () {
      productPopup.fadeOut();
    },
  });
});

// 수량 선택시 총 가격 계산 data

const productPriceMinus = document.querySelector('.product-info__mo-minus');
const productPricePlus = document.querySelector('.product-info__mo-plus');
const productCount = document.querySelector('.product-info__mo-countProduct');
const productAllPrice = document.querySelector('.product-info__mo-allPrice span');
const productDataId = document.getElementById('productCount');
let productNowNum = productDataId.dataset.productNow;
const v11CompletePrice = 1290000;

function minusProducts(event) {
  if (productNowNum < 1) {
    return;
  } else if (productNowNum === 1) {
    let minus = Number(productNowNum);
    productNowNum = minus;
    changeAllPrice(minus * v11CompletePrice);
  } else {
    let minus = Number(productNowNum) - 1;
    productNowNum = minus;
    changeAllPrice(minus * v11CompletePrice);
  }
}
function plusProducts(event) {
  let plus = Number(productNowNum) + 1;
  productNowNum = plus;
  changeAllPrice(plus * v11CompletePrice);
}
function changeAllPrice(num) {
  let changedPrice = num.toLocaleString();
  productAllPrice.innerHTML = String(changedPrice);
  productCount.innerHTML = String(productNowNum);
}

if (productNowNum >= 0) {
  productPriceMinus.addEventListener('click', minusProducts);
  productPricePlus.addEventListener('click', plusProducts);
} else {
  productNowNum = 0;
  productPriceMinus.removeEventListener('click', minusProducts);
  productPricePlus.removeEventListener('click', plusProducts);
}

const productIcons = document.querySelector('.pruduct-info__icons');

productIcons.addEventListener('click', (event) => {
  let targetIcon = event.target;
  if (targetIcon.nodeName !== 'P') {
    return;
  } else if (targetIcon.className === 'product-info__mo-like' || targetIcon.className === 'product-info__mo-like product-info__mo-like--clicked') {
    targetIcon.classList.toggle('product-info__mo-like--clicked');
  } else if (targetIcon.className === 'product-info__mo-cart' || targetIcon.className === 'product-info__mo-cart product-info__mo-cart--clicked') {
    targetIcon.classList.toggle('product-info__mo-cart--clicked');
  }
});
