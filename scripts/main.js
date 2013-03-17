$(function() {
	// fire AccessifyHTML5 – use actual container selectors!
	AccessifyHTML5({
		header: 'body>header',
		footer: 'body>footer'
	});
    // JS PLUGINS LAZY-LOADING
    // @media threshold
    var mqVal = '481px';
    // Initial lazy-load
    if(Modernizr.mq('only screen and (min-width:' + mqVal + ')')) {
        mmLazyLoad();
    }
    // Reload on resize
    $(window).resize(function() {
        if(Modernizr.mq('only screen and (min-width:' + mqVal + ')')) {
            mmLazyLoad();
        }
    });
});

// Won't work locally without a webserver
$.getScript = function(url, callback){
	$.ajax({
		type: "GET",
		url: url,
		success: callback,
		dataType: "script",
		cache: true
	});
};

// Usage example
function mmLazyLoad() {
    // Lazyload condition
    // var $hasTooltips = $('main').has('.tooltips');

    // if($hasTooltips.size() > 0) {
    //     // Relative to page, not script; can be used without function to just load
    //     $.getScript('scripts/plugins/jquery.tipsy.js', function() {
    //         // Fire plugin code here
    //         $('.tooltips a[title]').tipsy({ gravity: 's' });
    //     });
    // }
}
