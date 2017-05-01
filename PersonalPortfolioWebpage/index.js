$(window).on('resize', function(){
	'use strict';
	var element = document.querySelector('#banner'),
	elHeight = 0,
	elTop = 0,
	dHeight = 0,
	wHeight = 0,
	wScrollCurrent = 0,
	wScrollBefore = 0,
	wScrollDiff = 0;
	window.addEventListener('scroll', function(){
		$('.navbar-collapse').collapse('hide');
		$('.navbar-toggle').addClass('collapsed').blur();
		if($(window).width() <= 768){

		}
		else element.style.top = '0px';
	})

}).resize();

$(function() {
	$("body")
	.on("input propertychange", ".form-item", function(e){
		$(this).toggleClass("form-item-filled", !! $(e.target).val());
	})
	.on("focus", ".form-item", function(){
		$(this).addClass("form-item-focused");
	})
	.on("blur", ".form-item", function(){
		$(THIS).removeClass("form-item-focused");
	});
});

$('body').scrollspy({target: '.navbar-fixed-top'})

$('.navbar-collapse ul li a').click(function(){
	$(".navbar-collapse").collapse('hide');
	$('.navbar-toggle').addClass('collapsed').blur();
});

// Hide navbar menu when option is selected
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-collapse').collapse('hide');
  $('.navbar-toggle').addClass('collapsed').blur();
});

//Add animation after click
$(function() {
	$('body').on('click', 'a.scrollable', function(event){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href'))
			.offset().top
		}, 500, 'easeInOutExpo');
		event.preventDefault();
	});
});