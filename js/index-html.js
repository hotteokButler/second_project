//index.html main_slide

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

  if (window.innerWidth > 768) {
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

// section info

const v11Complete = $('#dyson-product-v11Complete');
const v11CompleteHref = v11Complete.find('.info-card__btn-gray');

v11CompleteHref.on({
  click: function () {
    $(location).attr('href', '../v11_complete.html');
    return false;
  },
});
