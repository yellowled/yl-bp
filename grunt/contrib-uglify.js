// Minify JS
module.exports = function(grunt) {
    grunt.config('uglify', {
        deploy: {
            src: 'scripts/master.js',
            dest: 'dist/scripts/master.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-unglify');
};
