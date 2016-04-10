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
                src: 'src/styles/*.css',
                dest: 'src/styles'
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
                src: 'src/styles/*.css',
                dest: 'dist/styles'
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
