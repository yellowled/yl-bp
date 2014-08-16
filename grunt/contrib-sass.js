// Compile SCSS files to CSS

module.exports = function(grunt) {
    grunt.config('sass', {
        dev: {
            options: {
                sourcemap: true,
                trace: false,
                style: 'nested',
                precision: 5
            },
            files: [{
                expand: true,
                cwd: 'scss',
                src: ['*.scss'],
                dest: 'styles',
                ext: '.css'
            }],
        },
        deploy: {
            options: {
                sourcemap: true,
                trace: false,
                style: 'compressed',
                precision: 5
            },
            files: [{
                expand: true,
                cwd: 'scss',
                src: ['*.scss'],
                dest: 'dist/styles',
                ext: '.css'
            }],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};
