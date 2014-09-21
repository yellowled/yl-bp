// Generate iconfont build from JSON config

module.exports = function(grunt) {
    grunt.config('fontello', {
        options: {
            config: 'fontello.json',
            zip: 'scripts/',
            fonts: 'font/',
            styles: 'scss/iconfont/',
            scss: true,
            force: true
        },
        build: {
            config: 'fontello.json',
            fonts: 'font/',
            styles: 'scss/iconfont/'
        },
    });

    grunt.loadNpmTasks('grunt-fontello');
};
