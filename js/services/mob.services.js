var monsters = angular.module('monsters', ['warriorCreate'])
    .factory('monstersService', ['warriorCreateService', function(warriorCreateService) {

    
       class Monsters {
           
           constructor(object) {
               this.object = object;
           };  
       };
       
       class Troll extends Monsters {
           constructor(object) {
               super(object);
               this.health = '200';
               this.level = 5;
           };
       };
        
       class Ork extends Monsters {
           constructor(object) {
               super(object);
               this.health = '100';
               this.level = 2;
           };
       };
        
       class Spider extends Monsters {
           constructor(object, name) {
               super(object, name);
               this.health = '80';
               this.level = 3;
           };
       };
        
        return [ Troll, Ork, Spider ];
   
    }]);