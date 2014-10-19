// Add vendor prefixes based on caniuse.com

module.exports = function(grunt) {
    grunt.config('autoprefixer', {
        options: {
            browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
            cascade: false,
            map: true,
            silent: false
        },
        dev: {
            expand: true,
            flatten: true,
            src: 'styles/*.css',
            dest: 'styles/'
        },
        deploy: {
            expand: true,
            flatten: true,
            src: 'dist/styles/*.css',
            dest: 'dist/styles/'
        }
    });

    grunt.loadNpmTasks('grunt-autoprefixer');
};