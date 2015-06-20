// Local web server running on port 3000 with livereload functionality
module.exports = function(grunt) {
    grunt.config('browserSync', {
        options: {
            watchTask: true,
            server: {
                baseDir: './'
            }
        },
        bsFiles: {
            src: [
                '*.html',
                'styles/*.css',
                'scripts/*.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
};
