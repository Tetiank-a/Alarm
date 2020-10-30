// Frontend navigation


$(function () {

	var modeButtons = $('.switch-clocks a'),
		html = $('html');

	//	Changing the different clock modes using the buttons.

	modeButtons.on('click', function (e) {

		var that = $(e.target);

		// Making the according button accented.

		modeButtons.removeClass('accent-4');
		that.addClass('accent-4');

		// By adding classes to the html we manipulate which clock is shown through CSS.

		
		html.removeClass();
		html.addClass('alarm-mode');
		

	});

	// Prevent page refresh on enter press in the input fields.

	$('input').keydown(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			return false;
		}
	});

});