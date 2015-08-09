define(['backbone'], function(Backbone){
   // Defining the application router, you can attach sub routers here.
       Router = Backbone.Router.extend({
         routes: {
           "home": "home",
           "contactus": "contactus",
           "tips":"tips",
           "form": "form",
           "samples": "samples",
           "": "index"
         },

         index: function() {
            $('.form-area').load('js/home/home.html');
         },

         home: function() {
           $('.form-area').load('js/home/home.html');
         },

         contactus: function() {
          $('.form-area').load('js/contactus/contactus.html');
         },

         tips: function () {
            $('.form-area').load('js/tips/tips.html');
         },

         samples: function() {
            $('.form-area').load('js/samples/samples.html');
         },

         form: function() {
            $('.form-area').load('js/form/form.html');
         },

         initialize: function() {

         }

       });

       return {
         appRouter: new Router(),
         init: function() {
           Backbone.history.start();
         }
       }
 });
