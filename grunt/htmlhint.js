// Check markup for code quality
module.exports = function(grunt) {
    grunt.config('htmlhint', {
        options: {
            htmlhintrc: '.htmlhintrc'
        },
        all: {
            src: ['src/*.html']
        }
    });
};