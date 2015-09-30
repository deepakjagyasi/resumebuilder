define(['text!assets/app/js/contactus/contactus.html',
		'assets/app/js/contactus/contactusModel',
		'router'],function(contactusTemplate, Model, Router){

	var ServiceView = Backbone.View.extend({
		model: new Model(),
		el : '.form-area',
		events: {
			'submit form': 'signIn'
		},

		signIn: function(event) {
			event.preventDefault();

			var message = this.$el.find('[name="message"]').val();
			var numericValidation = this.$el.find('[name="human"]').val();
			var rememberUserName = this.$el.find('[name="message"]').val();

			var isValidLogin = this.model.validateLogin(numericValidation);

			if (isValidLogin) {
				Backbone.ajax({
					url: 'index.html'
				}).done(function(){
					Router.appRouter.navigate('#/home');
				});
			} else{
				alert('Please enter the correct value of the sum');
			}
		},

		render: function(){
		 	var template = _.template(contactusTemplate);
			this.$el.html(template(this.model.toJSON()));
		}

	});

	return new ServiceView;

});