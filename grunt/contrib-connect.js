// Local web server running on port 9001 with livereload functionality

module.exports = function(grunt) {
    grunt.config('connect', {
        server: {
            options: {
                port: 9001,
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
