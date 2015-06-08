// Check JS assets for code quality
module.exports = function(grunt) {
    grunt.config('jshint', {
        options: {
            jshintrc: true
        },
        all: ['Gruntfile.js',
              'grunt/*.js',
              'scripts/main.js']
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};
