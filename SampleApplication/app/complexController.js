(function () {
    angular.module('app').controller('complexController', 
        function ($scope, suburbService, $filter) {
            var vm = this;

                $scope.editingData = true;

                suburbService.list()
                .then(function (result) {
                    $scope.suburbs = result;
                })
                .catch(function (error) {
                    //handle error
                    var t = error;
                });


                $scope.$ctrl.data = { firstName: "Susan", lastName: "Terry", middleName: "Ann", suburbId: null };

                $scope.$on("kendoWidgetCreated",
                    function() {
                        if ($scope.validator) {
                            console.log("validator exists");
                        }
                    });

                //$scope.validate(event)
                //{
                //    if ($scope.validator) {
                //        $scope.validator.validate();
                //    }
                //}

                $scope.onSuburbChange = function (suburb) {
                    if ($scope.suburbs && suburb) {
                        var dataItem = $scope.suburbs[suburb.sender.selectedIndex];
                        if (dataItem) {
                            $scope.postCode = dataItem.postCode.value;
                            $scope.state = dataItem.postCode.state.name;
                            $scope.country = dataItem.postCode.state.country.name;
                            $scope.$apply();
                        }
                    }
                };

                $scope.dataBound = function (e) {
                    e.sender.trigger("change");
                };

                $scope.onSuburbChange = function (suburb) {
                    if ($scope.suburbs && suburb) {
                        var dataItem = $scope.suburbs[suburb.sender.selectedIndex];
                        if (dataItem) {
                            $scope.postCode = dataItem.postCode.value;
                            $scope.state = dataItem.postCode.state.name;
                            $scope.country = dataItem.postCode.state.country.name;
                            $scope.$apply;

                        }
                    }
                };
                
                vm.panelBarOptions = {
                    expandMode: "multiple"
                };     

                $scope.validate = function (e) {
                    if ($scope.validator) {
                        $scope.validator.validate();
                    }
                };

            });
})();