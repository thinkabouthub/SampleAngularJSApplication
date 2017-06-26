	// create the module and name it app
    // inject routing and kendo modules
	var app = angular.module('app', ['ngRoute', 'kendo.directives']);

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
			.when('/contact', {
				templateUrl : 'app/contact.html'
			});
	});

	// create the controller and inject Angular's $scope
	app.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'This is the home page controller message!';
	});
