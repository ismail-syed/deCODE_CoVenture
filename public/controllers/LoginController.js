var app = angular.module('CoVentureApp');

app.controller("LoginController", ['$scope', 'CompanyService', function($scope, CompanyService) {
    CompanyService.getCompanies().then(function(data) {
      $scope.companies = data;
    }).catch(function() {
      $scope.error = 'Unable to get the companies';
    });

    $scope.goInvestor = function() {
      $location.path('/investor')
    };
    $scope.goCompany = function() {
      $location.path('/company')
    };
}]);
