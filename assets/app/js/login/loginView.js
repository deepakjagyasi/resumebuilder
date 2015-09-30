define([
    'jquery',
    'underscore',
    'backbone',
    'text!assets/app/js/login/login.html',
    'assets/app/js/login/loginModel',
    'router'
], function($, _, Backbone, loginTemplate, loginModel, Router) {
    var loginView = Backbone.View.extend({
        el: '.form-area',
        model: new loginModel(),
        events: {
            'submit form': 'signIn'
        },

        render: function() {
            // check if username is there in localStorage.
            // if there then populate model. So at rendering time username would be pre-populated.
            if (typeof(Storage) !== 'undefined' && localStorage.getItem('rememberMeStatus') !== 'false') {
                this.model.set('name', localStorage.getItem('username'));
            }
            // Invalidate session
            localStorage.setItem('isSessionValid', 'false');

            // Render the page
            var template = _.template(loginTemplate);
            this.$el.html(template(this.model.toJSON()));
        },

        signIn: function(event) {
            // prevent default action of submit button 
            event.preventDefault();

            var userName = this.$el.find('#username').val();
            var password = this.$el.find('#pass').val();
            var rememberUserName = this.$el.find('#remeberme').is(':checked');

            var isValidLogin = this.model.validateLogin(userName, password);

            if (isValidLogin) {
                if (typeof(Storage) !== 'undefined' && rememberUserName) {
                    localStorage.setItem('username', userName);
                    localStorage.setItem('rememberMeStatus', 'true');
                }

                localStorage.setItem('isSessionValid', 'true');
                Router.appRouter.navigate('#/home');
            }
        }
    });

    return new loginView;
});