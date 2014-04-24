// Hash CSS and JS assets, change filenames and references in markup

module.exports = function(grunt) {
    grunt.config('hashres', {
        options: {
            encoding: 'utf-8',
            fileNameFormat: '${name}-${hash}.${ext}',
            renameFiles: true
        },
        deploy: {
            src: ['dist/styles/master.css',
                  'dist/styles/oldie.css',
                  'dist/scripts/master.js'],
            dest: 'dist/*.html',
        },
    });

    grunt.loadNpmTasks('grunt-hashres');
};
