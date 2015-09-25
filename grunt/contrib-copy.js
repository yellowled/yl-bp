// Copy files not copied by other tasks to deployment directory
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('copy', {
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
