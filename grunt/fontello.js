module.exports = function(grunt) {
    grunt.config('fontello', {
        options: {
            config: 'fontello.json',
            zip: 'scripts/',
            fonts: 'font/',
            styles: 'scss/fontello/',
            sass: true,
            force: true
        },
        build: {
            config: 'fontello.json',
            fonts: 'font/',
            styles: 'scss/fontello/'
        },
    });

    grunt.loadNpmTasks('grunt-fontello');
};
