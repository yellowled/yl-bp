// Postprocess generated CSS
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('postcss', {
        options: {
            diff: false,
            map: true,
            processors: [
                require('autoprefixer')({
                    browsers: config.autoprefixer.browsers,
                    cascade: false,
                    remove: true
                })
            ]
        },
        dev: {
            expand: true,
            flatten: true,
            src: 'src/styles/*.css',
            dest: 'src/styles'
        },
        deploy: {
            expand: true,
            flatten: true,
            src: 'dist/styles/*.css',
            dest: 'dist/styles'
        }
    });
};
