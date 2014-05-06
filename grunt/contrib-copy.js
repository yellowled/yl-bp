// Copy files not copied by other tasks to deployment directory

module.exports = function(grunt) {
    grunt.config('copy', {
        deploy: {
            files: [{
                src: ['.htaccess',
                      'robots.txt',
                      'scripts/jquery/dist/jquery.min.js',
                      'scripts/jquery/dist/jquery.min.map',
                      // 'scripts/helpers/boxsizing.htc',
                      'font/*',
                      '*.html'],
                dest: 'dist/'
            }],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
