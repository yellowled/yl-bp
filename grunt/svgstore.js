// Create SVG sprite from single SVGs
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('svgstore', {
        options: {
            prefix: '',
            cleanup: true,
            cleanupdefs: true
        },
        build: {
            files: {
                'src/img/sprite.svg': config.svgstore.src
            }
        }
    });
};