var map = angular.module('mapModule', ['map'])
    .controller('mapController', ['$scope', 'mapService', 'monstersService', function($scope, mapService, monstersService){  
    
        var warrior = document.querySelector('.warrior');
        new mapService(warrior, 100, 1);
    

}]);