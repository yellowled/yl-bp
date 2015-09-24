// Minify JS
module.exports = function(grunt) {
    grunt.config('uglify', {
        deploy: {
            src: 'src/scripts/master.js',
            dest: 'dist/scripts/master.js'
        }
    });
};
