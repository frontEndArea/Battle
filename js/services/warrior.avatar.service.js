(function() {
    
var warriorAvatar = angular.module('warriorAvatar', [])
    .factory('warriorAvatarService', ['$http', function($http) {
    
        let choosen;

        function choosenAvatar(array, index) {
           return choosen = array[index];
        };

        function loadAvatars(url) {
            return $http.get(url);
        };

        return {
            choosenAvatar: choosenAvatar,
            loadAvatars: loadAvatars
        }
    
}]);
    
})();

