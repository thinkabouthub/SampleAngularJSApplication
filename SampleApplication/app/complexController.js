(function () {
    angular.module('app').controller('complexController',
        function ($scope) {
                var vm = this;

                $scope.$ctrl.data = { firstName: "Susan", lastName: "Terry", middleName: "Ann" };

                //$scope.$on("kendoWidgetCreated",
                //    function() {
                //        if ($scope.validator) {
                //            console.log("validator exists");
                //        }
                //    });

                //$scope.validate(event)
                //{
                //    if ($scope.validator) {
                //        $scope.validator.validate();
                //    }
                //}

                //vm.toolbarOptions = {
                //    items: [
                //        {
                //            type: "button",
                //            text: "View Company List",
                //            template:
                //            '<a ng-if="vm.admin" ng-click="viewCompanies()" class="k-button k-button-icontext k-grid-upload">View Company List</a>'
                //        },
                //        {
                //            type: "button",
                //            text: "Edit",
                //            template:
                //            '<a ng-if="vm.editAllowed && !vm.editingData" ng-click="performEdit()" class="k-button k-button-icontext k-grid-upload">Edit</a>'
                //        },
                //        {
                //            type: "button",
                //            text: "Save",
                //            template:
                //            '<a ng-if="vm.editingData" ng-click="performSave()" class="k-button k-button-icontext k-grid-upload">Save</a>'
                //        },
                //        {
                //            type: "button",
                //            text: "Cancel",
                //            template:
                //            '<a ng-if="vm.editingData" ng-click="performCancel()" class="k-button k-button-icontext k-grid-upload">Cancel</a>'
                //        }
                //    ]
                //};

                vm.panelBarOptions = {
                    expandMode: "multiple"
                };

                $scope.performSave = function () {
                    
                };

                $scope.performEdit = function () {
                    
                };

                //cancel editing
                $scope.performCancel = function () {
                    
                };

                //view the company list
                $scope.viewCompanies = function () {
                    
                };

            });
})();