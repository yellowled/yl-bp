// Watch project files for and spawn associated tasks upon changes
module.exports = function(grunt) {
    grunt.config('watch', {
        // svg: {
        //     files: 'src/svg/*.svg',
        //     tasks: ['svgstore'],
        // },
        assemble: {
            files: ['*.hbs', 'src/inc/*.hbs', 'src/tpl/*.hbs'],
            tasks: ['assemble:dev'],
        },
        scss: {
            files: 'scss/**/*.scss',
            tasks: ['sass', 'autoprefixer:dev', 'bs-inject'],
        },
        js: {
            files: ['scripts/main.js'],
            tasks: ['concat'],
        }
    });
};
