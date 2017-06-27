(function () {
    'use strict';
    var factoryId = 'suburbFactory';
    angular.module('app').factory(factoryId, ['$myResource', 'config', suburbFactory]);

    function suburbFactory($resource, config) {
        return $resource(config.backendAPI + "crm/Suburbs/");
    }
})();