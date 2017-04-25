angular.module('myApp')
    .directive('designPictureDirective', function(){
        return {
            restrict: 'EA',
            templateUrl: '../../views/directives/designPictureDirective.html',
            scope: {
                design: '='
            },
            controller: function($scope, mainService){
                $scope.images = mainService.images;

                // IMAGE OPEN FUNCTION
                $scope.imageOpen = function(image){
                    
                }
            },
            link: function(){

            }
        }
    })
