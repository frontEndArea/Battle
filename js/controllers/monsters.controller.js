(function() {

var monster = angular.module('monstersModule', ['monsters', 'mobsPosition'])
    .controller('monstersController', ['$scope', 'monstersService', 'mobsPositionService', function($scope, monstersService, mobsPositionService){  
        
        let params = mobsPositionService(10);
        
        for(let i = 0; i < 10; i++) {
            $('<div class="troll"></div>').appendTo('.warrior-map').css({
                'background': 'blue',
                'top': params.array2[i],
                'left': params.array[i]
            });
        }
        
        var trollsHTML = $('.troll');
        var trolls = [];
        for(let i = 0; i < trollsHTML.length; i++) {
            trolls.push(new monstersService.Troll(trollsHTML[i], 'Troll', '200', 6));
        }
        console.log(trolls)

}]);
    
})();