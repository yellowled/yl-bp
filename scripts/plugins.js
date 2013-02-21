// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
// https://github.com/scottjehl/iOS-Orientationchange-Fix
(function(w){
    // This fix addresses an iOS bug, so return early if the UA claims it's something else.
    var ua = navigator.userAgent;
    if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(ua) && ua.indexOf( "AppleWebKit" ) > -1 ) ){
        return;
    }

    var doc = w.document;

    if( !doc.querySelector ){ return; }

    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
        x, y, z, aig;

    if( !meta ){ return; }

    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true;
    }

    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false;
    }

    function checkTilt( e ){
        aig = e.accelerationIncludingGravity;
        x = Math.abs( aig.x );
        y = Math.abs( aig.y );
        z = Math.abs( aig.z );
        // If portrait orientation and in one of the danger zones
        if( (!w.orientation || w.orientation === 180) && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
            if( enabled ){
                disableZoom();
            }
        }
        else if( !enabled ){
            restoreZoom();
        }
    }

    w.addEventListener( "orientationchange", restoreZoom, false );
    w.addEventListener( "devicemotion", checkTilt, false );

})( this );
// https://github.com/yatil/accessifyhtml5.js
var AccessifyHTML5 = function (defaults) {

    "use strict";

    var fixes = {
        'article'       : { 'role':          'article'       },
        'aside'         : { 'role':          'complementary' },
        'nav'           : { 'role':          'navigation'    },
        'main'          : { 'role':          'main'          },
        'output'        : { 'aria-live':     'polite'        },
        'section'       : { 'role':          'region'        },
        '[required]'    : { 'aria-required': 'true'          }
    };

    if (defaults) {
        if (defaults.header) {
            fixes[defaults.header] = {
                'role': 'banner'
            };
        }
        if (defaults.footer) {
            fixes[defaults.footer] = {
                'role': 'contentinfo'
            };
        }
        if (defaults.main) {
            fixes[defaults.main] = {
                'role': 'main'
            };
            fixes.main = {
                'role': ''
            };
        }
    }

    $.each(fixes,
        function(index, item) {
            $(index).not('[' + item[0] +']').attr(item);
        }
    );

};
