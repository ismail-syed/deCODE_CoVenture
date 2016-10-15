var app = angular.module('CoVentureApp');

app.controller("CompanyController", ['$scope', 'CompanyService', function($scope, CompanyService) {

    CompanyService.getCompanies().then(function(data) {
      $scope.companies = data;
    }).catch(function() {
      $scope.error = 'Unable to get the companies';
    });


    $scope.changeView = function ($scope) {
      $location.path('/company')
    }

}]);
