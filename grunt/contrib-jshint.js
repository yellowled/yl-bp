// Check JS assets for code quality
module.exports = function(grunt) {
    grunt.config('jshint', {
        options: {
            jshintrc: true
        },
        all: ['Gruntfile.js',
              'config.js',
              'grunt/*.js',
              'scripts/main.js']
    });
};
