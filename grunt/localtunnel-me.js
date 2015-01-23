// Expose the local webserver through localtunnel.me
module.exports = function(grunt) {
    grunt.config('localtunnel', {
        tunnel: {
            options: {
                port: 9001,
                subdomain: 'ylbp'
            }
        },
    });

    grunt.loadNpmTasks('grunt-localtunnel-me');
};
