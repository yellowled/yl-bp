// Minify JS
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('uglify', {
        options: {
            sourceMap: true,
            sourceMapIn: config.concat.dest + '.map'
        },
        deploy: {
            src: config.concat.dest,
            dest: config.uglify.dest
        }
    });
};