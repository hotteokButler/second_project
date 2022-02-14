// 모바일 & 테블릿 menu
$('.menu-icon__ic03').click(function () {
  $('.gnb').show();
  return false;
});
$('.gnb__closeBtn').click(function () {
  $('.gnb').hide();
  return false;
});

// footer 언어설정  menu
$('.footer__country-name').click(function () {
  if ($(this).attr('data-show') === 'false') {
    $('.footer_other-country').show();
    $(this).attr('data-show', 'true');
  } else {
    $('.footer_other-country').hide();
    $(this).attr('data-show', 'false');
  }
  return false;
});

// 제품상세페이지 유의사항 menu
$('.product-notice__list')
  .find('p')
  .click(function () {
    let subDesc = $(this).siblings();

    if (subDesc.css('display') === 'none') {
      subDesc.css('display', 'block');
    } else if (subDesc.css('display') === 'block') {
      subDesc.css('display', 'none');
    }
  });