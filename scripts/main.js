$(function() {
	// fire AccessifyHTML5
	AccessifyHTML5({
		header: 'body > header',
		footer: 'body > footer'
	});

    // Smallscreen navigation
    if ($('.nav-toggle').length > 0) {
        $('.nav-toggle').click(function(e) {
            var $el = $(this);
            var navTarget = $el.attr('href');
            var navState = $(navTarget).attr('aria-hidden');

            $(navTarget).toggleClass('nav-collapsed');

            if (navState == 'true') {
                $(navTarget).attr('aria-hidden', 'false');
            } else {
                $(navTarget).attr('aria-hidden', 'true');
            }

            e.preventDefault();
        });
    }
});
