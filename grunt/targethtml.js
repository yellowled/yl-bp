// To use this for target-based includes, e.g. to include Piwik snippet:
// <!--(if target deploy)><!(endif)-->
// → github.com/changer/grunt-targethtml

module.exports = function(grunt) {
    grunt.config('targethtml', {
        deploy: {
            files: [{
                expand: true,
                src: ['*.html'],
                dest: 'dist/'
            }],
        },
    });

    grunt.loadNpmTasks('grunt-targethtml');
};
