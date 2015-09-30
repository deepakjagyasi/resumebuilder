define(['backbone', 'jquery', 'bootstrap'], function(Backbone, $, bootstrap){

       Router = Backbone.Router.extend({
         routes: {
           "home": "home",
           "contactus": "contactus",
           "tips":"tips",
           "form": "form",
           "samples": "samples",
           '': 'loadPage'
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
            require(['assets/app/js/contactus/contactusView'], function(pageView) {
                pageView.render();
            });
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

         loadPage: function(page) {
             page = page || 'login';
             require(['assets/app/js/' +page + '/' + page + 'View'], function(pageView) {
                 pageView.render();
             });
         }

       });

       return {
         appRouter: new Router(),
         init: function() {
           Backbone.history.start();
         }
       }
 });
