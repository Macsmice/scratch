$(function() {

	$('a.close').click(function() {
			if ($('div.alert-box').hasClass("slide")) {
			$(this).closest('.alert-box').slideUp();
			return false;
		}
		else if ($('div.alert-box')) {
			$(this).closest('.alert-box').fadeOut();
			return false;
		}
		return false;
	});

});