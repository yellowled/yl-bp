// Copy files not copied by other tasks to deployment directory
module.exports = function(grunt) {
    grunt.config('copy', {
        deploy: {
            files: [{
                src: ['.htaccess',
                      'robots.txt',
                      'font/*',
                      // 'scripts/helpers/boxsizing.htc',
                      'scripts/jquery/dist/jquery.min.js',
                      'scripts/jquery/dist/jquery.min.map'],
                dest: 'dist/'
            }],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
