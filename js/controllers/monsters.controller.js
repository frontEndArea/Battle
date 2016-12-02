(function() {

var monster = angular.module('monstersModule', ['mobsGenerator'])
    .controller('monstersController', ['$scope', 'mobsGeneratorService', function($scope, mobsGeneratorService){
        
        mobsGeneratorService(20);
 
}]);
    
})();