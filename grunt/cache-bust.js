// Hash CSS and JS assets, change filenames and references in markup
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('cacheBust', {
        options: {
            assets: config.cachebust.assets,
            baseDir: config.cachebust.cwd,
            deleteOriginals: true,
            length: 8,
            separator: '-'
        },
        all: {
            files: [{
                expand: true,
                cwd: config.cachebust.cwd,
                src: config.cachebust.src
            }]
        }
    });
};
