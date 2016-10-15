var app = angular.module('CoVentureApp');

app.controller("InvestorController", ['$scope', '$location', 'GoalService', function($scope, $location, GoalService) {
    var selectedCompany = null;
    $scope.selectCompany = function(company) {
        selectedCompany = company;
        console.log(selectedCompany);
        $scope.questions = [];
        for(i = 0; i < company.goalReferences.length; i++) {
          let question = company.goalReferences[i];
          console.log(question);
          // TODO allow changes to repr
          $scope.questions.push({"title": question.variableLabel, "name": question.variableAction, "freq": question.occurrence, "repr": "GRAPH"});
        }
        console.log($scope.questions);
    }

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
      var goal = {"variableAction": this.createName, "variableLabel": this.createTitle, "companyId": selectedCompanyId};
      // TODO add occurrence and repr to goal (this.createFreq, this.createRepr)
      GoalService.createGoal(goal, selectedCompany._id);
      $scope.questions.push({"title": this.createTitle, "name": this.createName, "freq": this.createFreq, "repr": this.createRepr});
    }
}]);
