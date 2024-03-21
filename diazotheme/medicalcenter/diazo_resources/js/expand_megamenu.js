// goes with expand.js plugin
jQuery(function ($) {
	
	if ($(window).width() <= 640){		
		$('.showSingle').each(function() {
			$(this).attr('rel-target',$(this).attr('target'));
			$(this).removeAttr('target');
		})
	}
	
    $('.showSingle').click(function (event) {
		if ($(window).width() > 640){
		event.preventDefault();
	};
	    var itemid = '.AbovePortletManager' + $(this).attr('target'); // class of the element to show/hide.
	    var $activetab = $(this);

	    if (!$activetab.hasClass('new')) {
	        $('.new').removeClass('new');
	        $('.active').slideUp();
	        $('.active').removeClass('active');
	        setTimeout(function() { // Wait for the slidUp to complete (default slideUp time is 500ms)
	            $activetab.addClass('new');
	            $(itemid).slideDown();
	            $(itemid).addClass('active')
	        }, 100);
	    } else {
	        $('.new').removeClass('new');
	        $('.active').slideUp();
	        $('.active').removeClass('active');
	    }

	});

	//expand sub menu in mega menu: needs expand.js
	$("#portlets-above ul li.expand").toggler();

	var new_btn = $('<a href="#" class="closebtn">Close [X]</a>'); 
	new_btn.insertAfter('#portlets-above .portletNumber-2, #portlets-above .portletSearch');

	$('.closebtn').click(function() {
	        $('.active').hide();
			$('.new').removeClass('new');
	    });
	
	//click outside to hide: needs jquery.ba-outside-events.min.js
	$('#portlets-above .cell, #slidingDiv').bind('clickoutside', function (event) {
			$(this).hide();
			$('.new').removeClass('new');
		});
	
	//manipulate anchor attributes based on window size (for mobile functionality)
	$(window).resize(function(){
		if ($(window).width() <= 640){		
			$('.showSingle').each(function() {
				$(this).attr('rel-target',$(this).attr('target'));
				$(this).removeAttr('target');
			})
		}	
	});
	
	$(window).resize(function(){
		if ($(window).width() > 640){		
			$('.showSingle').each(function() {
				$(this).attr('target',$(this).attr('rel-target'));
				$(this).removeAttr('rel-target');
			})
		}	
	});

});