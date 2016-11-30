(function() {

var monster = angular.module('monstersModule', ['monsters'])
    .controller('monstersController', ['$scope', 'monstersService', function($scope, monstersService){  
     
        for(let i = 0; i < 10; i++) {
            $('<div class="troll"></div>').appendTo('.warrior-map').css('background', 'blue');
        }
        
        var trolls = $('.troll');
        for(let i = 0; i < trolls.length; i++) {
            trolls.push(new monstersService.Troll(brick[i], 'Troll', '200', 6));
        }

}]);
    
})();