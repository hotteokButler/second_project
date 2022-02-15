// 제품상세페이지 유의사항 menu - 수정하기
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
