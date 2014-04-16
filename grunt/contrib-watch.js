// Watch project files for and spawn associated tasks upon changes
// Run some tasks at grunt start, trigger live reload on some

module.exports = function(grunt) {
    grunt.config('watch', {
        icons: {
            files: 'fontello.json',
            tasks: ['fontello:build', 'sass:dev'],
            options: {
                atBegin: true,
                livereload: true,
                spawn: false
            },
        },
        html: {
            files: ['*.html'],
            tasks: [],
            options: {
                atBegin: false,
                livereload: true,
                spawn: false
            },
        },
        js: {
            files: ['scripts/main.js'],
            tasks: ['concat:dev'],
            options: {
                atBegin: true,
                livereload: true,
                spawn: false
            },
        },
        scss: {
            files: 'scss/**/*.scss',
            tasks: ['sass:dev'],
            options: {
                atBegin: true,
                livereload: false,
                spawn: true
            },
        },
        css: {
            files: 'styles/*.css',
            tasks: [],
            options: {
                atBegin: false,
                livereload: true,
                spawn: false
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
