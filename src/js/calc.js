import $ from 'jquery';

$(function () {
	// open calculator
	$('.calculator__btn--show').on('click', function(e){
		e.preventDefault();
		$('.calculator').addClass('calculator--modal');	
	});

	$('.calculator__close').on('click', function () {
		$('.calculator').removeClass('calculator--modal');
	});
});