// Compile SCSS files to CSS
module.exports = function(grunt) {
    grunt.config('sass', {
        build: {
            options: {
                outputStyle: 'nested',
                imagePath: 'img',
                sourceMap: true,
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
    });

    grunt.loadNpmTasks('grunt-sass');
};
