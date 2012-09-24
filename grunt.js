module.exports = function(grunt) {
    // Load required tasks
    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-imagine');

    // Config
    grunt.initConfig({
        pkg: '<json:package.json>',

        lint: {
            all: ['grunt.js','scripts/main.js']
        },

        clean: {
            deploy: ['dist/']
        },

        server: {
            port: 8000,
            base: '.'
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
                    'dist/scripts/vendor/': 'scripts/vendor/**'
                }
            }
        },

        watch: {
            js: {
                files: ['scripts/plugins.js', 'scripts/main.js'],
                tasks: 'concat:dev'
            },

            scss: {
                files: ['scss/**/*.scss'],
                tasks: 'compass:dev'
            }
        }
    });
    // Default task
    grunt.registerTask('default', 'server watch');
    // In development
    grunt.registerTask('dev', 'lint concat:dev compass:dev');
    // Deployment
    grunt.registerTask('deploy', 'clean:deploy lint concat:deploy min:deploy compass:deploy pngmin jpgmin copy:deploy');
};
