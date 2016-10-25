// Check JS assets for code quality
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('jshint', {
        options: {
            jshintrc: true
        },
        all: config.jshint.srcfiles
    });
};