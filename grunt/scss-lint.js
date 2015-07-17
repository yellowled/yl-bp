// Check SCSS for code quality
module.exports = function(grunt) {
    grunt.config('scsslint', {
        options: {
            bundleExec: false,
            colorizeOutput: true,
            compact: true,
            config: '.scss-lint.yml',
            exclude: [
                'scss/ext/_normalize.scss',
                'scss/lib/mixins/_typography.scss',
                'scss/lib/mixins/_units.scss',
                'scss/lib/parts/_forms.scss',
                'scss/lib/parts/_images.scss'
            ],
            reporterOutput: null
        },
        all: [
            'scss/**/*.scss'
        ]
    });

    grunt.loadNpmTasks('grunt-scss-lint');
};
