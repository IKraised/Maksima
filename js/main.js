$(function(){
	
    $('.slider__inner, .news__slider-inner').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        centerPadding: '0',
        prevArrow: '<button type="button" class="slick-btn slick-prev">Previous</button>',
	    nextArrow: '<button type="button" class="slick-btn slick-next slick-arrow"></button>'
    });
    
    $('select').styler({
    
    
    
    });
});