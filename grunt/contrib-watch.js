// Watch project files for and spawn associated tasks upon changes
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('watch', {
        options: {
            spawn: false
        },
        svg: {
            files: config.watch.svg,
            tasks: ['svgstore'],
        },
        processhtml: {
            files: config.watch.html,
            tasks: ['processhtml:dev'],
        },
        scss: {
            files: config.watch.scss,
            tasks: ['sass', 'postcss:dev', 'bs-inject-css'],
        },
        js: {
            files: config.watch.js,
            tasks: ['concat', 'bs-inject-js'],
        }
    });
};
