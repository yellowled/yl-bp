// Create XML sitemap
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('sitemap', {
        build: {
            siteRoot: 'src',
            pattern: ['src/*.html', 'src/**/*.html', '!src/scripts/**/*.html'],
            homepage: config.sitemap.domain,
            changefreq: config.sitemap.changes
        }
    });
};
