// Grunt configuration
module.exports = {
    autoprefixer: {
        browsers:   ['> 1%', 'last 2 versions']
    },
    concat: {
        src: [
                    // 'node_modules/pyrsmk-toast/src/toast.js',
                    // 'node_modules/svg4everybody/dist/svg4everybody.js',
                    'node_modules/respimage/respimage.js',
                    'node_modules/lazysizes/lazysizes.js',
                    'node_modules/responsive-nav/responsive-nav.js',
                    'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
                    'node_modules/slick-carousel/slick/slick.js',
                    'node_modules/tabslet/jquery.tabslet.js',
                    'node_modules/jquery-collapse/src/jquery.collapse.js',
                    'node_modules/jquery-collapse/src/jquery.collapse_storage.js',
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
    init: {
        src: [
                    'jquery/dist/jquery.min.js',
                    'jquery/dist/jquery.min.map'
              ],
        dest:       'src/scripts'
    },
    modernizr: {
        dev:        'src/scripts/modernizr/modernizr.js',
        dest:       'dist/scripts/modernizr/modernizr.js',
        srcfiles: [
                    'node_modules/node-normalize-scss/_normalize.scss',
                    'src/scss/**/*.scss',
                    'node_modules/magnific-popup/src/css/main.scss',
                    'node_modules/slick-carousel/slick/slick.scss',
                    'node_modules/gmaps/gmaps.js',
                    'src/scripts/master.js'
        ]
    },
    sitemap: {
        domain:     '<%= pkg.homepage %>',
        changes:    'monthly',
        pattern: [
                    'src/*.html'
                 ]
    }
};
