// Check SCSS for code quality
module.exports = function(grunt) {
    grunt.config('scsslint', {
        options: {
            bundleExec: false,
            colorizeOutput: true,
            compact: true,
            config: '.scss-lint.yml',
            exclude: [
                'scss/base/_normalize.scss',
                'scss/ext/iconfont/*.scss',
                'scss/lib/mixins/_typography.scss',
                'scss/lib/mixins/_units.scss',
                'scss/lib/modules/_forms.scss',
                'scss/lib/modules/_images.scss',
                'scss/main/addon/_ie.scss'
            ],
            reporterOutput: null
        },
        all: [
            'scss/**/*.scss'
        ]
    });

    grunt.loadNpmTasks('grunt-scss-lint');
};
