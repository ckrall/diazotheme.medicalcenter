$(document).ready(function() {

	/* rotating widget - banner */
	if ($(window).width() > 640) {
		$('#rotating-homebanner').simplebanner();
	};

	/* rotating widget - news */
	if ($(window).width() > 640) {
		$('#rotating-news').simplebanner();
	};



	/* rss feed - uvahealth.com blog - children's */
	$('#divRss').FeedEk({
		FeedUrl: 'http://uvahealth.com/blog/category/childrens-hospital/feed',
		MaxCount: 4,
		ShowPubDate: true,
		ShowDesc: false,
	});

	/* rss feed - facebook - children's */
	$('#divRssFacebook').FeedEk({
		FeedUrl: 'http://www.facebook.com/feeds/page.php?format=rss20&id=164618677700',
		MaxCount: 3,
		ShowPubDate: true,
		ShowDesc: true,
	});



	/*protecting tabs from blowing up */
	if (window.location.href == $('head base').attr('href')) {		

		/* tabbed widget - panel */
		if ($(window).width() > 640) {
			$( "#tabs-panel-widget" ).tabs();
		};
	
		/* tabbed widget - news */
			$( "#news-tabs-widget" ).tabs();
			// fix the classes
			$( ".tabs-bottom .ui-tabs-nav, .tabs-bottom .ui-tabs-nav > *" )
				.removeClass( "ui-corner-all ui-corner-top" )
				.addClass( "ui-corner-bottom" );
			// move the nav to the bottom
			$( ".tabs-bottom .ui-tabs-nav" ).appendTo( ".tabs-bottom" );
	}

});

