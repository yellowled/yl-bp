// Minify CSS
module.exports = function(grunt) {
    grunt.config('cssmin', {
        options: {
            report: 'min',
            sourceMap: true
        },
        deploy: {
            files:[{
                expand: true,
                cwd: 'src/styles',
                src: ['*.css'],
                dest: 'dist/styles',
                ext: '.css'
            }]
        }
    });
};
