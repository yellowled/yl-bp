// Optimize vector images (SVG)
module.exports = function(grunt) {
    grunt.config('svgmin', {
        options: {
            plugins: [
                { cleanupIDs: false }
            ]
        },
        deploy: {
            files: [{
                expand: true,
                cwd: '.',
                src: ['img/**/*.svg'],
                dest: 'dist/'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-svgmin');
};
