//index.html
//main_slide section---------------------------------

const mainSlide = $('.main-slid__img');
const mainSlideImgs = mainSlide.find('img');
const mainSlidePause = $('.main-slid__pager-btn').find('.main-slid__pause');
const mainSlidePlay = $('.main-slid__pager-btn').find('.main-slid__play');
const mainSlideTitle = $('.main-slid__title');
const mainSlideDesc = $('.main-slid__desc');

mainSlide.slick({
  mobileFirst: true,
  prevArrow: '.main-slid__pager-btn .main-slid__prev',
  nextArrow: '.main-slid__pager-btn .main-slid__next',
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
});

mainSlidePause.click(function () {
  mainSlide.slick('slickPause');
});
mainSlidePlay.click(function () {
  mainSlide.slick('slickPlay');
});

const mainSlideTextBox = document.querySelector('.main-slid__txt');
const mainSlidePrevBtn = document.querySelector('.main-slid__prev');
const mainSlideNextBtn = document.querySelector('.main-slid__next');
const slideTitle = mainSlideTextBox.childNodes[3];
const slideDesc = mainSlideTextBox.childNodes[5];
let activeSlides = document.querySelectorAll('.slick-track > img');
//  pager
const pagerStartNum = document.querySelector('.main-slid__pager-first');
const pagerFinishNum = document.querySelector('.main-slid__pager-end');
//pc pager
const pcPager = document.querySelector('.main-slid__move');
const pcPagerBar = document.querySelector('.main-slid__move > p');
//mo,tablet pager
const moPager = document.querySelector('.main-slid__pager');
const moPagerBar = document.querySelector('.main-slide__pager--move');

let mainSlideImgAndTxt = [
  {
    id: '1',
    titleUrl: 'url(../img/purifier-humidify-cool-n.png)',
    text: '포름알데히드를 지속적으로 감지하고 파괴 초미세먼지를 99.5% 제거',
    slideSrc: 'img/main-bn01.jpg',
  },
  {
    id: '2',
    titleUrl: 'url(../img/dyson-corrale-ms02.png)',
    text: '지능형 열제어 시스템으로 스마트하게 손상은 반으로 줄이고 정교한 스타일링을 연출해보세요',
    slideSrc: 'img/main-bn02.jpg',
  },
  {
    id: '3',
    titleUrl: 'url(../img/dyson-supersonic_ms03.png)',
    text: '멀티플라이어 기술로 만들어낸 집중된 바람으로 빠른 건조와 정교한 스타일링을 경험하세요',
    slideSrc: 'img/main-bn03.jpg',
  },
  {
    id: '4',
    titleUrl: 'url(../img/lightcycle-morph-ms04.png)',
    text: '스마트한 밝기 조절 시스템과 적은 블루라이트와 편안함을 선사하는 조명의 혁신을 경험하세요',
    slideSrc: 'img/main-bn04.jpg',
  },
];

pagerFinishNum.innerText = String(mainSlideImgAndTxt.length);

function slideTxtSwitchOption(array, index) {
  slideTitle.style.backgroundImage = array[index].titleUrl;
  slideDesc.innerText = array[index].text;
  if (window.innerWidth > 1200) {
    let pcPagerWidth = pcPager.getBoundingClientRect().width;

    pagerStartNum.innerText = array[index].id;
    pcPagerBar.style.width = `${(pcPagerWidth / array.length) * (index + 1)}px`;
  } else {
    let moPagerWidth = moPager.getBoundingClientRect().width;

    moPagerBar.style.width = `${(moPagerWidth / array.length) * (index + 1)}px`;
  }
}
function changeSlideTxt() {
  for (const item of activeSlides) {
    let currentSlideImg = item.getAttribute('src');
    let isAreaHidden = item.getAttribute('aria-hidden');

    if (isAreaHidden === 'false') {
      switch (currentSlideImg) {
        case mainSlideImgAndTxt[0].slideSrc:
          slideTxtSwitchOption(mainSlideImgAndTxt, 0);
          break;
        case mainSlideImgAndTxt[1].slideSrc:
          slideTxtSwitchOption(mainSlideImgAndTxt, 1);
          break;
        case mainSlideImgAndTxt[2].slideSrc:
          slideTxtSwitchOption(mainSlideImgAndTxt, 2);
          break;
        case mainSlideImgAndTxt[3].slideSrc:
          slideTxtSwitchOption(mainSlideImgAndTxt, 3);
          break;
      }
    }
  }
}

// 요소 변화 감지 설정
const target = document.querySelector('.slick-track');
let observer = new MutationObserver((mutations) => {
  changeSlideTxt();
});

