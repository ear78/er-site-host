angular.module('myApp')
    .controller('contactCtrl', function($scope){

        $scope.submitContact = function(contact){
            console.log('This is working!');
        }
    })
