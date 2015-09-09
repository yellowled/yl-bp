// Testing
module.exports = function(grunt) {
    grunt.registerTask('test', [
        'htmlhint',
        'jshint',
        'scsslint'
    ]);
};