let config = {
  childList: true, // 타겟의 하위 요소 추가 및 제거 감지
  attributes: true, // 타켓의 속성 변경를 감지
  characterData: false, // 타겟의 데이터 변경 감지
  subtree: false, // 타겟의 자식 노드 아래로도 모두 감지
  attributeOldValue: false, // 타겟의 속성 변경 전 속성 기록
  characterDataOldValue: false, // 타겟의 데이터 변경 전 데이터 기록
};

//감지시작

observer.observe(target, config);

//info section----------------------------

// info product 슬라이드에 맞게 text 변경 - 더블클릭해야지 가능 추후 수정하기
// const productInfoBox = document.querySelector('#dyson-product-v11Complete');
// const productInfoTitle = productInfoBox.querySelector('.info-card__title');
// const productInfoDesc = productInfoBox.querySelector('.info-card__desc');

// const infoPcPagerBox = document.querySelector('.info-card__pc-pager');

// let infoTxtList = [
//   {
//     title: `당신의 상쾌한 <span>LIFE</span>`,
//     desc: '다이슨의 강력하고 가벼운 무선 청소기 V12 디텍트 슬림을 만나보세요',
//     tagUrl: 'url(../img/v11-com-in-mainbn.png)',
//   },

//   {
//     title: `쾌적한 수면 <span>LIFE</span>`,
//     desc: '다이슨은 쌀쌀한 저녁 따뜻한 쾌적한 온풍으로 편안한 숙면을 도와드립니다.',
//     tagUrl: 'url(../img/dyson-fromaldehyde-hot-cool-n.png)',
//   },
//   {
//     title: `<span>EASY DYSON LIFE</span>`,
//     desc: '완벽한 바닥 청소를 위한 설계 지금 바로 경험해보세요.',
//     tagUrl: 'url(../img/dyson-cyclone-v10-n.png)',
//   },
// ];

// function replaceInfoTxt(title, desc, tagUrl, targetTag) {
//   productInfoTitle.innerHTML = title;
//   productInfoDesc.innerText = desc;
//   targetTag.style.backgroundImage = tagUrl;
// }

// function replaceInfoBoxTxt(event) {
//   let pagerTarget = event.target;
//   const slideTargetBox = event.currentTarget;
//   let slideTarget = slideTargetBox.querySelector('.slick-track figure[tabindex="0"] a[tabindex="0"]');
//   let slideTargetTag = slideTarget.querySelector('.info-card__tag');
//   if (pagerTarget.nodeName != 'BUTTON') {
//     return;
//   } else if (pagerTarget.nodeName === 'BUTTON') {
//     switch (slideTarget.id) {
//       case 'infoSlide01':
//         replaceInfoTxt(infoTxtList[0].title, infoTxtList[0].desc, infoTxtList[0].tagUrl, slideTargetTag);
//         break;
//       case 'infoSlide02':
//         replaceInfoTxt(infoTxtList[1].title, infoTxtList[1].desc, infoTxtList[1].tagUrl, slideTargetTag);
//         break;
//       case 'infoSlide03':
//         replaceInfoTxt(infoTxtList[2].title, infoTxtList[2].desc, infoTxtList[2].tagUrl, slideTargetTag);
//         break;
//     }
//   }
// }

// productInfoBox.addEventListener('click', replaceInfoBoxTxt);

// section info link 연결

const v11Complete = $('#dyson-product-v11Complete');
const v11CompleteHref = v11Complete.find('.info-card__btn-gray');

v11CompleteHref.on({
  click: function () {
    $(location).attr('href', '../v11_complete.html');
    return false;
  },
});

const infoProduct = $('.info-card__productImgWrap');

infoProduct.slick({
  arrows: false,
  dots: true,
  appendDots: '.info-card__pc-pager',
  infinite: false,
  speed: 500,
  fade: true,
  cssEase: 'linear',
});

//community section -------------------------------------------

let infoCardLi = $('.info').children('.info-card');
const communityBox = $('.community');
const communityInner = $('.community__inner');
const communityBar = $('.community__guide');
let allCommunityCards = communityInner.find('.community__card');
const communityCenterBox = $('.community__center > .community__card');
const communityTypoList = $('.community__bk-typo').children('.community__bk-img');

// community btn event 모바일. 테블릿 cardwidth 310px
const communityBtns = $('.community__btn');
const communityPrevBtn = $('.community__perv');
const communityNextBtn = $('.community__next');
let communityLeftBox = $('.community__left');
let communityMiddleBox = $('.community__center');
let communityRightBox = $('.community__right');

// 모바일  community 슬라이드 버튼 코드 개선 후,

