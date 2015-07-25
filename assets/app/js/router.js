  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      // Set the login page as the default for example...
      this.page.set({
        title: "My Login Screen!",

        // Put the login page into the layout.
        view: new Auth.Views.Login()
      });
    },

    initialize: function() {
      // Create a blank new Page.
      this.page = new Page();
    }
  });

  return Router;