(function () {
   'use strict';
    var controllerId = 'listingsSearchController';
    angular.module('app').controller(controllerId, ['$scope', 'listingsSearchService', listingsSearch]);

    function listingsSearch($scope, listingsSearchService) {
        var vm = this;
        $scope.searchListingsLabel = "Search properties for sale";
        $scope.searchListingsPlaceholder = "Search by state, suburb or postcode";
        $scope.searchListingsType = "Buy";
        $scope.isListingSearchEnabled = false;
        //$scope.listingSearchButtonTooltip = "Search is empty!"

        // Select all elements with data-toggle="tooltips" in the document
        $('[data-toggle="tooltip"]').tooltip(); 

        $scope.searchListingsFilter = {
            "latitude": null,
            "longitude": null,
            "query": null
        };

        window.navigator.geolocation.getCurrentPosition(function(pos) {
                $scope.searchListingsFilter.latitude = pos.coords.latitude;
                $scope.searchListingsFilter.longitude = pos.coords.longitude;
            }
        );

        $scope.selectOptions = {
            placeholder: "Search by state, suburb or postcode",
            dataTextField: "shortAddress",
            dataValueField: "address",
            valuePrimitive: true,
            autoBind: false,
            maxSelectedItems: 5,
            headerTemplate: '<div class="listingsSearch-dropdown-header">' +
                '<span><img src="../Content/images/google_pin_small.png" /></span>' +
                '<span>Suggestions</span>' +
                '</div>',
            dataSource: {
                filter: "contains",
                serverFiltering: true,
                transport: {
                    read: {
                        dataType: "json",
                        data: getSearchListingsFilter,
                        url: "http://localhost:5000/api/realestate/listingssearch/search"
                    }
                }
            },

            filtering: function(e) {

                var filter = e.filter;
                $scope.searchListingsFilter.query = filter === undefined ? null : filter.value;

            },

            change: function (e) {
                $scope.isListingSearchEnabled = e.sender._old.length > 0;
                //$scope.$apply();
            }
        };

        function getSearchListingsFilter() {
            return $scope.searchListingsFilter;
        };

        $scope.listingSearchClick = function () {
            $scope.$broadcast("listingsSearchEvent", $scope.location);
            $scope.$emit("listingsSearchEvent", $scope.location); 
            //listingsSearchService.searchListings($scope.location.suburb)
        };

        $scope.listingTypeSelect = function ($event) {
            var target = $event.currentTarget;
            var text = target.textContent;
            $scope.searchListingsType = text
            if (text === "Buy") {
                $scope.searchListingsLabel = "Search properties for sale";
            }
            else if (text === "Rent") {
                $scope.searchListingsLabel = "Search properties for rent";
            }
            else if (text === "Sold") {
                $scope.searchListingsLabel = "Search sold properties";
            }
        };
    }
})();