Ext.define('App.view.Viewport', {
	extend: 'Ext.Panel',
	bodyPadding: 10,
	padding: 10,
	title: 'Hello World',
	html: 'Hello <b>Worlddd</b>...'
	
});
Ext.application({
	name: 'App',
	autoCreateViewport: true,
	routes:{
		'test' : 'handleTest'		
	},
	launch: function () {
	},
	handleTest: function(){
		console.log('Test');
	}
});