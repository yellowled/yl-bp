$(function() {
	// fire AccessifyHTML5
	AccessifyHTML5({
		header: 'body > header',
		footer: 'body > footer'
	});

    // Smallscreen nav
    var nav = responsiveNav('.nav-collapse', {
        customToggle: "#open-nav",
        closeOnNavClick: true,
    });
});
