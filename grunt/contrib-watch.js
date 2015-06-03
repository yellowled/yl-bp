// Watch project files for and spawn associated tasks upon changes
module.exports = function(grunt) {
    grunt.config('watch', {
        // svg: {
        //     files: 'src/svg/*.svg',
        //     tasks: ['svgstore:build'],
        //     options: {
        //         atBegin: true,
        //         livereload: true
        //     }
        // },
        icons: {
            files: 'fontello.json',
            tasks: ['fontello:build'],
            options: {
                atBegin: true
            }
        },
        assemble: {
            files: ['*.hbs', 'src/inc/*.hbs', 'src/tpl/*.hbs'],
            tasks: ['assemble:dev'],
            options: {
                atBegin: true
            }
        },
        scss: {
            files: 'scss/**/*.scss',
            tasks: ['sass:dev', 'autoprefixer:dev'],
            options: {
                atBegin: true
            }
        },
        js: {
            files: ['scripts/main.js'],
            tasks: ['concat'],
            options: {
                atBegin: true
            }
        }
    });
};
