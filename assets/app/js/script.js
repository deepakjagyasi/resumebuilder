$(function(){

	require.config({
		paths: {
			'jquery': 'node_modules/jquery/dist/jquery.min',
			'backbone' : 'node_modules/backbone/backbone-min',
			'underscore' : 'node_modules/underscore/underscore-min',
			'bootstrap' : 'node_modules/bootstrap/dist/js/bootstrap.min',
			'text': 'assets/libs/text',
			'router': 'assets/app/js/router'
		},
		baseUrl:'../../'
	});

	require(['router'], function(router) {
		$(document).ready(function(){
			router.init();
		});
	});
});