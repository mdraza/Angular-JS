var myApp = angular
                .module("myModule",[])
                .controller("myController", function($scope){
                    var employee = [
                        {fname:"Muhammad Razaullah", lname:"Ansari", email:"raza@gmail.com", gender:"Male", mobile_no:7858965845, dateOfBirth:new Date("october 5, 1990"), salary:85000.89},

                        {fname:"Sanaullah", lname:"Ansari", email:"sanaullah@gmail.com", gender:"Male", mobile_no:8899665544, dateOfBirth:new Date("December 15, 1982"), salary:78000},

                        {fname:"Amanullah", lname:"Ansari", email:"aman@gmail.com", gender:"Male", mobile_no:7858965845, dateOfBirth:new Date("march 12, 1989"), salary:80000},

                        {fname:"Safiullah", lname:"Ansari", email:"safiullah@gmail.com", gender:"Male", mobile_no:9988554412, dateOfBirth:new Date("february 8, 1992"), salary:68000},

                        {fname:"Aslam", lname:"Ansari", email:"aslam@gmail.com", gender:"Male", mobile_no:7858965845, dateOfBirth:new Date("october15, 1990"), salary:91000},

                        {fname:"Nikhat", lname:"Parween", email:"nikhat@gmail.com", gender:"Female", mobile_no:7589586547, dateOfBirth:new Date("August 19, 1996"), salary:72000.74},

                        {fname:"Ashok", lname:"Kumar", email:"ashok@gmail.com", gender:"Male", mobile_no:8878584525, dateOfBirth:new Date("March 14, 1996"), salary:45000},

                        {fname:"Juwayriya ", lname:"Raza", email:"juwayriya@gmail.com", gender:"Female", mobile_no:9125485696, dateOfBirth:new Date("January 24, 2018"), salary:89000.25}
                    ]

                    $scope.employee = employee;
                    $scope.sortColumn = 'fname';
                    $scope.reverseSort = false;

                    $scope.sortData = function(column_data){
                        $scope.reverseSort = ($scope.sortColumn == column_data) ? !$scope.reverseSort : false;
                        $scope.sortColumn = column_data;
                    }

                    $scope.sortByArrow = function(column_data){
                        if($scope.sortColumn == column_data){
                            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
                        }
                        return '';
                    }
                });
