var app = angular.module('CoVentureApp');

app.controller("CompanyController", ['$scope', 'CompanyService', function($scope, CompanyService) {

  var templates = {
    questions: '/views/investorQuestions.html',
    stats: 'views/stats.html',
    key: 'views/keys.html'
  };

  $scope.template = templates.questions;

  $scope.showTab = function(tab) {
    console.log('tab pressed');
    switch (tab) {
      case 'stats':
        $scope.template = templates.stats;
        break;
      case 'keys':
          $scope.template = templates.key;
        break;
      case 'questions':
          $scope.template = templates.questions;
          break;
      default:

    }
  };

    CompanyService.getCompanies().then(function(data) {
      $scope.companies = data;
    }).catch(function() {
      $scope.error = 'Unable to get the companies';
    });


    $scope.changeView = function ($scope) {
      $location.path('/company');
    };

}]);
