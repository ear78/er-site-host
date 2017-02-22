angular.module('myApp')
    .controller('homeCtrl', function($scope, $route){
        $scope.$route = $route;
    //  $scope.$location = $location;
    //  $scope.$routeParams = $routeParams;
        console.log($route);
    });
