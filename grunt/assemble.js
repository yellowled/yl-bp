// Build static HTML from Handlebars templates using assemble.io
module.exports = function(grunt) {
    grunt.config('assemble', {
        options: {
            ext: '.html',
            partials: ['src/inc/*.hbs'],
            layoutdir: 'src/tpl/',
            layout: 'default.hbs'
        },
        dev: {
            options: {
                production: false
            },
            src: ['*.hbs'],
            dest: './'
        },
        stage: {
            options: {
                production: false
            },
            src: ['*.hbs'],
            dest: 'dist/'
        },
        deploy: {
            options: {
                production: true
            },
            src: ['*.hbs'],
            dest: 'dist/'
        }
    });
};
