// 모바일 & 테블릿 menu

let windowWidth = window.innerWidth;
const moMenuBtn = $('.menu-icon__ic03');
const moMenu = $('.gnb');
const moMenuCloseBtn = $('.gnb__closeBtn');

moMenuBtn.on({
  click: function () {
    moMenu.slideUp();
    if (windowWidth >= 320) {
      moMenu.slideDown(600);
    }
    if (windowWidth >= 768) {
      moMenu
        .css({
          right: '-100%',
          height: '100vh',
        })
        .stop()
        .animate({
          right: 0,
        });
    }
    return false;
  },
});

moMenuCloseBtn.on({
  click: function () {
    if (windowWidth >= 320) {
      moMenu.slideUp(600);
    }
    if (windowWidth >= 768) {
      moMenu
        .css({
          right: 0,
          height: '100vh',
        })
        .stop()
        .animate({
          right: '-100%',
        });
    }
    return false;
  },
});
