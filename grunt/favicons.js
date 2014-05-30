// Generate favicons from source file

module.exports = function(grunt) {
    grunt.config('favicons', {
        options: {
            'trueColor': false,
            'precomposed': true,
            'appleTouchPadding': 0,
            'windowsTile': false
        },
        deploy: {
            src: 'favicon-source.png',
            dest: 'dist/'
        },
    });

    grunt.loadNpmTasks('grunt-favicons');
};
