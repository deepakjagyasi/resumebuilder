module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
        server: {
              options: {
                port: 8000,
                base: 'assets'
              }
            }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};