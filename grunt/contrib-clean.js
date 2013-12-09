// Clean up the deployment directory

module.exports = function(grunt) {
    grunt.config('clean', {
        deploy: ['dist'],
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
