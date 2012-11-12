module.exports = function(grunt) {
    // Config
    grunt.initConfig({
        pkg: '<json:package.json>',

        lint: {
            all: ['grunt.js',
                  // 'scripts/plugins.js',
                  'scripts/main.js']
        },

        clean: {
            deploy: ['dist/']
        },

        server: {
            port: 8000,
            base: '.'
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
            // Define any tests you want to impliticly include.
            'tests' : [],
            'parseFiles' : true,
            // parseFiles = true: crawl all *.js, *.css, *.scss files; override by defining "files" array
            // 'files' : [],
            'matchCommunityTests' : false,
            'customTests' : [],
            'excludeFiles' : ['grunt.js','package.json']
        },

        concat: {
            dev: {
                src: ['scripts/plugins.js', 'scripts/main.js'],
                dest: 'scripts/master.js'
            },

            deploy: {
                src: ['scripts/plugins.js', 'scripts/main.js'],
                dest: 'dist/scripts/master.js'
            }
        },

        min: {
            deploy: {
                src: ['<config:concat.deploy.dest>'],
                dest: '<config:concat.deploy.dest>'
            },
            colorbox: {
                src: 'scripts/plugins/jquery.colorbox.js',
                dest: 'dist/scripts/plugins/jquery.colorbox.js'
            },
            syncheight: {
                src: 'scripts/plugins/jquery.syncheight.js',
                dest: 'dist/scripts/plugins/jquery.syncheight.js'
            },
            tabs: {
                src: 'scripts/plugins/jquery.tabs.js',
                dest: 'dist/scripts/plugins/jquery.tabs.js'
            },
            tipsy: {
                src: 'scripts/plugins/jquery.tipsy.js',
                dest: 'dist/scripts/plugins/jquery.tipsy.js'
            },
            slideshow: {
                src: 'scripts/plugins/responsiveslides.js',
                dest: 'dist/scripts/plugins/responsiveslides.js'
            }
        },

        compass: {
            dev: {
                src: 'scss',
                dest: 'styles',
                outputstyle: 'nested',
                linecomments: false,
                forcecompile: true,
                debugsass: false,
                images: 'img'
            },

            deploy: {
                src: 'scss',
                dest: 'dist/styles',
                outputstyle: 'compressed',
                linecomments: false,
                forcecompile: true,
                debugsass: false,
                images: 'img'
            }
        },

        pngmin: {
            src: ['img/*.png'],
            dest: 'dist/img/'
        },
        // Not used in any task, needs to be fired manually
        pngnq: {
            src: ['img/*.png'],
            dest: 'dist/img/'
        },

        jpgmin: {
            src: ['img/*.jpg', 'img/*.jpeg'],
            dest: 'dist/img/'
        },

        copy: {
            deploy: {
                files: {
                    'dist/': ['*.html', '.htaccess', 'robots.txt'],
                    'dist/scripts/vendor/': ['scripts/vendor/jquery-1.8.2.min.js', 'scripts/vendor/boxsizing.htc']
                }
            }
        },

        reload: {
            port: 8001,
            proxy: {
                host: 'localhost',
                port: 8000
            }
        },

        watch: {
            html: {
                files: ['*.html'],
                tasks: 'reload'
            },

            js: {
                files: ['scripts/plugins.js', 'scripts/main.js'],
                tasks: 'concat:dev reload'
            },

            scss: {
                files: ['scss/**/*.scss'],
                tasks: 'compass:dev reload'
            }
        },

        hashres: {
            deploy: {
                files: [
                    'dist/scripts/master.js',
                    'dist/styles/master.css',
                    'dist/styles/oldie.css'
                ],
                out: 'dist/*.html'
            }
        }
    });
    // Load required tasks
    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-imagine');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-reload');
    // Default task
    grunt.registerTask('default', 'server watch');
    // In development
    grunt.registerTask('dev', 'lint concat:dev compass:dev');
    // Deployment
    grunt.registerTask('deploy', 'clean:deploy lint concat:deploy min compass:deploy pngmin jpgmin copy:deploy modernizr hashres:deploy');
};
