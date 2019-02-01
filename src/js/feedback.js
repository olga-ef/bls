import $ from 'jquery';

$(function () {
	$('.feedback__btn--show').on('click', function(e){
		e.preventDefault();
		$('.feedback').addClass('feedback--modal');	
	});

	$('.feedback__close').on('click', function () {
		$('.feedback').removeClass('feedback--modal');
	});
});