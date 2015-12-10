// Build static HTML from Handlebars templates using assemble.io
module.exports = function(grunt) {
    grunt.config('assemble', {
        options: {
            legacy: false,
            ext: '.html',
            layout: 'default.hbs',
            layoutdir: 'src/layouts',
            partials: ['src/partials/*.hbs']
        },
        dev: {
            options: {
                production: false,
                assets: 'src'
            },
            expand: true,
            cwd: 'src/pages',
            src: ['**/*.hbs'],
            dest: 'src'
        },
        stage: {
            options: {
                production: false,
                assets: 'dist'
            },
            expand: true,
            cwd: 'src/pages',
            src: ['**/*.hbs'],
            dest: 'dist'
        },
        deploy: {
            options: {
                production: true,
                assets: 'dist'
            },
            expand: true,
            cwd: 'src/pages',
            src: ['**/*.hbs'],
            dest: 'dist'
        }
    });
};
