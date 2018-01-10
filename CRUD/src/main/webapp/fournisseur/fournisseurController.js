(function() {
	'use strict'
	
	angular.module('crudApp', []).controller('FournisseurCtrl', FournisseurCtrl);
	
	FournisseurCtrl.$inject = ['$scope', 'FournisseurSerice'];
	
	function FournisseurCtrl ($scope, FournisseurService) {
		var vm = this;
		vm.fournisseurs = [];
		
		getAll();
		function getAll() {
			vm.fournisseurs = FournisseursService.query
			FournisseurService.query(function(result) {
				vm.fournisseurs = result;
			})
		}
	}
})