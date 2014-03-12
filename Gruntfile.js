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
        'jshint'
    ]);

    // Deployment
    grunt.registerTask('deploy', [
        'clean:deploy',
        'fontello:build',
        'assemble:build',
        'copy:deploy',
        'concat:deploy',
        'sass:deploy',
        'uglify',
        'imagemin:deploy',
        'favicons:deploy',
        'modernizr:deploy',
        'hashres:deploy'
    ]);
};
