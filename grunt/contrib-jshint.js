// Check JS assets for code quality
module.exports = function(grunt) {
    grunt.config('jshint', {
        all: ['Gruntfile.js',
              'scripts/main.js'],
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};
