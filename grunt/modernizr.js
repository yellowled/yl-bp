// Generate Modernizr custom build from references in SCSS + JS assets
module.exports = function(grunt) {
    grunt.config('modernizr', {
        deploy: {
            'devFile' : 'scripts/modernizr/modernizr.js',
            'outputFile' : 'dist/scripts/modernizr/modernizr.js',
            'extra' : {
                'shiv' : true,
                'printshiv' : false,
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
            'tests' : [],
            'parseFiles' : true,
            'files' : {
                src: ['scss/**/*.scss',
                      'scripts/magnific-popup/dist/jquery.magnific-popup.js',
                      'scripts/magnific-popup/src/css/main.scss',
                      'scripts/jquery-cycle2/*.js',
                      'scripts/jquery-accessible-tabs/js/jquery.syncheight.js',
                      'scripts/jquery-accessible-tabs/js/jquery.tabs.js',
                      'scripts/jQuery-Collapse/src/jquery.collapse.js',
                      'scripts/jQuery-Collapse/src/jquery.collapse_storage.js',
                      'scripts/tablesaw/dist/tablesaw.js',
                      'scripts/tablesaw/src/tables.stack-mixin.scss',
                      'scripts/gmaps/gmaps.js',
                      'scripts/*.js']
            },
            'matchCommunityTests' : false,
            'customTests' : [],
            'excludeFiles' : ['Gruntfile.js', '*.json']
        }
    });

    grunt.loadNpmTasks('grunt-modernizr');
};
