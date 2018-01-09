(function() {
'use strict';
angular.module('crudApp',[
	'ngResource',
    'ui.router'
]).run(run);

run.$inject = ['$rootScope', '$state', '$stateParams'];
	function run($rootScope, $state, $stateParams){
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}
})();

