// Optimize bitmap images (GIF/JPG/PNG)
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('imagemin', {
        deploy: {
            options: {
                optimizationLevel: 1,
                progressive: true,
                interlaced: true
            },
            files: [{
                expand: true,
                cwd: config.imagemin.cwd,
                src: config.imagemin.src,
                dest: config.imagemin.dest
            }]
        }
    });
};