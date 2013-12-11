// Generate Modernizr custom build from references in SCSS + JS assets

module.exports = function(grunt) {
    grunt.config('modernizr', {
        'devFile' : 'scripts/modernizr/modernizr.js',
        'outputFile' : 'dist/scripts/modernizr/modernizr.js',
        'extra' : {
            'shiv' : false,
            'printshiv' : true,
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
        // parseFiles = true: crawl all *.js, *.css, *.scss files;
        // override by defining "files" array
        'parseFiles' : true,
        'files' : ['scss/**/*.scss',
                   'scripts/magnific-popup/dist/jquery.magnific-popup.js',
                   'scripts/magnific-popup/src/css/main.scss',
                   'scripts/jquery-cycle2/*.js',
                   'scripts/jquery-accessible-tabs/js/jquery.syncheight.js',
                   'scripts/jquery-accessible-tabs/js/jquery.tabs.js',
                   'scripts/gmaps/gmaps.js',
                   'scripts/*.js'],
        'matchCommunityTests' : false,
        'customTests' : [],
        'excludeFiles' : ['Gruntfile.js', '*.json'],
    });

    grunt.loadNpmTasks('grunt-modernizr');
};