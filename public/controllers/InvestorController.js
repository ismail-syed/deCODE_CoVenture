var app = angular.module('CoVentureApp');

app.controller("InvestorController", '$scope', '$location', 'GoalService', function($scope, $location, GoalService) {
    $scope.loadGoals = function() {
      GoalService.getGoal(selectedCompanyId).then(function(goals) {
        $scope.questions = [];
        for(goal in goals) {
          $scope.questions.push({"title": goal["label"], "name": goal["action"], "freq": goal["occurrence"], "repr": "GRAPH"});
        }
      }).catch(function() {
        $scope.error = 'Unable to get the goals';
      });
    }

    console.log("InvestorController");
    var selectedCompanyId = null;

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
      GoalService.createGoal(goal, selectedCompanyId);
      $scope.questions.push({"title": this.createTitle, "name": this.createName, "freq": this.createFreq, "repr": this.createRepr});
    }
});
