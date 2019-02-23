/*----------------------------
        Module & Controller
------------------------------*/
// var myApp = angular.module("myModule", []);

// var myController = function($scope){
//     $scope.message = "Hi, I am a Frontend Developer";
// }

// myApp.controller("myController", myController);

/*---------------------------
            Controller
-----------------------------*/
// var myApp = angular
//                 .module("myModule", [])
//                 .controller("myController", function($scope){
//                     var person = {
//                         firstName : "Muhammad Razaullah",
//                         lastName : "Ansari",
//                         email : "raza@gmail.com",
//                         gender : "Male",
//                         mobile_no : 7584785965 
//                     }
                
//                     var city = ['Dhanbad','Ranchi','Bokaro','TATA', 'Gumla'];
                
//                     $scope.city = city;
//                     $scope.person = person;
//                 });

/*-----------------------------------
            ng-src
-------------------------------------*/
// var myApp = angular
//                 .module("myModule", [])
//                 .controller("myController", function($scope){
//                     var employee = {
//                         firstName : "Muhammad Razaullah",
//                         lastName : "Ansari",
//                         email_id : "raza@gmail.com",
//                         mobile_no : 7584859658,
//                         gender : "Male",
//                         profile_pic : "../image/img1.jpg"
//                     }
//                     $scope.employee = employee;
//                 });


/*--------------------------------------
            Two Way Data-Binding
----------------------------------------*/
// var myApp = angular
//                 .module("myModule", [])
//                 .controller("myController", function($scope){
//                     $scope.message = "Hi, This is Text!";

//                     var employee = {
//                         firstName : "Noor Muhammad",
//                         lastName : "Ansari",
//                         gender : "Male",
//                         mobile_no : 9939348894
//                     }
//                     $scope.employee = employee;
//                 });


/*--------------------------------------
            ng-repeat
----------------------------------------*/   
var app = angular
            .module("myModule", [])
            .controller("myController", function($scope){
                var employee = [
                    { firstName : "Sanaullah", lastName : "Ansari", email_id : "sanaullah@gmail.com", mobile_no : 7858496856, gender : "Male"},
                    { firstName : "Razaullah", lastName : "Ansari", email_id : "raza@gmail.com", mobile_no : 8873625852, gender : "Male"},
                    { firstName : "Amanullah", lastName : "Ansari", email_id : "aman@gmail.com", mobile_no : 9858459685, gender : "Male"},
                    { firstName : "Safiullah", lastName : "Ansari", email_id : "safi@gmail.com", mobile_no : 9122546852, gender : "Male"},
                    { firstName : "Juwayriya", lastName : "Raza", email_id : "juwayriya@gmail.com", mobile_no : 7545975707, gender : "Male"}
                ];
                var person = [
                    {
                        name : "Muhammad Razaullah",
                        info : [
                            {mobile_no : "7858459685" },
                            {mobile_no : "8956963254" },
                            {mobile_no : "8855452563" }
                        ]
                    },
                    {
                        name : "Ashok Kumar",
                        info : [
                            {mobile_no : "9989584758" },
                            {mobile_no : "7785969585" },
                            {mobile_no : "8878584596" }
                        ]
                    },
                    {
                        name : "Jawedullah",
                        info : [
                            {mobile_no : "7898785845" },
                            {mobile_no : "6125485965" },
                            {mobile_no : "6854965847" }
                        ]
                    },
                ]
                
                $scope.employee = employee;
                $scope.person = person;
            });




 




