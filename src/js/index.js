import $ from 'jquery';
import './lightbox/lightbox.js';
import slick from './slick/slick.min.js';
import formStyler from './formstyler/jquery.formstyler.min.js';
import mask from './maskeinput/jquery.maskedinput.min.js';

import header from './header.js';
import calc from './calc.js';
import feedback from './feedback.js';
import table from './table.js';
import login from './login.js';

$(document).ready(function(){
	// top-slider
  $('.s-top__slider').slick({
  	autoplay: true,
  	arrows: false,
  	dots: true,
  	dotsClass: 's-top__dots',
  	Zindex: 0,
  	fade: true,
  	cssEase: 'linear'
  });

  // certificats
  $('.cert__slider').slick({
  	infinite: true,
  	dots: false,
  	dotsClass: 'slider-dots',
  	slidesToShow: 6,
  	slidesToScroll: 1,
  	responsive: [
  	{
  		breakpoint: 1350,
  		settings: {
  			slidesToShow: 5
  		}
  	},
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 4,
        dots: true
      }
    },
    {
      breakpoint: 667,
      settings: {
        arrows: false,
        slidesToShow: 1,
        dots: true
      }
    }
  ]
  });

	// clients 
  $('.clients__slider').slick({
  	infinite: true,
  	dots: false,
  	dotsClass: 'slider-dots',
  	slidesToShow: 4,
  	slidesToScroll: 1,
    rows: 1,
  	responsive: [
  		{
  			breakpoint: 1200,
  			settings: {
  				dots: true,
  				arrows: false,
          rows: 1,
  				slidesToShow: 4
  			}
  		},
  		{
  			breakpoint: 667,
  			settings: {
  				rows: 2,
  				slidesPerRow: 2,
  				slidesToShow: 1,
  				arrows: false,
  				dots: true
  			}
  		}
  	]
  });
});

(function($) {
  $(function() {

    $('select').styler({
       selectPlaceholder: $('html').attr('lang') === 'ru' ? 'Выберите город': 'Select city'
    });
  });
})($);

// maskeinput

$(document).ready(function () {
  $("#feedback-tel").mask("+7(999) 999 99 99");
  $("#tel").mask("+7(999) 999 99 99");
  $("#inn").mask("999-999-999-999", {placeholder: "000-000-000-000"});
  $("#callback-tel").mask("+7(999) 999 99 99");
});


