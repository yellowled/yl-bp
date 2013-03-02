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
