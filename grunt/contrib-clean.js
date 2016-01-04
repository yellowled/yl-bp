// Clean up deployment directory
module.exports = function(grunt) {
    grunt.config('clean', {
        deploy: [
            'dist'
        ]
    });
};
