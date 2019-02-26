var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope, $http){
                    $http.get("welcome.htm").then(function (response){
                        $scope.welcomeMessage = response.data;
                    });
                });