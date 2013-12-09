// Generate favicons from source file

module.exports = function(grunt) {
    grunt.config('favicons', {
        options: {
            'trueColor': false,
            'precomposed': true,
            'appleTouchBackgroundColor': "auto",
            'windowsTile': true,
            'coast': false,
            'tileBlackWhite': true,
            'tileColor': "auto"
        },
        deploy: {
            src: 'favicon-source.png',
            dest: 'dist/'
        },
    });

    grunt.loadNpmTasks('grunt-favicons');
};
