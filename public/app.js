var app = angular.module('CoVentureApp', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/', {
      // controller: 'LoginController',
      templateUrl: '/views/login.html'
    }).when('/dashboard', {
      templateUrl: '/views/dashboard.html'
    });


});
