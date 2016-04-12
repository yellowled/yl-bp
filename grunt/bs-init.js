// Configuration
var browserSync = require('browser-sync');

// Init browserSync manually
module.exports = function(grunt) {
    grunt.registerTask('bs-init', function () {
        var done = this.async();

        browserSync({
            server: 'src',
            files: [
                'src/*.html',
                'src/icons/*.svg',
                'src/scripts/*.js'
            ]
        }, function (err, bs) {
            done();
        });
    });
};
