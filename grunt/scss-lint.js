// Check SCSS for code quality
module.exports = function(grunt) {
    grunt.config('scsslint', {
        options: {
            bundleExec: false,
            colorizeOutput: true,
            config: '.scss-lint.yml',
            exclude: [
                'scss/core/_normalize.scss',
                'scss/iconfont/*',
                'scss/main/_oldie.scss',
                'scss/mixins/_type.scss',
                'scss/mixins/_units.scss',
                'scss/modules/_forms.scss',
                'scss/modules/_images.scss'
            ],
            reporterOutput: null
        },
        all: [
            'scss/**/*.scss'
        ]
    });

    grunt.loadNpmTasks('grunt-scss-lint');
};
