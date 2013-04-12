$(function() {
	// fire AccessifyHTML5 – use actual container selectors!
	AccessifyHTML5({
		header: 'body>header',
		footer: 'body>footer'
	});
    // fire Responsive Nav
    var navigation = responsiveNav('#primary-nav', {
        animate: true,          // Boolean: Use CSS3 transitions, true or false
        transition: 250,        // Integer: Speed of the transition, in milliseconds
        label: "Navigation",    // String: Label for the navigation toggle
        insert: "before",       // String: Insert the toggle before or after the navigation
        customToggle: "",       // Selector: Specify the ID of a custom toggle
        openPos: "relative",    // String: Position of the opened nav, relative or static
        jsClass: "js",          // String: 'JS enabled' class which is added to <html> el
        debug: false,           // Boolean: Log debug messages to console, true or false
        init: function(){},     // Function: Init callback
        open: function(){},     // Function: Open callback
        close: function(){}     // Function: Close callback
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
