var app = angular.module('CoVentureApp');

app.controller("LoginController", ['$scope', '$location', 'CompanyService', 'CurrentCompanyService', function($scope, $location, CompanyService, CurrentCompanyService) {
    CompanyService.getCompanies().then(function(data) {
      $scope.companies = data;
    }).catch(function() {
      $scope.error = 'Unable to get the companies';
    });

    $scope.loginInvestor = function() {
      $location.path('/investor');
    };

    $scope.loginCompany = function(company) {
      if ($scope.selectedCompany.$modelValue != '') {
        $location.path('/company');
        CurrentCompanyService.setCurrentCompany(company);
      }
    };
}]);
