var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                    var users = [
                        {name:"Muhammad Razaullah", email:"raza@gmail.com", mobile_no:7858485869, salary:85000},
                        {name:"Muhammad Amanullah", email:"aman@gmail.com", mobile_no:7858485869, salary:56000},
                        {name:"Muhammad Sanaullah", email:"sana@gmail.com", mobile_no:7858485869, salary:25000},
                        {name:"Muhammad Safiullah", email:"safi@gmail.com", mobile_no:7858485869, salary:60000},
                    ];
                    $scope.users = users;
                    $scope.userDetail = "userTable.html"
                })