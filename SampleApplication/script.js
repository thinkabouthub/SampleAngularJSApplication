	// create the module and name it app
    // inject routing and kendo modules
    var app = angular.module('app', ['ngRoute', 'kendo.directives', 'ngResource']);

    var backendAPI = "http://localhost:5000/api/";

	// configure our routes
    app.config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');

		$routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'app/home.html',
				controller  : 'mainController'
			})
			// route for the about page
			.when('/about', {
				templateUrl : 'app/about.html'
			})
			// route for the contact page
            .when('/search', {
                templateUrl: 'app/search.html'
			});
    });

    var config = {        
        backendAPI: backendAPI
    };

    app.value('config', config);

    app.config(['$resourceProvider', function ($resourceProvider) {
       $resourceProvider.defaults.actions.update = {
            method: 'PUT'
        };
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }
    ]);

	// create the controller and inject Angular's $scope
	app.controller('mainController', function($scope) {
		// create a message to display in our view
        $scope.message = 'This is the home page controller message!';
    });