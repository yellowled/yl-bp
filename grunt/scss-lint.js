// Check SCSS for code quality
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('scsslint', {
        options: {
            bundleExec: false,
            colorizeOutput: true,
            compact: true,
            config: '.scss-lint.yml',
            exclude: config.scsslint.exclude,
            reporterOutput: null
        },
        all: [
            'src/scss/**/*.scss'
        ]
    });
};
