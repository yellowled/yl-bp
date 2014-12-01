// Copy files not copied by other tasks to deployment directory
module.exports = function(grunt) {
    grunt.config('copy', {
        stage: {
            files: [{
                src: ['.htaccess',
                      'robots.txt',
                      'apple-touch-icon.png',
                      'favicon.ico',
                      'font/*',
                      // 'scripts/helpers/boxsizing.htc',
                      'scripts/jquery/dist/jquery.min.js',
                      'scripts/jquery/dist/jquery.min.map',
                      'styles/*.map'],
                dest: 'dist/'
            }],
        },
        deploy: {
            files: [{
                src: ['.htaccess',
                      'robots.txt',
                      'apple-touch-icon.png',
                      'favicon.ico',
                      'font/*',
                      // 'scripts/helpers/boxsizing.htc',
                      'scripts/jquery/dist/jquery.min.js',
                      'scripts/jquery/dist/jquery.min.map',
                      'styles/*.map'],
                dest: 'dist/'
            }],
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
