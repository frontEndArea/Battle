var warriorCreate = angular.module('warriorModule', ['warriorCreate', 'warriorAvatar'])
    .controller('warriorCreateController', ['$scope', '$rootScope', 'warriorAvatarService', 'warriorCreateService', function($scope, $rootScope, warriorAvatarService, warriorCreateService) {

        $rootScope.warrior = {};

        $scope.loadWarrior = function(e) {  
            new warriorCreateService($rootScope.warrior.name, $rootScope.warrior.profession, 500);
        };

        // Avatars //
        $scope.avatars;

         warriorAvatarService.loadAvatars('../../data/avatars.json')
            .then(function(response) {
                $scope.avatars = response.data;
            });

        $rootScope.choosed;
        $scope.choosedAvatar = (index) => {
            $rootScope.choosed = warriorAvatarService.choosenAvatar($scope.avatars, index);
        };
}]);




