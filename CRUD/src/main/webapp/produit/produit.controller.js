(function() {
	'use strict'

	var module = angular.module('crudApp')

	ProduitCtrl = module.controller('ProduitCtrl', ProduitCtrl);

	ProduitCtrl.$inject = [ '$scope', 'ProduitService' ];

	function ProduitCtrl($scope, ProduitService) {
		var vm = this;
		vm.produits = [];

		getAll();
		function getAll() {
			vm.produits = ProduitService.query();

//			FournisseurService.query(function(result) {
//				vm.fournisseurs = result;
//			})
		}
	}
})();