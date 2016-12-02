(function() {
    
var mobsPosition = angular.module('mobsPosition', ['randomNumber'])
    .factory('mobsPositionService', ['monstersService', 'randomNumberService', function(monstersService, randomNumberService) {
      
      let winWidth = $(window).outerWidth() - 130,
          winHeight = $(window).outerHeight() - 130
        
      console.log(winHeight)
      
      function createPos(length) {
          let array = [];
          let array2 = [];
          for(let i = 0; i < length; i++) {
              array.push(randomNumberService(1, winWidth));
              array2.push(randomNumberService(1, winHeight));
          }
          return {
              array,
              array2
          }
      } 
      return createPos;
}]);
    
})();