// Generate favicons from source file

module.exports = function(grunt) {
    grunt.config('favicons', {
        options: {
            'trueColor': false,
            'precomposed': true,
            'windowsTile': false
        },
        deploy: {
            src: 'favicon-source.png',
            dest: 'dist/'
        },
    });

    grunt.loadNpmTasks('grunt-favicons');
};
