'use strict';
	angular
		.module('crudApp')
		.config(stateConfig);
	
	stateConfig.$inject = ['$stateProvider'];
	
	function stateConfig($stateProvider) {
		$stateProvider.state('produit', {
			parent: 'app',
			url: '/produit',
			views: {
				'content@': {
					templateUrl: 'produit/produitList.html',
					controller: 'ProduitCtrl',
					controllerAs: 'vm'
				}
			}
		});
	};