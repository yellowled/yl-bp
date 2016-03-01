// Hash CSS and JS assets, change filenames and references in markup
module.exports = function(grunt) {
    grunt.config('cacheBust', {
        options: {
            assets: ['styles/*.css', 'scripts/*.js'],
            baseDir: 'dist',
            deleteOriginals: true,
            length: 8,
            separator: '-'
        },
        all: {
            files: [{
                expand: true,
                cwd: 'dist',
                src: ['*.html']
            }]
        }
    });
};
