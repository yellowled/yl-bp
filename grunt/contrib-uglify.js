// Minify JS
module.exports = function(grunt) {
    grunt.config('uglify', {
        options: {
            sourceMap: true,
            sourceMapIn: 'src/scripts/master.js.map'
        },
        deploy: {
            src: 'src/scripts/master.js',
            dest: 'dist/scripts/master.js'
        }
    });
};
