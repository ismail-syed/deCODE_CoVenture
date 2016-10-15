var app = angular.module('CoVentureApp');

app.controller("LoginController", ['$scope', '$location', 'CompanyService', function($scope, $location, CompanyService) {
    CompanyService.getCompanies().then(function(data) {
      $scope.companies = data;
    }).catch(function() {
      $scope.error = 'Unable to get the companies';
    });

    $scope.loginInvestor = function() {
      $location.path('/investor');
    };

    $scope.loginCompany = function() {
      $location.path('/company');
    };
}]);
