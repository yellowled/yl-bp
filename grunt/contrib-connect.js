// Local web server running on port 9001 with livereload functionality

module.exports = function(grunt) {
    grunt.config('connect', {
        livereload: {
            options: {
                port: 9001,
                middleware: function(connect, options) {
                    return[
                        require('connect-livereload')(),
                        connect.static(options.base[0]),
                        connect.directory(options.base)
                    ];
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
