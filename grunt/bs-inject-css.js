// Configuration
var browserSync = require('browser-sync');

// Inject CSS
module.exports = function(grunt) {
    grunt.registerTask('bs-inject-css', function () {
        browserSync.reload(['src/styles/master.css']);
    });
};