// Configuration
module.exports = function(grunt) {
    // Use time-grunt
    require('time-grunt')(grunt);

    // Initialize config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });

    // Load required tasks from submodules
    grunt.loadTasks('grunt');

    // Default task
    grunt.registerTask('default', ['dev']);

    // Development
    grunt.registerTask('dev', [
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