let count = 1;
let moveOffset = 0;
let communityBoxLength = communityBox.innerWidth();
let innerBoxLength = allCommunityCards.length * 310;

communityNextBtn.on({
  click: function (e) {
    if (communityBoxLength < innerBoxLength + moveOffset) {
      let move = moveOffset - 310;
      communityInner.css({
        transform: `translateX(${move}px)`,
        transition: '1s transform',
      });
      moveOffset = move;
      if (communityBoxLength > innerBoxLength + moveOffset) {
        communityNextBtn.removeClass('community__btn-active');
      }
      communityPrevBtn.addClass('community__btn-active');
    }
  },
});

communityPrevBtn.on({
  click: function () {
    if (moveOffset < 0) {
      let movePrev = moveOffset + 310;

      communityInner.css({
        transform: `translateX(${movePrev}px)`,
        transition: '1s transform',
      });
      moveOffset = movePrev;
      if (communityBoxLength < innerBoxLength + moveOffset) {
        communityNextBtn.addClass('community__btn-active');
      }
    } else if (moveOffset === 0) {
      communityPrevBtn.removeClass('community__btn-active');
    }
  },
});

if (innerBoxLength > communityBoxLength) {
  communityNextBtn.addClass('community__btn-active');
} else {
  communityNextBtn.removeClass('community__btn-active');
  communityPrevBtn.removeClass('community__btn-active');
}

/* 모바일  community 슬라이드 버튼 코드 개선전,

communityNextBtn.on({
  click: function (e) {
    let move = count * 310;

    innerBoxLength = communityLeftBox.innerWidth() + communityMiddleBox.innerWidth() + communityRightBox.innerWidth();
    communityBoxLength = communityInner.innerWidth();

    let lengthGap = innerBoxLength - move;

    if (lengthGap > communityBoxLength) {
      communityPrevBtn.addClass('community__btn-active');
      communityInner.css({
        transform: `translateX(-${move}px)`,
        transition: '1s transform',
      });
      count++;
      moveOffset = move;
      moving = true;
    } else {
      communityNextBtn.removeClass('community__btn-active');
      count = 1;
      moving = false;
    }
  },
});

communityPrevBtn.on({
  click: function () {
    let move = moveOffset - 310 * count;
    moving = true;

    if (move > -310) {
      communityNextBtn.addClass('community__btn-active');

      communityInner.css({
        transform: `translateX(-${move}px)`,
        transition: '1s transform',
      });
      count++;
      moving = true;
    } else if (move === -310) {
      communityPrevBtn.removeClass('community__btn-active');
      communityNextBtn.addClass('community__btn-active');
      count = 1;
      moving = false;
    }
  },
}); */

// 스크롤 이벤트

$(window).on({
  scroll: function () {
    // info card

    let scrollY = $(this).scrollTop();
    let windowX = $(this).innerWidth();
    let firstCardY = infoCardLi.eq(0).offset().top;

    if (windowX > 768) {
      for (let i = 1; i < infoCardLi.length; i++) {
        infoCardLi.eq(i).css({
          transform: `translateY(60%)`,
        });
      }
    }

    if (scrollY >= firstCardY) {
      infoCardLi.eq(1).css({
        transform: 'translateY(0%)',
        transition: '1s transform',
      });
      infoCardLi.eq(2).css({
        transform: 'translateY(0%)',
        transition: '3s transform',
      });
      infoCardLi.eq(3).css({
        transform: 'translateY(0%)',
        transition: '4s transform',
      });
    }

    // community 섹션 - pc
    let lastCardY = infoCardLi.eq(3).offset().top;
    let communityY = communityBox.offset().top;
    let newOffsetY = scrollY - communityY + 500;

    if (scrollY >= lastCardY && windowX > 1200) {
      communityBar.animate({
        height: '280px',
      });
      communityCenterBox.css({
        transform: 'translateY(55%)',
        transition: '1300ms transform ease-in-out',
      });
      communityTypoList.not(':even').css({
        right: `-${newOffsetY}px`,
        transition: '1s right',
      });
      communityTypoList.not(':odd').css({
        left: `-${newOffsetY}px`,
        transition: '1s left',
      });
    }
  },
  resize: function () {
    let windowX = $(this).innerWidth();

    if (windowX < 1200) {
      communityCenterBox.css({
        transform: 'translate(0px, 0px)',
        transition: '0s transform',
      });
      communityNextBtn.off('click');
      communityPrevBtn.off('click');
    } else if (windowX > 1200) {
      communityInner.css({
        transform: `translateX(0px)`,
        transition: '1s transform',
      });
    }
  },
});
