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
            'src/scripts/fitvids',
            'src/scripts/gmaps',
            'src/scripts/jQuery-Collapse',
            'src/scripts/jquery-accessible-tabs',
            'src/scripts/jquery-cycle2',
            'src/scripts/jquery',
            'src/scripts/lazysizes',
            'src/scripts/magnific-popup',
            'src/scripts/respimage',
            'src/scripts/respond',
            'src/scripts/responsive-nav',
            'src/scripts/svg4everybody',
            'src/scripts/toast',
            'src/scripts/master.*',
            'src/styles'
        ]
    });
};
