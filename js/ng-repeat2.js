var myApp = angular
                .module("myModule", [])
                .controller("myController", function($scope){
                    var state = [
                        {
                            name: "Jharkhand",
                            city: [
                                {
                                    name:"Dhanbad",
                                    village: [
                                        {
                                            name: "Govindpur",
                                            mobile: [
                                                {number:7859654852},
                                                {number:7859654852},
                                                {number:7859654852},
                                            ]
                                                
                                            
                                        },
                                        {name: "Upperbazar"},
                                        {name: "Nawatand"},
                                    ]
                                }
                            ]
                        },
                        {
                            name: "New Delhi",
                            city: [
                                {
                                    name:"Shaheen Bagh",
                                    village: [
                                        {name: "Bokaro"},
                                        {
                                            name: "Jamdiha",
                                            mobile: [
                                                {number:7859654852},
                                                {number:7859654852},
                                                {number:7859654852},
                                            ]
                                        },
                                        {name: "Dhanbad"}
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Bihar",
                            city: [
                                {
                                    name:"Patna",
                                    village: [
                                        {name: "Nawada"},
                                        {name: "Darbhanga"},
                                        {
                                            name: "Gaya",
                                            mobile: [
                                                {number:7859654852},
                                                {number:7859654852},
                                                {number:7859654852},
                                            ]
                                        }
                                        
                                    ]
                                }
                            ]
                        }
                    ]
                    $scope.state = state;
                });




