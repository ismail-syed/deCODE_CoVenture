var app = angular.module('CoVentureApp');

app.controller("MainController", function($scope, $location) {

    console.log("MainController");
    
    $scope.changeView = function ($scope) {
      $location.path('/dashboard')
    }

});
