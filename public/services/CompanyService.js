var module = angular.module('services');
var baseURL = 'http://159.203.43.162:3000/api/'
module.service('CompanyService', function($http) {
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

module.service('goalService', function($http) {
    this.getGoals = function() {
        return $http.get(baseURL + 'goals').then(function(res) {
            return res.data;
        });
    }

    this.getGoal = function(id) {
        return $http.get(baseURL + 'goals/' + id).then(function(res) {
            return res.data;
        });
    }

    this.createGoal = function(goal, companyId) {
        return $http.post(baseURL + 'goals', {
            start: goal.start,
            end: goal.end,
            variableAction: goal.variableAction,
            variableLabel: goal.variableLabel,
            variableValue: goal.variableValue,
            companyId: companyId
        }).then(function(res) {
            return res.data;
        })
    }

    this.completeGoal = function(id) {
        return $http.put(baseURL + 'goals/' + id).then(function(res) {
            return res.data;
        });
    }

    this.removeGoal = function(id) {
        return $http.delete(baseURL + 'goals/' + id).then(function(res) {
            return res.data;
        })
    }
})
