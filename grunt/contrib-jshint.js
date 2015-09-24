// Check JS assets for code quality
module.exports = function(grunt) {
    grunt.config('jshint', {
        options: {
            jshintrc: true
        },
        all: ['gruntfile.js',
              'config.js',
              'grunt/*.js',
              'src/scripts/main.js']
    });
};
