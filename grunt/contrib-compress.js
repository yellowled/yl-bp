// Compress files using gzip
module.exports = function(grunt) {
    grunt.config('compress', {
        sitemap: {
            options: {
                mode: 'gzip',
                pretty: true
            },
            files: [{
                expand: true,
                flatten: true,
                src: ['src/sitemap.xml'],
                dest: 'dist',
                ext: '.xml.gz'
            }]
        }
    });
};