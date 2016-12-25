// Process HTML includes
module.exports = function(grunt) {
    grunt.config('processhtml', {
        options: {
            includeBase: 'src/includes/'
        },
        dev: {
            files: [{
                expand: true,
                cwd: 'src/pages',
                src: ['*.html'],
                dest: 'src'
            }]
        },
        deploy: {
            files: [{
                expand: true,
                cwd: 'src/pages',
                src: ['*.html'],
                dest: 'dist'
            }]
        }
    });
};
