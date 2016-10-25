// Configuration
var browserSync = require('browser-sync');

// Inject CSS
module.exports = function(grunt) {
    grunt.registerTask('bs-inject-js', function () {
        browserSync.reload(['src/scripts/master.js']);
    });
};