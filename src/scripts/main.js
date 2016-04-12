$(function() {
    // SVG polyfill
    svg4everybody();

    // Smallscreen nav
    var nav = responsiveNav('.nav-collapse', {
        customToggle: "#open-nav",
        closeOnNavClick: true,
    });
});
