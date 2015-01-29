// Watch project files for and spawn associated tasks upon changes
module.exports = function(grunt) {
    grunt.config('watch', {
        icons: {
            files: 'fontello.json',
            tasks: ['fontello:build', 'sass:dev', 'autoprefixer:dev'],
            options: {
                atBegin: true,
                livereload: true,
                spawn: false
            }
        },
        assemble: {
            files: ['*.hbs', 'src/inc/*.hbs', 'src/tpl/*.hbs'],
            tasks: ['assemble:dev'],
            options: {
                atBegin: true,
                livereload: false,
                spawn: true
            }
        },
        html: {
            files: ['*.html'],
            tasks: [],
            options: {
                atBegin: false,
                livereload: true,
                spawn: false
            }
        },
        js: {
            files: ['scripts/main.js'],
            tasks: ['concat'],
            options: {
                atBegin: true,
                livereload: true,
                spawn: false
            }
        },
        scss: {
            files: 'scss/**/*.scss',
            tasks: ['sass:dev', 'autoprefixer:dev'],
            options: {
                atBegin: true,
                livereload: false,
                spawn: true
            }
        },
        css: {
            files: 'styles/*.css',
            tasks: [],
            options: {
                atBegin: false,
                livereload: true,
                spawn: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
