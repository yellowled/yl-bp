// Grunt configuration
module.exports = {
    autoprefixer: {
        browsers:   ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
    },
    concat: {
        src: [
                    'scripts/helpers/log.js',
                    // 'scripts/svg4everybody/svg4everybody.js',
                    'scripts/respimage/respimage.js',
                    'scripts/lazysizes/lazysizes.js',
                    'scripts/responsive-nav/responsive-nav.js',
                    'scripts/fitvids/jquery.fitvids.js',
                    'scripts/magnific-popup/dist/jquery.magnific-popup.js',
                    'scripts/jquery-cycle2/src/jquery.cycle2.core.js',
                    'scripts/jquery-cycle2/src/jquery.cycle2.autoheight.js',
                    'scripts/jquery-cycle2/src/jquery.cycle2.caption.js',
                    'scripts/jquery-cycle2/src/jquery.cycle2.command.js',
                    'scripts/jquery-cycle2/src/jquery.cycle2.hash.js',
                    'scripts/jquery-cycle2/src/jquery.cycle2.loader.js',
                    'scripts/jquery-cycle2/src/jquery.cycle2.pager.js',
                    'scripts/jquery-cycle2/src/jquery.cycle2.prevnext.js',
                    'scripts/jquery-cycle2/src/jquery.cycle2.progressive.js',
                    'scripts/jquery-cycle2/src/jquery.cycle2.tmpl.js',
                    'scripts/jquery-accessible-tabs/js/jquery.syncheight.js',
                    'scripts/jquery-accessible-tabs/js/jquery.tabs.js',
                    'scripts/jQuery-Collapse/src/jquery.collapse.js',
                    'scripts/jQuery-Collapse/src/jquery.collapse_storage.js',
                    'scripts/main.js'
              ],
        dest:       'scripts/master.js'
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
        dest:       'dist/'
    },
    modernizr: {
        files: [
                    'scss/**/*.scss',
                    'scripts/magnific-popup/dist/jquery.magnific-popup.js',
                    'scripts/magnific-popup/src/css/main.scss',
                    'scripts/jquery-cycle2/*.js',
                    'scripts/jquery-accessible-tabs/js/jquery.syncheight.js',
                    'scripts/jquery-accessible-tabs/js/jquery.tabs.js',
                    'scripts/jQuery-Collapse/src/jquery.collapse.js',
                    'scripts/jQuery-Collapse/src/jquery.collapse_storage.js',
                    'scripts/gmaps/gmaps.js',
                    'scripts/*.js'
              ],
        src:        'scripts/modernizr/modernizr.js',
        dest:       'dist/scripts/modernizr/modernizr.js'
    },
    scsslint: {
        exclude: [
                    'scss/ext/_normalize.scss',
                    'scss/lib/mixins/_typography.scss',
                    'scss/lib/mixins/_units.scss',
                    'scss/lib/parts/_forms.scss',
                    'scss/lib/parts/_images.scss'
                ]
    }
};
