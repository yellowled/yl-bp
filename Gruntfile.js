// Configuration
module.exports = function(grunt) {
    // include time-grunt
    require('time-grunt')(grunt);

    // Initialize config
    grunt.initConfig({
        pkg: '<json:package.json>',
    });

    // Load required tasks from submodules
    grunt.loadTasks('grunt');

    // Default
    grunt.registerTask('default', [
        'connect',
        'watch'
    ]);

    // Testing
    grunt.registerTask('test', [
        'htmlhint',
        'jshint',
        'scsslint'
    ]);

    // Deployment
    grunt.registerTask('deploy', [
        'clean:deploy',
        'fontello:build',
        'copy:deploy',
        'concat',
        'sass:deploy',
        'uglify',
        'imagemin:deploy',
        'favicons:deploy',
        'modernizr',
        'hashres:deploy'
    ]);
};
