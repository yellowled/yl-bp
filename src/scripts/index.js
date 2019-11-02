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
    // Here be dragons
});
