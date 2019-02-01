import $ from 'jquery';

$(function () {

	$(window).scroll(function() {
		const header = $('.header');
		if($(this).scrollTop() > $(window).height()/2) {
	    header.addClass('header--fixed');
	    $('.wrapper').css('paddingTop', '166px');
	  }
		else if ($(this).scrollTop() < $(window).height()/2){
	    header.removeClass('header--fixed');
	    $('.wrapper').css('paddingTop', '0px');
	  }
	});

	$('.header__nav-toggle').on('click', function(e) {
		$('.header__content').toggleClass("header__content--open");
	});

	const touch = $('.main-menu__item.dropdown');
	const innerMenu = $('.main-menu__menu-inner');
	const menuWrapper = $('.main-nav');

	$(innerMenu).on('click', function (e) {
		e.stopPropagation();
	});

	$(touch).on('click', function(e) {
		e.preventDefault();

		const menu = $(this).find('.main-menu__menu-inner');
		var isClosed = menu.is(':hidden');

		$(innerMenu).slideUp();
		$(touch).removeClass('show');

		if (isClosed) {
			menu.slideDown();
			$(this).addClass('show');
		}
	});

	$('.header__search-icon').on('click', function () {
		$('.header__search .search').addClass('search--show');
	})

	$('.header__search .search__close').on('click', function() {
		$('.header__search .search').removeClass('search--show');
	});

	// callback
	
	$('.header__callback').click(function (e) {
		e.preventDefault();
		$('#callback-form').show(0);
	});

	$('#callback-form .btn-close').click(function () {
		$('#callback-form').hide(0);
	});

	// accaunt

	$('.btn--accaunt').click(function (e) {
		e.preventDefault();
		$('#login-form').show(0);
	});

	$('#login-form .btn-close').click(function (e) {
		$('#login-form').hide(0);
	});
});


