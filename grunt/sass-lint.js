// Check SCSS for code quality
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('sasslint', {
        options: {
            configFile: '.sass-lint.yml'
        },
        all: [
            'src/scss/base/*.scss',
            'src/scss/mixins/*.scss',
            'src/scss/modules/*.scss',
            'src/scss/settings/*.scss',
            'src/scss/*.scss'
        ]
    });
};
