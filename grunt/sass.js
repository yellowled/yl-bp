// Compile SCSS files to CSS
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('sass', {
        build: {
            options: {
                outputStyle: 'nested',
                precision: 5,
                sourceMap: true
            },
            files: [{
                expand: true,
                cwd: config.sass.cwd,
                src: ['*.scss'],
                dest: config.sass.dest,
                ext: '.css'
            }]
        }
    });
};
