// Testing
module.exports = function(grunt) {
    grunt.registerTask('test', [
        'htmlhint',
        'jshint',
        'sasslint'
    ]);
};
