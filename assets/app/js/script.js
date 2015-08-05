$(function(){

	// The main view of the application
	var App = Backbone.View.extend({

		initialize: function(){
			this.loadHome();
		},

		loadHome: function() {
			$('.form-area').load('js/home/home.html');
		}

	});

	new App();

});