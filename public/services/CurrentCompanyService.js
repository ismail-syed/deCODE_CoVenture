var app = angular.module('CoVentureApp');
app.service('CurrentCompanyService', function() {
    var property = null;

    return {
        getCurrentCompany: function () {
            return property;
        },
        setCurrentCompany: function(value) {
            property = value;
        }
    };
});
