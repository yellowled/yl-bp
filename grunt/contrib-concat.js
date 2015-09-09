// Concatenate JS assets into single file
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('concat', {
        master: {
            src: config.concat.src,
            dest: config.concat.dest
        }
    });
};
