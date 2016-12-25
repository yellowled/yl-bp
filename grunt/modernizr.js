// Generate Modernizr custom build from references in SCSS + JS assets
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('modernizr', {
        deploy: {
            'devFile': config.modernizr.dev,
            'dest' : config.modernizr.dest,
            'files': {
                'src': [ config.modernizr.srcfiles ]
            },
            'options': [
                'mq',
                'html5printshiv',
                'setClasses'
            ]
        }
    });
};
