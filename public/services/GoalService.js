var app = angular.module('CoVentureApp');
var baseURL = 'http://159.203.43.162:80/api/'
app.service('GoalService', function($http) {
    this.getCompanyGoals = function(companyId) {
        return $http.get(baseURL + 'companies/' + companyId).then(function(res) {
            return res.data.goalReferences;
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

    this.updateGoal = function(goalId, val) {
      return this.getGoal(goalId).then(function(data) {
        let oldVals = data.variableValue;
        oldVals.push(val);
        console.log("sanity check");
        return $http.put(baseURL + 'goals/' + goalId, {
          completed: true,
          variableValue: oldVals
        });
      }).then(function(res) {
        return res.data;
      });
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
});
