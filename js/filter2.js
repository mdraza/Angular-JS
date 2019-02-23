var myApp = angular
                .module("myModule",[])
                .controller("myController", function($scope){
                    var employee = [
                        {fname:"Muhammad Razaullah", lname:"Ansari", email:"raza@gmail.com", gender:"Male", mobile_no:7858965845, dateOfBirth:new Date("october 5, 1990"), salary:85000.89},

                        {fname:"Muhammad Sanaullah", lname:"Ansari", email:"sanaullah@gmail.com", gender:"Male", mobile_no:8899665544, dateOfBirth:new Date("December 15, 1982"), salary:78000},

                        {fname:"Muhammad Amanullah", lname:"Ansari", email:"aman@gmail.com", gender:"Male", mobile_no:7858965845, dateOfBirth:new Date("march 12, 1989"), salary:80000},

                        {fname:"Muhammad Safiullah", lname:"Ansari", email:"safiullah@gmail.com", gender:"Male", mobile_no:9988554412, dateOfBirth:new Date("february 8, 1992"), salary:68000},

                        {fname:"Muhammad Aslam", lname:"Ansari", email:"aslam@gmail.com", gender:"Male", mobile_no:7858965845, dateOfBirth:new Date("october15, 1990"), salary:91000},

                        {fname:"Muhammad Razaullah", lname:"Ansari", email:"raza@gmail.com", gender:"Male", mobile_no:7858965845, dateOfBirth:new Date("May 21, 1995"), salary:72000.74},

                        {fname:"Muhammad Razaullah", lname:"Ansari", email:"raza@gmail.com", gender:"Male", mobile_no:7858965845, dateOfBirth:new Date("March 4, 1996"), salary:65000},

                        {fname:"Muhammad Razaullah", lname:"Ansari", email:"raza@gmail.com", gender:"Male", mobile_no:7858965845, dateOfBirth:new Date("June 25, 1998"), salary:85000.25}
                    ]

                    $scope.employee = employee;
                    $scope.rowLimit = 5;
                });
