var app = angular.module('CoVentureApp');
var baseURL = 'http://159.203.43.162:3000/api/'
app.service('CompanyService', function($http) {
    this.getCompanies = function() {
        return $http.get(baseURL + 'companies').then(function(res) {
            return res.data;
        });
    }

    this.getCompany = function(id) {
        return $http.get(baseURL + 'companies/' + id).then(function(res) {
            return res.data;
        });
    }
});