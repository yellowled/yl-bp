module.exports = function(grunt) {
    // Load required tasks
    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-html');

    // Config
    grunt.initConfig({
        pkg: '<json:package.json>',

        lint: {
            all: ['grunt.js','scripts/main.js']
        },

        htmllint: {
            all: ['*.html']
        },

        clean: {
            deploy: ['dist/']
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

        copy: {
            deploy: {
                files: {
                    'dist/': ['*.html', '.htaccess', 'robots.txt'],
                    'dist/img/': 'img/**',
                    'dist/scripts/vendor/': 'scripts/vendor/**'
                }
            }
        },

        watch: {
            js: {
                files: ['scripts/plugins.js', 'scripts/main.js'],
                tasks: 'lint:all concat:dev'
            },

            scss: {
                files: ['scss/**/*.scss'],
                tasks: 'compass:dev'
            }
        }
    });
    // Default task
    grunt.registerTask('default', 'dev');
    // In development
    grunt.registerTask('dev', 'lint htmllint concat:dev compass:dev');
    // Deployment
    grunt.registerTask('deploy', 'clean:deploy lint htmllint concat:deploy min:deploy compass:deploy copy:deploy');
};
