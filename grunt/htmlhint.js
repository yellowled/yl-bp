// Check markup for code quality
module.exports = function(grunt) {
    grunt.config('htmlhint', {
        all: {
            options: {
                'tagname-lowercase': true,
                'attr-lowercase': true,
                'doctype-first': true,
                'tag-pair': true,
                'spec-char-escape': true,
                'id-unique': true,
                'src-not-empty': true,
                'img-alt-require': true,
                'doctype-html5': true,
                'id-class-value': true,
                'style-disabled': true
            },
            src: ['*.html'],
        },
    });

    grunt.loadNpmTasks('grunt-htmlhint');
};
