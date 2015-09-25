// Build static HTML from Handlebars templates using assemble.io
module.exports = function(grunt) {
    grunt.config('assemble', {
        options: {
            ext: '.html',
            layout: 'default.hbs',
            layoutdir: 'src/layouts/',
            partials: ['src/partials/*.hbs']
        },
        dev: {
            options: {
                production: false
            },
            expand: true,
            cwd: 'src/pages/',
            src: ['**/*.hbs'],
            dest: 'src/'
        },
        stage: {
            options: {
                production: false
            },
            expand: true,
            cwd: 'src/pages/',
            src: ['**/*.hbs'],
            dest: 'dist/'
        },
        deploy: {
            options: {
                production: true
            },
            expand: true,
            cwd: 'src/pages/',
            src: ['**/*.hbs'],
            dest: 'dist/'
        }
    });
};
