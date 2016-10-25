// Postprocess generated CSS
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('postcss', {
        dev: {
            options: {
                diff: false,
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: config.autoprefixer.browsers,
                        cascade: false,
                        remove: true
                    })
                ]
            },
            files: [{
                expand: true,
                flatten: true,
                src: config.postcss.src,
                dest: config.postcss.dev
            }]
        },
        deploy: {
            options: {
                diff: false,
                map: true,
                processors: [
                    require('pixrem')({
                        atrules: true,
                        unitPrecision: 0
                    }),
                    require('css-mqpacker')({
                        sort: true
                    }),
                    require('cssnano')()
                ]
            },
            files: [{
                expand: true,
                flatten: true,
                src: config.postcss.src,
                dest: config.postcss.dest
            }]
        },
        lint: {
            options: {
                writeDest: false,
                syntax: require('postcss-scss'),
                processors: [
                    require('stylelint')(),
                    require('postcss-reporter')({
                        clearMessages: true
                    })
                ]
            },
            files: [{
                expand: true,
                cwd: config.stylelint.cwd,
                src: config.stylelint.srcfiles
            }]
        }
    });
};