(function() {
    'use strict';
    angular.module('app')
        .factory('$myResource',
        [
            '$resource', function($resource) {
                return function(url, paramDefaults, actions) {
                    var searchUrl = url + "Search/?:searchCriteria";
                    
                    var MY_ACTIONS = {
                        'update': { method: 'PUT' },        //add update (PUT) method for WebAPI endpoint 
                        'search': { method: 'GET', url: searchUrl, 'params': { searchCriteria: '@searchCriteria' }, isArray: false }     //add Search (POST)
                    };
                    actions = angular.extend({}, MY_ACTIONS, actions);
                    return $resource(url, paramDefaults, actions);
                }
            }
        ]);
})();
