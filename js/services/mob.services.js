var monsters = angular.module('monsters', ['warriorCreate'])
    .factory('monstersService', ['warriorCreateService', function(warriorCreateService) {

    
        class Monsters extends warriorCreateService {
            constructor(object, name, health, level) {
                
                super(name, health);
                
                this.object = object;
                this.level = level;
                
            };
        };
        
        class Troll extends Monsters {
            
            constructor(object, name, health, level) {  
                super(object, name, health, level) 
                    
            };   
        };
    
        
        return {
            Troll: Troll,
            Monsters: Monsters
        }
   
    }]);