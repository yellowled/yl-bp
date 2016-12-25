// Compress files using gzip
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('compress', {
        sitemap: {
            options: {
                mode: 'gzip',
                pretty: true
            },
            files: [{
                expand: true,
                flatten: true,
                src: config.compress.src,
                dest: config.compress.dest,
                ext: '.xml.gz'
            }]
        }
    });
};
