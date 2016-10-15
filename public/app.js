var app = angular.module('CoVentureApp', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/', {
      controller: 'LoginController',
      templateUrl: '/views/login.html',
    }).when('/company', {
      controller: 'CompanyController',
      templateUrl: '/views/company.html'
    }).when('/investor', {
      controller: 'InvestorController',
      templateUrl: '/views/investor'
    });


});
