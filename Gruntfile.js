// grunt-contrib-livereload Middleware
'use strict';
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
    return connect.static(path.resolve(point));
};

// Configuration
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: '<json:package.json>',

        jshint: {
            all: ['scripts/plugins.js', 'scripts/main.js']
        },

        htmllint: {
            all: ['*.html']
        },

        clean: {
            deploy: ['dist']
        },

        connect: {
            livereload: {
                options: {
                    port: 9001,
                    middleware: function(connect, options) {
                        return [lrSnippet, folderMount(connect, '.')];
                    }
                }
            }
        },

        modernizr: {
            'devFile' : 'scripts/vendor/modernizr-2.6.2.min.js',
            'outputFile' : 'dist/scripts/vendor/modernizr-2.6.2.min.js',
            'extra' : {
                'shiv' : false,
                'printshiv' : true,
                'load' : false,
                'mq' : true,
                'cssclasses' : true
            },
            'extensibility' : {
                'addtest' : false,
                'prefixed' : false,
                'teststyles' : false,
                'testprops' : false,
                'testallprops' : false,
                'hasevents' : false,
                'prefixes' : false,
                'domprefixes' : false
            },
            'uglify' : true,
            'tests' : [],
            // parseFiles = true: crawl all *.js, *.css, *.scss files;
            // override by defining "files" array
            'parseFiles' : true,
            'files' : ['scss/**/*.scss', 'scripts/**/*.js'],
            'matchCommunityTests' : false,
            'customTests' : [],
            'excludeFiles' : ['Gruntfile.js','package.json']
        },

        concat: {
            dev: {
                src: ['scripts/plugins.js', 'scripts/main.js'],
                dest: 'scripts/master.js'
            }
        },

        uglify: {
            deploy: {
                src: 'scripts/master.js',
                dest: 'dist/scripts/master.js'
            },
            plugins: {
                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: ['scripts/plugins/*.js'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        compass: {
            dev: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'styles',
                    imagesDir: 'img',
                    outputStyle: 'nested',
                    noLineComments: true,
                    force: true,
                    debugInfo: false
                }
            },
            deploy: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'dist/styles',
                    imagesDir: 'img',
                    outputStyle: 'compressed',
                    noLineComments: true,
                    force: true,
                    debugInfo: false
                }
            }
        },

        imagemin: {
            deploy: {
                options: {
                    optimizationLevel: 1,
                    progressive: false
                },
                files: [
                    {
                        expand: true,
                        cwd: '.',
                        src: ['img/**/*.png', 'img/**/*.jpg'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        copy: {
            deploy: {
                files: [
                    {
                        src: ['*.html',
                              '.htaccess',
                              'robots.txt',
                              'scripts/vendor/jquery-1.9.1.min.js',
                              'scripts/vendor/boxsizing.htc'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        regarde: {
            html: {
                files: '*.html',
                tasks: ['concat:dev', 'compass:dev', 'livereload']
            },
            js: {
                files: ['scripts/plugins.js', 'scripts/main.js'],
                tasks: ['concat:dev', 'compass:dev', 'livereload']
            },
            scss: {
                files: 'scss/**/*.scss',
                tasks: ['concat:dev', 'compass:dev', 'livereload']
            }
        },

        hashres: {
            options: {
                encoding: 'utf-8',
                fileNameFormat: '${hash}.${ext}',
                renameFiles: true
            },
            deploy: {
                src: [
                    'dist/scripts/master.js',
                    'dist/styles/master.css',
                    'dist/styles/oldie.css'],
                dest: 'dist/*.html',

            }
        }
    });
    // Load required tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-regarde');
    // Default
    grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);
    // Development
    grunt.registerTask('check', ['htmllint', 'jshint']);
    // Deployment
    grunt.registerTask('deploy', ['clean:deploy', 'copy:deploy', 'concat:dev', 'compass:deploy', 'uglify', 'imagemin:deploy', 'modernizr', 'hashres:deploy']);
};
