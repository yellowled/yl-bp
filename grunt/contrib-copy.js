module.exports = function(grunt) {
    grunt.config('copy', {
        deploy: {
            files: [{
                src: ['.htaccess',
                      'robots.txt',
                      'scripts/jquery/jquery.min.js',
                      'scripts/helpers/boxsizing.htc',
                      'font/*',
                      '*.html'],
                dest: 'dist/'
            }],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
