angular.module('app').service('suburbService', function ($http, config, suburbFactory) {

    this.getSuburbById = function (id) {
        return suburbFactory.search({ searchCriteria: "id=" + id, ts: Date.now() }).$promise;
    };

    //simply returns the suburb list
    this.list = function () {
        return suburbFactory.query({ ts: Date.now() }).$promise;
    };

})

