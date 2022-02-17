// 모바일 & 테블릿 .gnb

let windowWidth;
const moMenuBtn = $('.menu-icon__ic03');
const moMenu = $('.gnb');
const moMenuCloseBtn = $('.gnb__closeBtn');

moMenuBtn.on({
  click: function () {
    windowWidth = window.innerWidth;
    moMenu.removeClass('gnb--animation-slideDown');
    moMenu.removeClass('gnb--animation-slideUp');
    moMenu.removeClass('gnb--animation-slideLeft');
    moMenu.removeClass('gnb--animation-slideRight');

    if (windowWidth < 768) {
      moMenu.addClass('gnb--animation-slideDown');
    } else {
      moMenu.addClass('gnb--animation-slideLeft');
    }
    return false;
  },
});

moMenuCloseBtn.on({
  click: function () {
    windowWidth = window.innerWidth;
    moMenu.removeClass('gnb--animation-slideDown');
    moMenu.removeClass('gnb--animation-slideUp');
    moMenu.removeClass('gnb--animation-slideLeft');
    moMenu.removeClass('gnb--animation-slideRight');
    if (windowWidth < 768) {
      moMenu.addClass('gnb--animation-slideUp');
    } else {
      moMenu.addClass('gnb--animation-slideRight');
    }
    return false;
  },
});

//pc 메인 메뉴

const pcGnb = $('.gnb-pc ul li');
const pcGnbDepth2 = pcGnb.find('.gnb-pc__depth2');

pcGnb.eq(0).on({
  mouseenter: function () {
    pcGnbDepth2.eq(0).stop().slideDown(500).css({ display: 'flex' });
  },
  mouseleave: function () {
    pcGnbDepth2
      .eq(0)
      .css({
        display: 'flex',
      })
      .stop()
      .slideUp(500);
  },
});

// footer 언어설정 및 국기 변경

const footerLangSelect = $('.footer_selected-name');
const footerCountrys = footerLangSelect.next();
const footerCountryLi = footerCountrys.find('li');
const countryFlag = $('.footer__country');

footerLangSelect.on({
  click: function () {
    footerCountrys.stop().slideUp();

    if (footerCountrys.css('display') === 'none') {
      footerCountrys.stop().slideDown(70);
    } else {
      footerCountrys.stop().slideUp(70);
    }
  },
});

footerCountryLi.on({
  click: function () {
    let country = $(this).text();
    let index = $(this).index();

    if (country !== footerLangSelect.text()) {
      footerLangSelect.text(country);
    }

    switch (index) {
      case 0:
        countryFlag.css({
          backgroundPosition: 'right top -80px',
        });
        break;
      case 1:
        countryFlag.css({
          backgroundPosition: 'right top -140px',
        });
        break;
      case 2:
        countryFlag.css({
          backgroundPosition: 'right top -60px',
        });
        break;
      case 3:
        countryFlag.css({
          backgroundPosition: 'right top -40px',
        });
        break;
      case 4:
        countryFlag.css({
          backgroundPosition: 'right top -120px',
        });
        break;
      case 5:
        countryFlag.css({
          backgroundPosition: 'right top -160px',
        });
        break;
    }
  },
});
