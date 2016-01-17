// Init
module.exports = function(grunt) {
    grunt.registerTask('init', [
        // 'svgstore',
        'processhtml:dev',
        'sass',
        'postcss',
        'concat'
    ]);
};
