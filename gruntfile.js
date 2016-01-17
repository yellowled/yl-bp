module.exports = function(grunt) {
    // Load tasks when needed
    require('jit-grunt')(grunt, {
        scsslint: 'grunt-scss-lint'
    });

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
        'init',
        'bs-init',
        'watch'
    ]);

    // Deployment
    grunt.registerTask('deploy', [
        'clean',
        'processhtml:deploy',
        'copy:deploy',
        'concat',
        'sass',
        'postcss',
        'cssmin',
        'uglify',
        // 'svgstore',
        'imagemin',
        'svgmin',
        'modernizr',
        'hashres',
        'sitemap',
        'compress'
    ]);
};
