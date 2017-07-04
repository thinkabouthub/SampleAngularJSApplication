(function () {
    'use strict';
    var factoryId = 'listingsSearchFactory';
    angular.module('app').factory(factoryId, ['$myResource', 'config', listingsSearch]);

    function listingsSearch($resource, config) {
        return $resource(config.backendAPI + "realestate/ListingsSearch/");
    }
})();