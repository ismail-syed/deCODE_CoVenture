var app = angular.module('CoVentureApp');

app.controller("LoginController", function($scope, $location) {

    console.log("LoginController");
    $scope.companies = ['Amazon', 'Klipfolio'];

  // CompanyService.getPonies().then(function(data) {
  //   $scope.ponies = data;
  // }).catch(function() {
  //   $scope.error = 'unable to get the ponies';
  // });

});
