$(function() {
	// fire AccessifyHTML5 – use actual container ids!
	AccessifyHTML5({
		header: '#header',
		main:   '#content',
		footer: '#footer'
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
// $(window).load(function(){
// 	// Lazyload condition
// 	var $hasTooltips = $('#main').has('.tooltips');
// 	if($hasTooltips.size() > 0) {
// 		// Relative to page, not script; can be used without function to just load
// 		$.getScript('scripts/plugins/jquery.tipsy.js', function() {
// 			// Fire plugin code here
// 			$('.tooltips a[title]').tipsy({ gravity: 's' });
// 		});
// 	}
// });
