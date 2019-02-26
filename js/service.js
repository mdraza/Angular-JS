var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope, $location){
                    $scope.myUrl = $location.absUrl();
                });