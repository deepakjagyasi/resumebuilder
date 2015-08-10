define(['backbone', 'jquery', 'bootstrap'], function(Backbone, $, bootstrap){
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
            $('#home').tab('show');
            $('.form-area').load('js/home/home.html');
         },

         home: function() {
           $('#home').tab('show');
           $('.form-area').load('js/home/home.html');
         },

         contactus: function() {
            $('#contactus').tab('show');
            $('.form-area').load('js/contactus/contactus.html');
         },

         tips: function () {
            $('#tips').tab('show');
            $('.form-area').load('js/tips/tips.html');
         },

         samples: function() {
            $('#samples').tab('show');
            $('.form-area').load('js/samples/samples.html');
         },

         form: function() {
            $('#form').tab('show');
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
