angular.module('app').service('listingsSearchService', function ($http, config, listingsSearchFactory) {

    this.searchListings = function (suburb) {
        return listingsSearchFactory.search({ searchCriteria: "suburb=" + suburb, ts: Date.now() }).$promise;
    };
})

