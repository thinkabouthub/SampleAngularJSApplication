angular.module('app')
    .component('listingsSearchComponent',
    {
        // isolated scope binding
        bindings: {
            message: '=',
            name: '@',
            data: '<'
        },

        // Inline template which is binded to message variable
        // in the component controller
        templateUrl: "app/listingsSearchComponent.html",

        // The controller that handles our component logic, we inject countryService for data retrieval
        controller: 'listingsSearchController'
    });





