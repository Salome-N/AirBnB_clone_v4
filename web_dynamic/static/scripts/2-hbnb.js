$(function () {
    const amenities = {};
    $('div.amenities li input').change(function () {
	if($(this).is(':checked')){
	    amenities[$(this).attr('data-name')] = $(this).attr('data-id');
	} else if ($(this).is(':not(:checked)')) {
	    delete amenities[$(this).attr('data-name')];
	}
	const names = Object.keys(amenities);
	$('.amenities h4').html(names.sort().join(', '));
    });

    $.getJSON('http://0.0.0.0:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
	$('DIV#api_status').addClass('available');
    } else {
	$('DIV#api_status').removeClass('available');
    }
});
});


