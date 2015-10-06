// Grunt configuration
module.exports = {
    autoprefixer: {
        browsers:   ['> 1%', 'last 2 versions']
    },
    concat: {
        src: [
                    // 'src/scripts/toast/src/toast.js',
                    // 'src/scripts/svg4everybody/svg4everybody.js',
                    'src/scripts/respimage/respimage.js',
                    'src/scripts/lazysizes/lazysizes.js',
                    'src/scripts/responsive-nav/responsive-nav.js',
                    'src/scripts/fitvids/jquery.fitvids.js',
                    'src/scripts/magnific-popup/dist/jquery.magnific-popup.js',
                    'src/scripts/jquery-cycle2/src/jquery.cycle2.core.js',
                    'src/scripts/jquery-cycle2/src/jquery.cycle2.autoheight.js',
                    'src/scripts/jquery-cycle2/src/jquery.cycle2.caption.js',
                    'src/scripts/jquery-cycle2/src/jquery.cycle2.command.js',
                    'src/scripts/jquery-cycle2/src/jquery.cycle2.hash.js',
                    'src/scripts/jquery-cycle2/src/jquery.cycle2.loader.js',
                    'src/scripts/jquery-cycle2/src/jquery.cycle2.pager.js',
                    'src/scripts/jquery-cycle2/src/jquery.cycle2.prevnext.js',
                    'src/scripts/jquery-cycle2/src/jquery.cycle2.progressive.js',
                    'src/scripts/jquery-cycle2/src/jquery.cycle2.tmpl.js',
                    'src/scripts/jquery-accessible-tabs/js/jquery.syncheight.js',
                    'src/scripts/jquery-accessible-tabs/js/jquery.tabs.js',
                    'src/scripts/jQuery-Collapse/src/jquery.collapse.js',
                    'src/scripts/jQuery-Collapse/src/jquery.collapse_storage.js',
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
    modernizr: {
        dev:        'src/scripts/modernizr/modernizr.js',
        dest:       'dist/scripts/modernizr/modernizr.js',
        srcfiles: [
                    'src/scss/**/*.scss',
                    'src/scripts/magnific-popup/dist/jquery.magnific-popup.js',
                    'src/scripts/magnific-popup/src/css/main.scss',
                    'src/scripts/jquery-cycle2/*.js',
                    'src/scripts/jquery-accessible-tabs/js/jquery.syncheight.js',
                    'src/scripts/jquery-accessible-tabs/js/jquery.tabs.js',
                    'src/scripts/jQuery-Collapse/src/jquery.collapse.js',
                    'src/scripts/jQuery-Collapse/src/jquery.collapse_storage.js',
                    'src/scripts/gmaps/gmaps.js',
                    'src/scripts/*.js'
        ]
    },
    scsslint: {
        exclude: [
                    'src/scss/ext/_normalize.scss',
                    'src/scss/lib/mixins/_typography.scss',
                    'src/scss/lib/parts/_forms.scss',
                    'src/scss/lib/parts/_images.scss'
                ]
    },
    sitemap: {
        domain:     '<%= pkg.homepage %>',
        changes:    'monthly',
        pattern: [
                    'src/*.html',
                    'src/**/*.html',
                    '!src/scripts/**/*.html'
                 ]
    }
};
