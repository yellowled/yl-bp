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

    // Init
    grunt.registerTask('init', [
        // 'svgstore',
        'assemble:dev',
        'sass:dev',
        'autoprefixer:dev',
        'concat'
    ]);

    // Testing
    grunt.registerTask('test', [
        'htmlhint',
        'jshint',
        'scsslint'
    ]);

    // Development
    grunt.registerTask('dev', [
        'init',
        'browserSync',
        'watch'
    ]);

    // Staging
    grunt.registerTask('stage', [
        'clean',
        'assemble:stage',
        'copy:stage',
        'concat',
        'sass:deploy',
        'autoprefixer:deploy',
        'uglify',
        // 'svgstore',
        'imagemin',
        'svgmin',
        'modernizr',
        'hashres'
    ]);

    // Deployment
    grunt.registerTask('deploy', [
        'clean',
        'assemble:deploy',
        'copy:deploy',
        'concat',
        'sass:deploy',
        'autoprefixer:deploy',
        'uglify',
        // 'svgstore',
        'imagemin',
        'svgmin',
        'modernizr',
        'hashres'
    ]);
};
