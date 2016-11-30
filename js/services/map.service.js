var map = angular.module('map', [])
    .factory('mapService', function() {
       
        class Map {
           constructor(object, speed, position) {
               this.speed = speed;
               this.position = position;
               this.object = object; 
               this.position = {
                   left: parseInt(this.object.style.left, 10),
                   top: parseInt(this.object.style.top, 10)
               };

               this.move();
               setInterval(() => {
                   this.object.style.left = this.position.left;
                   this.object.style.top = this.position.top;
               }, 10)

           }

           move() {

               document.addEventListener('keydown', (e) => {
                   switch(e.keyCode) {

                       case 37: 
                            this.position.left -= 4;
                            return this.position.left;
                            break;
                       case 38:
                           this.position.top -= 4;
                           return this.position.top;
                           break;
                       case 39:
                           this.position.left += 4;
                           return this.position.right;
                           break;
                       case 40:
                           this.position.top += 4;
                           return this.position.bottom;
                   }
               });
           };

        };
        
    return Map;
        
    });



