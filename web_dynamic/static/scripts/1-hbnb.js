$(function () {
  const amenities = {};
  $(document).on('change', 'input[type="checkbox"]', function () {
    if (this.checked) {
	    amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    let checkAmenities = Object.values(amenities);
    if (checkAmenities.length > 0) {
      $('div.amenities > h4').text(Object.values(amenities).join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;')
    }
  });
});
