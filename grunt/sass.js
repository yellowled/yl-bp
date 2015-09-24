// Compile SCSS files to CSS
module.exports = function(grunt) {
    grunt.config('sass', {
        build: {
            options: {
                outputStyle: 'nested',
                precision: 5,
                sourceMap: true
            },
            files: [{
                expand: true,
                cwd: 'src/scss',
                src: ['*.scss'],
                dest: 'src/styles',
                ext: '.css'
            }]
        }
    });
};
