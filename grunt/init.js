// Init
module.exports = function(grunt) {
    grunt.registerTask('init', [
        // 'svgstore',
        'assemble:dev',
        'sass',
        'autoprefixer:dev',
        'concat'
    ]);
};
