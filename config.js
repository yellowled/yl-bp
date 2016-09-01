// Grunt configuration
module.exports = {
    autoprefixer: {
        browsers:   ['> 1%', 'last 2 versions']
    },
    cachebust: {
        assets: [
                    'styles/*.css',
                    'scripts/*.js'
                ],
        cwd:        'dist',
        src:        ['*.html']
    },
    clean: {
        deploy:     ['dist'],
        srcdir: [
                    'src/*.html',
                    'src/img/sprite.svg',
                    'src/sitemap.xml',
                    'src/scripts/master.*',
                    'src/styles'
                ]
    },
    concat: {
        src: [
                    'node_modules/svg4everybody/dist/svg4everybody.js',
                    'node_modules/respimage/respimage.js',
                    'node_modules/lazysizes/lazysizes.js',
                    'node_modules/responsive-nav/responsive-nav.js',
                    'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
                    'node_modules/slick-carousel/slick/slick.js',
                    'node_modules/fr-tabs/dist/frtabs.min.js',
                    'node_modules/fr-accordion/dist/fraccordion.min.js',
                    'src/scripts/main.js'
              ],
        dest:       'src/scripts/master.js'
    },
    copy: {
        src: [
                    '.htaccess',
                    'robots.txt',
                    'apple-touch-icon.png',
                    'favicon.ico',
                    'scripts/jquery/dist/jquery.min.js',
                    'scripts/jquery/dist/jquery.min.map'
              ],
        dest:       'dist'
    },
    imagemin: {
        cwd:        'src',
        src:        ['img/**/*.{gif,jpg,png}'],
        dest:       'dist'
    },
    init: {
        src: [
                    'jquery/dist/jquery.min.js',
                    'jquery/dist/jquery.min.map'
              ],
        dest:       'src/scripts'
    },
    jshint: {
        srcfiles: [
                    'gruntfile.js',
                    'config.js',
                    'grunt/*.js',
                    'src/scripts/main.js'
                  ]
    },
    modernizr: {
        dev:        'src/scripts/modernizr/modernizr.js',
        dest:       'dist/scripts/modernizr/modernizr.js',
        srcfiles: [
                    'node_modules/node-normalize-scss/_normalize.scss',
                    'src/scss/**/*.scss',
                    'node_modules/magnific-popup/src/css/main.scss',
                    'node_modules/slick-carousel/slick/slick.scss',
                    'src/scripts/master.js'
        ]
    },
    postcss: {
        src:        'src/styles/*.css',
        dev:        'src/styles',
        dest:       'dist/styles'
    },
    sass: {
        cwd:        'src/scss',
        dest:       'src/styles',
    },
    sitemap: {
        domain:     '<%= pkg.homepage %>',
        changes:    'monthly',
        pattern:    ['src/*.html']
    },
    stylelint: {
        cwd:        'src/scss',
        srcfiles: [
                    'base/**/*.scss',
                    'mixins/**/*.scss',
                    'modules/**/*.scss',
                    'settings/**/*.scss',
                    '*.scss'
                  ]
    },
    svgmin: {
        src:        ['img/**/*.svg']
    },
    svgstore: {
        src:        ['src/icons/*.svg']
    },
    uglify: {
        dest:       'dist/scripts/master.js'
    }
};
