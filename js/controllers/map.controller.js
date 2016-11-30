var map = angular.module('mapModule', ['map'])
    .controller('mapController', ['$scope', 'mapService', function($scope, mapService){  
    
        var warrior = document.querySelector('.warrior');
        new mapService(warrior, 100, 1);
    

}]);