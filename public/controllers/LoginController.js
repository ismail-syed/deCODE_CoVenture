var app = angular.module('CoVentureApp');

app.controller("LoginController", ['$scope', 'CompanyService', function($scope, CompanyService) {
    var companyService = new CompanyService();
    companyService.getCompanies().then(function(data) {
      $scope.companies = data;
    }).catch(function() {
      $scope.error = 'Unable to get the companies';
    });

    $scope.loginInvestor = function() {
    }

    $scope.loginCompany = function() {

    }
}]);
