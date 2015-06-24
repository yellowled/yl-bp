// Configuration
var browserSync = require('browser-sync');

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

    // Init browserSync manually
    grunt.registerTask('bs-init', function () {
        var done = this.async();

        browserSync({
            files: [
                '*.html',
                'styles/*.css',
                'scripts/*.js'
            ],
            server: './',
            watchTask: true
        }, function (err, bs) {
            done();
        });
    });

    // Inject CSS
    grunt.registerTask('bs-inject', function () {
        browserSync.reload(['styles/master.css']);
    });

    // Init
    grunt.registerTask('init', [
        // 'svgstore',
        'assemble:dev',
        'sass:dev',
        'autoprefixer:dev',
        'concat'
    ]);

    // Development
    grunt.registerTask('dev', [
        'init',
        'bs-init',
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

    // Testing
    grunt.registerTask('test', [
        'htmlhint',
        'jshint',
        'scsslint'
    ]);
};
