// along with showHide.js plugin
$(document).ready(function(){ 
   $('.show_hide').showHide({
        speed: 400,  // speed you want the toggle to happen
        easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
        changeText: 0, // if you dont want the button text to change, set this to 0
        showText: 'Show',// the button text to show when a div is closed
        hideText: 'Close' // the button text to show when a div is open 
    });
	
	//add a close botton to phone menu
	var new_btn = $('<a href="#" class="closephone">Close [X]</a>'); 
	new_btn.insertAfter('#slidingDiv .cell');

	$('.closephone').click(function() {
		$('#slidingDiv').css("display","none");
	});
});