var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                    var countries = [
                        {
                            name:"India",
                            cities: [
                                {name:"Jharkhand"},
                                {name:"New Delhi"},
                                {name:"Kolkata"},
                            ]
                        },
                        {
                            name:"USA",
                            cities: [
                                {name:"California"},
                                {name:"Alaska"},
                                {name:"Maryland"},
                            ]
                        }
                    ];
                    $scope.countries = countries;
                });