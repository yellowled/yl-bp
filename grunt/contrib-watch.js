// Watch project files for and spawn associated tasks upon changes
module.exports = function(grunt) {
    grunt.config('watch', {
        icons: {
            files: 'fontello.json',
            tasks: ['fontello:build'],
            options: {
                atBegin: true,
                livereload: false
            }
        },
        js: {
            files: ['scripts/main.js'],
            tasks: ['concat'],
            options: {
                atBegin: true,
                livereload: true
            }
        },
        assemble: {
            files: ['*.hbs', 'src/inc/*.hbs', 'src/tpl/*.hbs'],
            tasks: ['assemble:dev'],
            options: {
                atBegin: true,
                livereload: false
            }
        },
        html: {
            files: ['*.html'],
            tasks: [],
            options: {
                atBegin: false,
                livereload: true
            }
        },
        scss: {
            files: 'scss/**/*.scss',
            tasks: ['sass:dev', 'autoprefixer:dev'],
            options: {
                atBegin: true,
                livereload: false
            }
        },
        css: {
            files: 'styles/*.css',
            tasks: [],
            options: {
                atBegin: false,
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
