// Check SCSS for code quality

module.exports = function(grunt) {
    grunt.config('scsslint', {
        allFiles: [
            'scss/**/*.scss',
        ],
        options: {
            bundleExec: false,
            colorizeOutput: true,
            config: '.scss-lint.yml',
            exclude: [
                'scss/core/_normalize.scss',
                'scss/main/_oldie.scss',
                'scss/fontello/*'
            ],
            reporterOutput: null
        },
    });

    grunt.loadNpmTasks('grunt-scss-lint');
};
