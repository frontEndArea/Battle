(function() {
    

var battleApp = angular.module('battleApp', ['ngRoute', 'warriorModule', 'mapModule', 'monstersModule']);


battleApp.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider
        .when("/", {
        
            controller: ['warriorCreateController'],
            templateUrl: './views/create-warrior.html'
        
        })
        .when("/map", {
              
            controller: 'mapController',
            templateUrl: './views/map.html'
              
        })
    
}]);


})();
