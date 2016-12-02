(function() {
    
    var generator = angular.module('mobsGenerator', ['mobsPosition', 'randomNumber', 'monsters'])
            .service('mobsGeneratorService', ['randomNumberService', 'mobsPositionService', 'monstersService', function(randomNumberService, mobsPositionService, monstersService) {
            
                function generateMobs(count = 10) {
                    
                    let params = mobsPositionService(count);
                    let MontsersArray = monstersService;
                    let monsters = [];
                    
                    for(let i = 0; i < count; i++) {
                        let random = randomNumberService(0, 2);
                        let newObj = $(`<img 
                            class="monsters" 
                            src="../../img/${MontsersArray[random].name}.png">`)
                            .appendTo('.warrior-map')
                            .css({
                                'top': params.array2[i],
                                'left': params.array[i]
                            });
                        monsters.push(new MontsersArray[random](newObj));
                    };
                };
                
                return generateMobs;
                
            }]);
})();