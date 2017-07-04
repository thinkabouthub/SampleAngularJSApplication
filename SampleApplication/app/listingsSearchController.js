(function () {
    angular.module('app').controller('listingsSearchController', function ($scope, listingsSearchService) {
        $scope.searchListingsLabel = "Search properties for sale"
        $scope.searchListingsType = "Buy"
        var options = {
            //componentRestrictions: { country: "in" }
        };
        var inputFrom = document.getElementById('from');
        var autocompleteFrom = new google.maps.places.Autocomplete(inputFrom, options);
        google.maps.event.addListener(autocompleteFrom, 'place_changed', function () {
            var place = autocompleteFrom.getPlace();
            $scope.ListingsSearch.location.Lat = place.geometry.location.lat();
            $scope.ListingsSearch.location.Lng = place.geometry.location.lng();
            $scope.ListingsSearch.location.formattedAddress = place.formatted_address;
            $scope.ListingsSearch.location.streetNumber = getPlaceComponents(place, "street_number");
            $scope.ListingsSearch.location.address = getPlaceComponents(place, "route");
            $scope.ListingsSearch.location.suburb = getPlaceComponents(place, "locality");
            $scope.ListingsSearch.location.city = getPlaceComponents(place, "administrative_area_level_2");
            $scope.ListingsSearch.location.state = getPlaceComponents(place, "administrative_area_level_1");
            $scope.ListingsSearch.location.country = getPlaceComponents(place, "country");
            $scope.ListingsSearch.location.postCode = getPlaceComponents(place, "postal_code");
            $scope.$apply();
        });

        $scope.listingSearchClick = function () {
            $scope.$broadcast("listingsSearchEvent", $scope.location);
            $scope.$emit("listingsSearchEvent", $scope.location); 
            //listingsSearchService.searchListings($scope.location.suburb)
        };

        $scope.listingTypeSelect = function ($event) {
            var target = $event.currentTarget;
            var text = target.textContent;
            $scope.searchListingsType = text
            if (text == "Buy") {
                $scope.searchListingsLabel = "Search properties for sale";
            }
            else if (text == "Rent") {
                $scope.searchListingsLabel = "Search properties for rent";
            }
            else if (text == "Sold") {
                $scope.searchListingsLabel = "Search sold properties";
            }
        };

        function getPlaceComponents(place, component, isLong) {
            for (var i = 0; i < place.address_components.length; i++) {
                for (var j = 0; j < place.address_components[i].types.length; j++) {
                    if (place.address_components[i].types[j] == component) {
                        return isLong == true ? place.address_components[i].long_name : place.address_components[i].short_name;
                    }
                }
            }
        }
    });
})();