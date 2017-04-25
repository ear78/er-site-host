angular.module('myApp')
    .directive('designImageModal', function(){
        return {
            restrict: 'E',
            templateUrl: 'views/directives/designImageModal.template.html',
            controller: function($scope, mainService){
                $scope.isImageShowing = false;
                $scope.images = mainService.images;

                $scope.showModal = function(img){
                    console.log(img)
                    $scope.isImageShowing = !$scope.isImageShowing;
                    $scope.img = img;
                }
            }
        }
    })
