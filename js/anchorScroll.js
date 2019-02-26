var app = angular
            .module("demoApp", [])
            .controller("demoController", function($scope, $location, $anchorScroll){
                $scope.scrollTo = function(scrollLocation){
                    $location.hash(scrollLocation);
                    $anchorScroll.yOffset = 40;
                    $anchorScroll;
                }
            })