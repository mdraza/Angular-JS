var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                    var courses = [
                        {name:'HTML', likes:0, dislikes:0},
                        {name:'CSS', likes:0, dislikes:0},
                        {name:'Javascript', likes:0, dislikes:0},
                        {name:'Jquery', likes:0, dislikes:0},
                        {name:'Angular JS', likes:0, dislikes:0},
                    ];

                    $scope.incrementLikes = function(technology){
                        technology.likes++;
                    }
                    $scope.incrementDislikes = function(technology){
                        technology.dislikes++;
                    }   
                    $scope.courses = courses;
                });

