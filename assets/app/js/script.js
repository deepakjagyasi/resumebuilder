$(function(){

	require.config({
		paths: {
			'jquery': 'node_modules/jquery/dist/jquery.min.js',
			'backbone' : 'node_modules/backbone/backbone-min',
			'underscore' : 'node_modules//underscore/underscore-min'
		},
		baseUrl:'../../'
	});

	require(['assets/app/js/router'], function(router) {
		$(document).ready(function(){
			router.init();
		});
	});
});