// Watch project files for and spawn associated tasks upon changes
module.exports = function(grunt) {
    grunt.config('watch', {
        options: {
            spawn: false
        },
        // svg: {
        //     files: 'src/icons/*.svg',
        //     tasks: ['svgstore'],
        // },
        assemble: {
            files: 'src/**/*.hbs',
            tasks: ['assemble:dev'],
        },
        scss: {
            files: 'src/scss/**/*.scss',
            tasks: ['sass', 'postcss:dev', 'bs-inject-css'],
        },
        js: {
            files: 'src/scripts/main.js',
            tasks: ['concat', 'bs-inject-js'],
        }
    });
};
