// Optimize vector images (SVG)
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('svgmin', {
        options: {
            plugins: [
                { cleanupIDs: false }
            ]
        },
        deploy: {
            files: [{
                expand: true,
                cwd: 'src',
                src: config.svgmin.src,
                dest: 'dist'
            }]
        }
    });
};
