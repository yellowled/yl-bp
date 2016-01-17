// Postprocess generated CSS
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('postcss', {
        options: {
            diff: false,
            map: true,
            processors: [
                require('pixrem')({
                    unitPrecision: 0
                }),
                require('autoprefixer')({
                    browsers: config.autoprefixer.browsers,
                    cascade: false,
                    remove: true
                }),
                require('css-mqpacker')({
                    sort: true
                })
            ]
        },
        all: {
            expand: true,
            flatten: true,
            src: 'src/styles/*.css',
            dest: 'src/styles'
        }
    });
};
