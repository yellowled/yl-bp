// Clean up deployment directory
module.exports = function(grunt) {
    grunt.config('clean', {
        deploy: [
            'dist'
        ],
        srcdir: [
            'src/**/*.html',
            'src/sitemap.xml',
            'src/img/sprite.svg',
            'src/scripts/master.*',
            'src/styles'
        ]
    });
};
