$(function(){

	require.config({
		paths: {
			'jquery': 'node_modules/jquery/dist/jquery.min',
			'backbone' : 'node_modules/backbone/backbone-min',
			'underscore' : 'node_modules/underscore/underscore-min',
			'bootstrap' : 'node_modules/bootstrap/dist/js/bootstrap.min'
		},
		baseUrl:'../../'
	});

	require(['assets/app/js/router'], function(router) {
		$(document).ready(function(){
			router.init();
		});
	});
});