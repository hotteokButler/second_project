// section info

const v11Complete = $('#dyson-product-v11Complete');
const v11CompleteHref = v11Complete.find('.info-card__btn-gray');

v11CompleteHref.on({
  click: function () {
    location.href = '../v11_complete.html';
  },
});
