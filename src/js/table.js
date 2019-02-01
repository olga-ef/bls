import $ from 'jquery';

$(function () {
	$('.table__cell--number').on('click', function() {
		$(this).closest('.table__row').toggleClass('show');
	});
});