$(document).ready(function() {
	$(".imga").hover(
	function() {
		$(this).stop().animate({opacity:"1"},"slow");
		$(".block1").animate({opacity:"1"},"slow");
	},
	function() {
		$(this).stop().animate({opacity:".5"},"slow");
		$(".block1").animate({opacity:"0"},"slow");
	});	
	$(".imgb").hover(
	function() {
		$(this).stop().animate({opacity:"1"},"slow");
		$(".block2").animate({opacity:"1"},"slow");
	},
	function() {
		$(this).stop().animate({opacity:".5"},"slow");
		$(".block2").animate({opacity:"0"},"slow");
	});	
	$(".imgc").hover(
	function() {
		$(this).stop().animate({opacity:"1"},"slow");
		$(".block3").animate({opacity:"1"},"slow");
	},
	function() {
		$(this).stop().animate({opacity:".5"},"slow");
		$(".block3").animate({opacity:"0"},"slow");
	});		
	
});