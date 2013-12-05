module.exports = function(grunt) {
    grunt.config('connect', {
        livereload: {
            options: {
                port: 9001,
                middleware: function(connect, options) {
                    return[
                        require('connect-livereload')(),
                        connect.static(options.base),
                        connect.directory(options.base)
                    ];
                }
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
};
