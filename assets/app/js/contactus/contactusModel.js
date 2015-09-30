define(['backbone'],
	function(Backbone){
		return Backbone.Model.extend({
			validateLogin: function(numericValidation) {
				return numericValidation === '5' ? true : false
			}
		});
});