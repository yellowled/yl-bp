// Check markup for code quality
module.exports = function(grunt) {
    grunt.config('htmlhint', {
        options: {
            htmlhintrc: '.htmlhintrc'
        },
        all: {
            src: ['*.html']
        }
    });

    grunt.loadNpmTasks('grunt-htmlhint');
};
