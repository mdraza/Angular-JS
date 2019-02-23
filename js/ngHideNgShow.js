var myApp = angular
                .module("myModule", [])
                
                .controller("myController", function($scope){
                    var employee = [
                        {name:"Muhammad Razaullah", email:"raza@gmail.com", age:32, salary:68000, gender:1},
                        {name:"Nikhat Parween", email:"nikhat@gmail.com", age:28, salary:61000, gender:2},
                        {name:"Muhammad Safiullah", email:"safi@gmail.com", age:27, salary:70000, gender:1},
                        {name:"Juwayria Raza", email:"juwayriya@gmail.com", age:1, salary:99000, gender:2},
                        {name:"No name", email:"noname@gmail.com", age:39, salary:56000, gender:3}
                    ];
                    $scope.employee = employee;
                });