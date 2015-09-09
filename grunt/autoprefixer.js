// Add vendor prefixes to CSS based on caniuse.com
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('autoprefixer', {
        options: {
            browsers: config.autoprefixer.browsers,
            cascade: false,
            remove: true,
            diff: false,
            map: true,
            silent: false,
            safe: false
        },
        dev: {
            expand: true,
            flatten: true,
            src: 'styles/*.css',
            dest: 'styles/'
        },
        deploy: {
            expand: true,
            flatten: true,
            src: 'dist/styles/*.css',
            dest: 'dist/styles/'
        }
    });
};
