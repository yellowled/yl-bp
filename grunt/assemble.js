// → assemble.io
module.exports = function(grunt) {
    grunt.config('assemble', {
        options: {
            layoutdir: 'tpl',
            layout: 'default.hbs',
            partials: ['inc/*']
        },
        build: {
            src: '*.hbs',
            dest: './'
        }
    });

    grunt.loadNpmTasks('grunt-assemble');
};
