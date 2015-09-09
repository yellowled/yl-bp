// Configuration
var browserSync = require('browser-sync');

// Init browserSync manually
module.exports = function(grunt) {
    grunt.registerTask('bs-init', function () {
        var done = this.async();

        browserSync({
            files: [
                '*.html',
                'styles/*.css',
                'scripts/*.js'
            ],
            server: './',
            watchTask: true
        }, function (err, bs) {
            done();
        });
    });
};
