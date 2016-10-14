var app = angular.module('CoVentureApp');

app.controller("CompanyController", function($scope, $location) {

    console.log("CompanyController");

    $scope.changeView = function ($scope) {
      $location.path('/company')
    }

});
