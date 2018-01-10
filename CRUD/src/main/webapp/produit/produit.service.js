(function() {

	'use strict';

	var module = angular.module('crudApp');

	produitService = module.factory('ProduitService',
			produitService);

	produitService.$inject = [ '$resource' ];

	function produitService($resource) {

		var url = 'api/produits/:id';
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