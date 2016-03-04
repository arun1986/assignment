var app = angular.module('demo', [])
                    .controller('mycontroller',function($scope){
						$scope.users = [];
						$scope.showhide = true;
						$scope.submit = function() {
							if($scope.index > -1 && $scope.index != "undefined" && $scope.index != ""){
								$scope.users[this.index].Fname = this.Fname;
								$scope.users[this.index].Lname = this.Lname;
								$scope.users[this.index].date = this.date;
								$scope.users[this.index].Company = this.Company;
								$scope.users[this.index].email = this.email;
								$scope.users[this.index].MobileNumber = this.MobileNumber;
							}else{
							 $scope.users.push({
								Fname: this.Fname,
								Lname:this.Lname,
								date: this.date,
								Company: this.Company,
								email: this.email,
								MobileNumber: this.MobileNumber								
							 });
							}
							clearall();
						  };
                        $scope.cancel = function(){
							clearall();
						}		
						   $scope.edit = function(index){
								$scope.Fname = $scope.users[index].Fname;
								$scope.date = $scope.users[index].date;
								$scope.Company = $scope.users[index].Company;
								$scope.email = $scope.users[index].email;
								$scope.MobileNumber = $scope.users[index].MobileNumber;
								$scope.Lname = $scope.users[index].Lname;
								$scope.index = index;
						   }
						    $scope.deleterow = function(index){
								$scope.users.splice(index, 1);
								clearall();
							}
                        function clearall(){
						    $scope.Fname = '';
							$scope.Lname = '';
							$scope.date = '';
							$scope.Company = '';
							$scope.email = '';
							$scope.MobileNumber = '';
							$scope.index= '';
					    }							
					});
					