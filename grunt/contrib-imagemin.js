// Optimize image assets (GIF/JPG/PNG/SVG)

module.exports = function(grunt) {
    grunt.config('imagemin', {
        deploy: {
            options: {
                optimizationLevel: 1,
                progressive: true,
                interlaced: true
            },
            files: [{
                expand: true,
                cwd: '.',
                src: ['img/**/*.{gif,jpg,png,svg}'],
                dest: 'dist/'
            }],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
};
