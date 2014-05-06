// Configuration
module.exports = function(grunt) {
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
        'concat:deploy',
        'sass:deploy',
        'uglify',
        'imagemin:deploy',
        'favicons:deploy',
        'modernizr',
        'hashres:deploy'
    ]);
};
