module.exports = function(grunt) {
    // Load tasks when needed
    require('jit-grunt')(grunt);

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
        'clean:deploy',
        'processhtml:deploy',
        'copy:deploy',
        'concat',
        'sass',
        'postcss:dev',
        'postcss:deploy',
        'uglify',
        'svgstore',
        'imagemin',
        'svgmin',
        'modernizr',
        'cacheBust',
        'sitemap',
        'compress'
    ]);
};