// Copy files not copied by other tasks to deployment directory
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('copy', {
        init: {
            files: [{
                expand: true,
                cwd: 'node_modules',
                src: config.init.src,
                dest: config.init.dest
            }]
        },
        deploy: {
            files: [{
                expand: true,
                cwd: 'src',
                src: config.copy.src,
                dest: config.copy.dest
            }]
        }
    });
};
