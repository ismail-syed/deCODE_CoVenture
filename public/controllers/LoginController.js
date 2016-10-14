var app = angular.module('CoVentureApp');

app.controller("LoginController", function($scope, $location) {

    console.log("LoginController");

    $scope.changeView = function ($scope) {
      $location.path('/dashboard')
    }

});
