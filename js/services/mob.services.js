var monsters = angular.module('monsters', ['warriorCreate'])
    .factory('monstersService', ['warriorCreateService', function(warriorCreateService) {

    
       function Monsters(object, name, health, level) {
           
           this.object = object;
           this.level = level;
           this.name = name;
           this.health = health;
           
           this.name = '';
           
       }
       
       Monsters.prototype = Object.create(warriorCreateService.prototype);
       Monsters.prototype.constructor = Monsters;
       
        function Troll(object, name, health, level) {
            Monsters.call(this, object, name, health, level);
            
        }
       Troll.prototype = Object.create(Monsters.prototype);
       Troll.prototype.constructor = Troll;
        
        return {
            Troll: Troll,
            Monsters: Monsters
        }
   
    }]);