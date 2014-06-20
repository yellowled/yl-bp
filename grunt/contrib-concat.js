// Concatenate JS assets into single file

module.exports = function(grunt) {
    grunt.config('concat', {
        dev: {
            src: ['scripts/helpers/log.js',
                  'scripts/accessifyhtml5-amd/accessifyhtml5.js',
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
                  'scripts/main.js'],
            dest: 'scripts/master.js'
        },
        deploy: {
            src: ['scripts/accessifyhtml5-amd/accessifyhtml5.js',
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
                  'scripts/main.js'],
            dest: 'scripts/master.js'
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
