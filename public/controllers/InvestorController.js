var app = angular.module('CoVentureApp');

app.controller("InvestorController", ['$scope', '$location', 'GoalService', 'CompanyService', function($scope, $location, GoalService, CompanyService) {
    $scope.selectedCompany = null;
    var selectedIndex = -1;
    $scope.getClass = function(ind) {
      if( ind === selectedIndex ){
            return "active";
        } else{
            return "";
        }
    }
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

    $scope.selectCompany = function(company, ind) {
        selectedIndex = ind;
        $scope.selectedCompany = company;
        console.log($scope.selectedCompany);
        $scope.questions = [];
        if(company.goalReferences){
          for(i = 0; i < company.goalReferences.length; i++) {
            let question = company.goalReferences[i];
            console.log(question);
            // TODO allow changes to repr
            $scope.questions.push({"title": question.variableLabel, "name": question.variableAction, "freq": question.occurrence, "repr": "GRAPH"});
          }
        }
        console.log($scope.questions);
        console.log("company._id ", company._id);
        GoalService.getCompanyGoals(company._id).then(function(data) {
          $scope.companies = data;
        }).catch(function() {
          $scope.error = 'Unable to get the companies';
        });
    };

    $scope.init = function(company){
      $scope.selectCompany(company, 0);
      $scope.selectedCompany = company;
    };

    console.log("InvestorController");

    $scope.frequencies = [
      "WEEKLY",
      "MONTHLY",
      "QUARTERLY",
      "YEARLY"
    ];

    $scope.representations = [
      "GRAPH",
      "TABLE"
    ];

    $scope.submit = function() {
      var goal = {"variableAction": this.createName, "variableLabel": this.createTitle, "companyId": $scope.selectedCompany._id, "variableValue": ['temp']};
      // TODO add occurrence and repr to goal (this.createFreq, this.createRepr)
      var companyId = $scope.selectedCompany._id;
      var that = this;
      GoalService.createGoal(goal, companyId).then(function(data) {
        console.log("Create goal response: ", data);
        that.createName = "";
        that.createTitle = "";
        that.createFreq = "";
        that.createRepr = "";
      }).catch(function() {
        $scope.error = 'Unable to get the companies';
      });
      $scope.questions.push({"title": this.createTitle, "name": this.createName, "freq": this.createFreq, "repr": this.createRepr});
    };
}]);
