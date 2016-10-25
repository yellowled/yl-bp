// Clean up deployment directory
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('clean', {
        deploy: config.clean.deploy,
        srcdir: config.clean.srcdir
    });
};