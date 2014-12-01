// Minify CSS
module.exports = function(grunt) {
    grunt.config('cssmin', {
        deploy: {
            expand: true,
            cwd: 'styles/',
            src: ['*.css'],
            dest: 'dist/styles/',
            ext: '.css'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
};
