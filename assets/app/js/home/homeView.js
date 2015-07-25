	// The main view of the application
	var App = Backbone.View.extend({

		// Base the view on an existing element
		el: $('#main'),

		initialize: function(){

			this.loadHome();

			// Cache these selectors
			this.total = $('#total span');
			this.list = $('#services');

			// Listen for the change event on the collection.
			// This is equivalent to listening on every one of the
			// service objects in the collection.
			this.listenTo(services, 'change', this.render);


			// Create views for every one of the services in the
			// collection and add them to the page

			services.each(function(service){

				var view = new ServiceView({ model: service });
				this.list.append(view.render().el);

			}, this);	// "this" is the context in the callback


		},

		loadHome: function() {
			$('.form-area').load('js/home/home.html');
		},

		render: function(){

			// Calculate the total order amount by agregating
			// the prices of only the checked elements

			var total = 0;

			_.each(services.getChecked(), function(elem){
				total += elem.get('price');
			});

			// Update the total price
			this.total.text('$'+total);

			return this;

		}

	});