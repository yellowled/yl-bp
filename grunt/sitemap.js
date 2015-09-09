// Create XML sitemap
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('sitemap', {
        build: {
            siteRoot: './',
            pattern: ['*.html'],
            homepage: config.sitemap.domain,
            changefreq: config.sitemap.changes
        }
    });

    grunt.loadNpmTasks('grunt-sitemap');
};
