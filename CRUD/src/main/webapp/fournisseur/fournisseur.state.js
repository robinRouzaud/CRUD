/**
 * 
 */
	'use strict';
	angular
		.module('crudApp')
		.config(stateConfig);
	
	stateConfig.$inject = ['$stateProvider'];
	
	function stateConfig($stateProvider) {
		$stateProvider.state('fournisseur', {
			parent: 'app',
			url: '/fournisseur',
			views: {
				'content@': {
					templateUrl: 'fournisseur/fournisseurList.html',
					controller: 'FournisseurCtrl',
					controllerAs: 'vm'
				}
			}
		});
	};