$('.menu-icon__ic03').click(function () {
  $('.gnb').show();
  return false;
});
$('.gnb__closeBtn').click(function () {
  $('.gnb').hide();
  return false;
});
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
