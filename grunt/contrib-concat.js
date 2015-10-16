// Concatenate JS assets into single file
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('concat', {
        options: {
            sourceMap: true
        },
        master: {
            src: config.concat.src,
            dest: config.concat.dest
        }
    });
};
