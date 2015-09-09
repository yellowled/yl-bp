// Create SVG sprite from single SVGs
module.exports = function(grunt) {
    grunt.config('svgstore', {
        options: {
            prefix: '',
            cleanup: true,
            cleanupdefs: true
        },
        build: {
            files: {
                'img/sprite.svg': ['src/svg/*.svg']
            }
        }
    });
};
