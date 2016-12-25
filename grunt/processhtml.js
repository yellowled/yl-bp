// Process HTML includes
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('processhtml', {
        options: {
            includeBase: config.processhtml.base
        },
        dev: {
            files: [{
                expand: true,
                cwd: config.processhtml.cwd,
                src: ['*.html'],
                dest: 'src'
            }]
        },
        deploy: {
            files: [{
                expand: true,
                cwd: config.processhtml.cwd,
                src: ['*.html'],
                dest: 'dist'
            }]
        }
    });
};
