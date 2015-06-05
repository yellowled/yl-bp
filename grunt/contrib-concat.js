// Concatenate JS assets into single file
module.exports = function(grunt) {
    grunt.config('concat', {
        master: {
            src: ['scripts/helpers/log.js',
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
                  'scripts/tablesaw/dist/tablesaw.js',
                  'scripts/main.js'],
            dest: 'scripts/master.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};
