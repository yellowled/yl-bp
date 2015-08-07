// Create XML sitemap
module.exports = function(grunt) {
    grunt.config('sitemap', {
        build: {
            siteRoot: './',
            pattern: ['*.html'],
            homepage: 'http://example.org/',
            changefreq: 'monthly'
        }
    });

    grunt.loadNpmTasks('grunt-sitemap');
};
