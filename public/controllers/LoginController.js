var app = angular.module('CoVentureApp');

app.controller("LoginController", function($scope, $location) {

    console.log("LoginController");

    $scope.companies = [
      'Amazon',
      'Klipfolio',
      'CoVenture',
      'You.i'
    ]

    $scope.getCompany = function($scope) {

    }

    $scope.goToIQ = function() {
      $location.path('investor/questions');
    }

});
