'use strict';

    angular
        .module('crudApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider','$urlRouterProvider'];

    function stateConfig($stateProvider,$urlRouterProvider) {
    	$urlRouterProvider.otherwise("/");
    	$stateProvider.state('app', {
            abstract: true
        });
    };
