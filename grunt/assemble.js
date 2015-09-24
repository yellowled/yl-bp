// Build static HTML from Handlebars templates using assemble.io
module.exports = function(grunt) {
    grunt.config('assemble', {
        options: {
            ext: '.html',
            flatten: true,
            partials: ['src/inc/*.hbs'],
            layoutdir: 'src/tpl/',
            layout: 'default.hbs'
        },
        dev: {
            options: {
                production: false
            },
            src: ['src/*.hbs'],
            dest: 'src/'
        },
        stage: {
            options: {
                production: false
            },
            src: ['src/*.hbs'],
            dest: 'dist/'
        },
        deploy: {
            options: {
                production: true
            },
            src: ['src/*.hbs'],
            dest: 'dist/'
        }
    });
};
