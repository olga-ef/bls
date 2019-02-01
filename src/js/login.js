import $ from 'jquery';

$(function () {
	$('.modal__client-type').click(function () {
		
		if (isChecked(this)) return;

		if ($('.modal__client-type--checked')) {
			$('.modal__client-type--checked').removeClass('modal__client-type--checked');
		}
		$(this).addClass('modal__client-type--checked');
	});

	function isChecked (item) {
		return $(item).hasClass('modal__client-type--checked') ? true : false;
	}
});