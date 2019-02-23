var myApp = angular
                .module("myModule",[])
                .controller("myController", function($scope){
                    var employees = [
                        {name:"Muhammad Razaullah", age:32, mobile_no:7858968548, address:"Dhanbad", dateOfBirth:new Date("October 05, 1990"), salary:65000.89},
                        {name:"Muhammad Sanaullah", age:45, mobile_no:8958478596, address:"Ranchi", dateOfBirth:new Date("January 15, 1991"), salary:85000},
                        {name:"Muhammad Amanullah", age:29, mobile_no:7858968548, address:"Bokaro", dateOfBirth:new Date("February 12, 1989"), salary:88000},
                        {name:"Muhammad Safiullah", age:25, mobile_no:9988554477, address:"Ranchi", dateOfBirth:new Date("May 05, 1985"), salary:45000},
                        {name:"Juwayriya Raza", age:1, mobile_no:9999999999, address:"New Delhi", dateOfBirth:new Date("January 24, 2018"), salary:50000}
                    ];
                    $scope.employees = employees;
                    $scope.rowLimit = 3;
                })    