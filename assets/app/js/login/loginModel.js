define(['backbone', 'underscore'],
    function(Backbone, _) {
        return Backbone.Model.extend({

            validateLogin: function(userName, password) {
                if (_.isEmpty(userName) || _.isEmpty(password)) {
                    alert('Username or password  can\'t be empty');
                    return false;
                }

                if (userName !== 'bt' || password !== 'bt') {
                    alert('Invalid username/password');
                    return false;
                }

                this.set('name', userName);

                return true;
            }
        });
    });