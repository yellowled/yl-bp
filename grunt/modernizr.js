// Generate Modernizr custom build from references in SCSS + JS assets
var config = require('../config');

module.exports = function(grunt) {
    grunt.config('modernizr', {
        deploy: {
            'devFile' : config.modernizr.src,
            'outputFile' : config.modernizr.dest,
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
                src: config.modernizr.files
            },
            'matchCommunityTests' : false,
            'customTests' : [],
            'excludeFiles' : ['*.js', '*.json']
        }
    });

    grunt.loadNpmTasks('grunt-modernizr');
};
