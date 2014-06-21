// assemble.io – Build static HTML from Handlebars templates

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
        deploy: {
            options: {
                production: true
            },
            src: ['*.hbs'],
            dest: './'
        }
    });

    grunt.loadNpmTasks('assemble');
};
