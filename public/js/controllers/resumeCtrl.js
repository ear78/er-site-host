angular.module('myApp')
    .controller('resumeCtrl', function($scope, mainService){
        $scope.resumes = mainService.resumes;

    })
