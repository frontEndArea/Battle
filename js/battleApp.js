(function() {
    

var battleApp = angular.module('battleApp', ['ngRoute', 'warriorCreate']);


battleApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider
        .when("/", {
        
            controller: 'warriorCreateController',
            templateUrl: './views/create-warrior.html'
        
        });
}]);

})();
