import svg4everybody from 'svg4everybody';

var ready = function(fn) {
    if (typeof fn !== 'function') return;
    // If document is already loaded, run method
    if (document.readyState === 'complete') {
        return fn();
    }
    // Otherwise, wait until document is loaded
    document.addEventListener('DOMContentLoaded', fn, false);
};

ready(function() {
    // SVG polyfill
    svg4everybody();
});
