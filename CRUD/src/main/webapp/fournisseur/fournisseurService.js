(function() {

	'use strict';
	
	var module = angular.module('crudApp', []);
	
	module.factory('FournisseurService', ['$resource', function($resource){
		
		var url = 'api/fournisseurs/:id';
		return $resource(url, {}, {
			'query' : {
				method : 'GET',
				isArray : true
			},
			'save' :{
				method : 'POST'
			}
		});
	}]);
})();