// Compile SCSS files to CSS
module.exports = function(grunt) {
    grunt.config('sass', {
        dev: {
            options: {
                outputStyle: 'nested',
                precision: 5,
                sourceMap: true
            },
            files: [{
                expand: true,
                cwd: 'scss',
                src: ['*.scss'],
                dest: 'styles/',
                ext: '.css'
            }]
        },
        deploy: {
            options: {
                outputStyle: 'compressed',
                precision: 5,
                sourceMap: true
            },
            files: [{
                expand: true,
                cwd: 'scss',
                src: ['*.scss'],
                dest: 'dist/styles/',
                ext: '.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-sass');
};
