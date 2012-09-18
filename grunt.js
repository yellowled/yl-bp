module.exports = function(grunt) {
    // Load required tasks
    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    // Config
    grunt.initConfig({
        pkg: '<json:package.json>',
        lint: {
            files: ['grunt.js','scripts/main.js']
        },
        concat: {
            dist: {
                src: ['scripts/plugins.js', 'scripts/main.js'],
                dest: 'dist/scripts/main.js'
            }
        },
        min: {
            dist: {
                src: ['<config:concat.dist.dest>'],
                dest: '<config:concat.dist.dest>'
            }
        },
        compass: {
            dist: {
                src: 'scss',
                dest: 'styles',
                outputstyle: 'compressed',
                linecomments: false,
                forcecompile: true,
                debugsass: false,
                images: 'img'
            }
        },
        clean: {
            dist: ['dist/']
        },
        copy: {
            dist: {
                files: {
                    'dist/': ['*.html', '.htaccess', 'robots.txt'],
                    'dist/styles/': 'styles/**',
                    'dist/img/': 'img/**',
                    'dist/scripts/vendor/': 'scripts/vendor/**'
                }
            }
        },
        watch: {
            files: ['<config:lint.files>','scss/**/*.scss','*.html','.htaccess','robots.txt','img/**'],
            tasks: ['lint','clean:dist','concat','min','compass:dist','copy']
        }
    });
    // Default task.
    grunt.registerTask('default', 'watch');
};
