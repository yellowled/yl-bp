// Postprocess generated CSS
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('postcss', {
        build: {
            options: {
                diff: false,
                map: true,
                processors: [
                    require('pixrem')({
                        unitPrecision: 0
                    }),
                    require('autoprefixer')({
                        browsers: config.autoprefixer.browsers,
                        cascade: false,
                        remove: true
                    }),
                    require('css-mqpacker')({
                        sort: true
                    })
                ]
            },
            files: [{
                expand: true,
                flatten: true,
                src: 'src/styles/*.css',
                dest: 'src/styles'
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
                cwd: 'src/scss',
                src: [
                    'base/*.scss',
                    'mixins/*.scss',
                    'modules/*.scss',
                    'settings/*.scss',
                    '*.scss'
                ]
            }]
        }
    });
};
