module.exports = function(grunt) {
    grunt.config('imagemin', {
        deploy: {
            options: {
                optimizationLevel: 1,
                progressive: false
            },
            files: [{
                expand: true,
                cwd: '.',
                src: ['img/**/*.png', 'img/**/*.jpg'],
                dest: 'dist/'
            }],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
