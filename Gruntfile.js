module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
        server: {
          options: {
            port: 8000,
            base: '.',
            hostname: '*',
            keepalive:true,
            options: {
                index: 'assets/app/index.html',
                maxAge: 300000
            },
            middleware: function(connect, options, middlewares) {
              // inject a custom middleware into the array of default middlewares
              middlewares.unshift(function(req, res, next) {
                if (req.url !== '/hello/world') return next();

                res.end('Hello, world from port #' + options.port + '!');
              });

              return middlewares;
            }
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
};
