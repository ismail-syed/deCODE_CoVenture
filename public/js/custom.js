$(document).ready(function() {
    
    $('.investor-login-link').on('click',function(e) {
		$("#investor-login").delay(100).fadeIn(100);
 		$("#company-login").fadeOut(100);
		$('#company-login-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('.company-login-link').on('click',function(e) {
		$("#company-login").delay(100).fadeIn(100);
 		$("#investor-login").fadeOut(100);
		$('#investor-login-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});
