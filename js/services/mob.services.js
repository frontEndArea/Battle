import Warrior;

var monsters = angular.module('monsters', [])
    .factory('monstersService', function() {
        
        class Monsters extends Warrior {
            
            constructor(object, name, health, level) {
                super(name, health);
                this.object = object;
            }    
        }
        
        class Troll extends Monsters() {
            
            constructor(object, name, health, level) {
                super(object, name, health, level);
            }
            
        }
        
        return {
            Monsters: Monsters,
            Troll: Troll
        }
        
    });