// Optimize bitmap images (GIF/JPG/PNG)
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
                cwd: 'src',
                src: ['img/**/*.{gif,jpg,png}'],
                dest: 'dist'
            }]
        }
    });
};
