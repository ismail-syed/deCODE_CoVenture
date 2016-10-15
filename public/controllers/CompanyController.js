var app = angular.module('CoVentureApp');

app.controller("CompanyController", ['$scope', '$location', 'CompanyService', 'CurrentCompanyService', 'GoalService', function($scope, $location, CompanyService, CurrentCompanyService, GoalService) {

  var templates = {
    questions: '/views/companyQuestions.html',
    stats: 'views/stats.html',
    key: 'views/keys.html'
  };

  $scope.template = templates.questions;

  $scope.logout= function() {
    $location.path('/');
  };
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
          console.log(CurrentCompanyService.getCurrentCompany());
          $scope.company = CurrentCompanyService.getCurrentCompany();
          $scope.questions = $scope.company.goalReferences;
          break;
      default:

    }
  };

    $scope.myfunc = function(){
      console.log("submit");
    }

    CompanyService.getCompanies().then(function(data) {
      $scope.companies = data;
    }).catch(function() {
      $scope.error = 'Unable to get the companies';
    });


    $scope.changeView = function ($scope) {
      $location.path('/company');
    };

    $scope.submit = function(question) {
      console.log(question._id, this.answer);
      GoalService.updateGoal(question._id, this.answer).then(function(data) {
        console.log("Update goal: ", question._id);
        question.completed = true;
        // TODO session save completed
      }).catch(function() {
        $scope.error = 'Unable to update goal';
      });
    };
}]);
