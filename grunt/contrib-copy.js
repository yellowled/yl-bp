// Copy files not copied by other tasks to deployment directory
module.exports = function(grunt) {
    grunt.config('copy', {
        stage: {
            files: [{
                expand: true,
                cwd: '.',
                src: ['.htaccess',
                      'robots.txt',
                      'apple-touch-icon.png',
                      'favicon.ico',
                      'scripts/jquery/dist/jquery.min.js',
                      'scripts/jquery/dist/jquery.min.map'],
                dest: 'dist/'
            }]
        },
        deploy: {
            files: [{
                expand: true,
                cwd: '.',
                src: ['.htaccess',
                      'robots.txt',
                      'apple-touch-icon.png',
                      'favicon.ico',
                      'scripts/jquery/dist/jquery.min.js',
                      'scripts/jquery/dist/jquery.min.map'],
                dest: 'dist/'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
