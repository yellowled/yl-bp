// Init
module.exports = function(grunt) {
    grunt.registerTask('init', [
        // 'svgstore',
        'assemble:dev',
        'sass',
        'postcss:dev',
        'concat'
    ]);
};
