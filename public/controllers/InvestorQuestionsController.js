var app = angular.module("CoVentureApp");

app.controller("InvestorQuestionsController", function($scope) {
  console.log("InvestorQuestionsController");

  $scope.questions = [
    {"title": "Title 1", "name": "Name 1", "freq": "Freq 1", "repr": "Repr 1"}
  ];

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
    $scope.questions.push({"title": this.createTitle, "name": this.createName, "freq": this.createFreq, "repr": this.createRepr});
  }
});
