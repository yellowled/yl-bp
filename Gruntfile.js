// Configuration
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: '<json:package.json>',

        htmlhint: {
            all: {
                options: {
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'doctype-first': true,
                    'tag-pair': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'img-alt-require': true,
                    'doctype-html5': true,
                    'id-class-value': true,
                    'style-disabled': true
                },
                src: ['*.html']
            }
        },

        jshint: {
            all: ['Gruntfile.js',
                  'scripts/main.js']
        },

        favicons: {
            options: {
                'trueColor': false,
                'precomposed': true,
                'appleTouchBackgroundColor': "auto",
                'windowsTile': true,
                'coast': false,
                'tileBlackWhite': true,
                'tileColor': "auto"
            },
            deploy: {
                src: 'favicon-source.png',
                dest: 'dist/'
            }
        },

        clean: {
            deploy: ['dist']
        },

        connect: {
            livereload: {
                options: {
                    port: 9001,
                    middleware: function(connect, options) {
                        return[
                            require('connect-livereload')(),
                            connect.static(options.base),
                            connect.directory(options.base)
                        ];
                    }
                }
            }
        },

        watch: {
            options: {
                atBegin: true,
                livereload: true
            },
            icons: {
                files: 'fontello.json',
                tasks: ['fontello:build'],
                options: {
                    spawn: false
                }
            },
            html: {
                files: '*.html',
                tasks: [],
                options: {
                    spawn: false
                }
            },
            js: {
                files: ['scripts/main.js'],
                tasks: ['concat:dev'],
                options: {
                    spawn: false
                }
            },
            scss: {
                files: 'scss/**/*.scss',
                tasks: ['sass:dev'],
                options: {
                    spawn: false
                }
            }
        },

        modernizr: {
            'devFile' : 'scripts/modernizr/modernizr.js',
            'outputFile' : 'dist/scripts/modernizr/modernizr.js',
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
            'files' : ['scss/**/*.scss',
                       'scripts/magnific-popup/dist/jquery.magnific-popup.js',
                       'scripts/magnific-popup/src/css/main.scss',
                       'scripts/jquery-cycle2/*.js',
                       'scripts/jquery-accessible-tabs/js/jquery.syncheight.js',
                       'scripts/jquery-accessible-tabs/js/jquery.tabs.js',
                       'scripts/gmaps/gmaps.js',
                       'scripts/*.js'],
            'matchCommunityTests' : false,
            'customTests' : [],
            'excludeFiles' : ['Gruntfile.js', '*.json']
        },

        concat: {
            dev: {
                src: ['scripts/helpers/log.js',
                      'scripts/accessifyhtml5-amd/accessifyhtml5.js',
                      'scripts/magnific-popup/dist/jquery.magnific-popup.js',
                      'scripts/jquery-cycle2/jquery.cycle2.core.js',
                      'scripts/jquery-cycle2/jquery.cycle2.autoheight.js',
                      'scripts/jquery-cycle2/jquery.cycle2.caption.js',
                      'scripts/jquery-cycle2/jquery.cycle2.command.js',
                      'scripts/jquery-cycle2/jquery.cycle2.hash.js',
                      'scripts/jquery-cycle2/jquery.cycle2.loader.js',
                      'scripts/jquery-cycle2/jquery.cycle2.pager.js',
                      'scripts/jquery-cycle2/jquery.cycle2.prevnext.js',
                      'scripts/jquery-cycle2/jquery.cycle2.progressive.js',
                      'scripts/jquery-cycle2/jquery.cycle2.tmpl.js',
                      'scripts/jquery-accessible-tabs/js/jquery.syncheight.js',
                      'scripts/jquery-accessible-tabs/js/jquery.tabs.js',
                      'scripts/gmaps/gmaps.js',
                      'scripts/main.js'],
                dest: 'scripts/master.js'
            },
            deploy: {
                src: ['scripts/accessifyhtml5-amd/accessifyhtml5.js',
                      'scripts/magnific-popup/dist/jquery.magnific-popup.js',
                      'scripts/jquery-cycle2/jquery.cycle2.core.js',
                      'scripts/jquery-cycle2/jquery.cycle2.autoheight.js',
                      'scripts/jquery-cycle2/jquery.cycle2.caption.js',
                      'scripts/jquery-cycle2/jquery.cycle2.command.js',
                      'scripts/jquery-cycle2/jquery.cycle2.hash.js',
                      'scripts/jquery-cycle2/jquery.cycle2.loader.js',
                      'scripts/jquery-cycle2/jquery.cycle2.pager.js',
                      'scripts/jquery-cycle2/jquery.cycle2.prevnext.js',
                      'scripts/jquery-cycle2/jquery.cycle2.progressive.js',
                      'scripts/jquery-cycle2/jquery.cycle2.tmpl.js',
                      'scripts/jquery-accessible-tabs/js/jquery.syncheight.js',
                      'scripts/jquery-accessible-tabs/js/jquery.tabs.js',
                      'scripts/gmaps/gmaps.js',
                      'scripts/main.js'],
                dest: 'scripts/master.js'
            }
        },

        uglify: {
            deploy: {
                src: 'scripts/master.js',
                dest: 'dist/scripts/master.js'
            }
        },

        sass: {
            dev: {
                options: {
                    sourcemap: false,
                    style: 'nested',
                    precision: 5
                },
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['*.scss'],
                    dest: 'styles',
                    ext: '.css'
                }]
            },
            deploy: {
                options: {
                    sourcemap: false,
                    style: 'compressed',
                    precision: 5
                },
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['*.scss'],
                    dest: 'dist/styles',
                    ext: '.css'
                }]
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
                        src: ['.htaccess',
                              'robots.txt',
                              'scripts/jquery/jquery.min.js',
                              'scripts/helpers/boxsizing.htc',
                              'font/*',
                              '*.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },

        hashres: {
            options: {
                encoding: 'utf-8',
                fileNameFormat: '${hash}.${ext}',
                renameFiles: true
            },
            deploy: {
                src: ['dist/styles/master.css',
                      'dist/styles/oldie.css',
                      'dist/scripts/master.js'],
                dest: 'dist/*.html',

            }
        },

        // To use this for target-based includes, e.g. to include Piwik snippet:
        // <!--(if target deploy)><!(endif)-->
        // → github.com/changer/grunt-targethtml
        targethtml: {
            deploy: {
                files: [{
                    expand: true,
                    src: ['*.html'],
                    dest: 'dist/'
                }],
            }
        },

        fontello: {
            options: {
                config: 'fontello.json',
                zip: 'scripts/',
                fonts: 'font/',
                styles: 'scss/fontello/',
                sass: true,
                force: true
            },
            build: {
                config: 'fontello.json',
                fonts: 'font/',
                styles: 'scss/fontello/'
            }
        }
    });
    // Load required tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-favicons');
    grunt.loadNpmTasks('grunt-fontello');
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-targethtml');
    // Default
    grunt.registerTask('default', ['connect', 'watch']);
    // Testing
    grunt.registerTask('test', ['htmlhint', 'jshint']);
    // Deployment
    grunt.registerTask('deploy', ['clean:deploy', 'fontello:build', 'copy:deploy', 'concat:deploy', 'sass:deploy', 'uglify', 'imagemin:deploy', 'favicons:deploy', 'modernizr', 'targethtml:deploy', 'hashres:deploy']);
};
