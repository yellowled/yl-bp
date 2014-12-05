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

    // Staging
    grunt.registerTask('stage', [
        'clean:deploy',
        'fontello:build',
        'assemble:stage',
        'copy:stage',
        'concat',
        'sass:deploy',
        'autoprefixer:deploy',
        'uglify',
        'imagemin:deploy',
        'svgmin:deploy',
        'modernizr',
        'hashres:deploy'
    ]);

    // Deployment
    grunt.registerTask('deploy', [
        'clean:deploy',
        'fontello:build',
        'assemble:deploy',
        'copy:deploy',
        'concat',
        'sass:deploy',
        'autoprefixer:deploy',
        'uglify',
        'imagemin:deploy',
        'svgmin:deploy',
        'modernizr',
        'hashres:deploy'
    ]);
};
