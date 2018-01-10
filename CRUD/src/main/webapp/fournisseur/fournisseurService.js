(function() {

	'use strict';

	var module = angular.module('crudApp');

	fournisseurService = module.factory('FournisseurService',
			fournisseurService);

	fournisseurService.$inject = [ '$resource' ];

	function fournisseurService($resource) {

		var url = 'api/fournisseurs/:id';
		return $resource(url, {}, {
			'query' : {
				method : 'GET',
				isArray : true
			},
			'save' : {
				method : 'POST'
			}
		});
	}
})();