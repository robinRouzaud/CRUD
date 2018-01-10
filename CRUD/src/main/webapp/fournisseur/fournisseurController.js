(function() {
	'use strict'

	var module = angular.module('crudApp')

	FournisseurCtrl = module.controller('FournisseurCtrl', FournisseurCtrl);

	FournisseurCtrl.$inject = [ '$scope', 'FournisseurService' ];

	function FournisseurCtrl($scope, FournisseurService) {
		var vm = this;
		vm.fournisseurs = [];

		getAll();
		function getAll() {
			vm.fournisseurs = FournisseurService.query();

//			FournisseurService.query(function(result) {
//				vm.fournisseurs = result;
//			})
		}
	}
})();