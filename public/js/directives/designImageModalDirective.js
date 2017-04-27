angular.module('myApp')
    .directive('designImageModal', function(){
        return {
            restrict: 'E',
            templateUrl: 'views/directives/designImageModal.template.html',
            controller: function($scope, mainService){
                $scope.isImageShowing = false;
                $scope.images = mainService.images;

                $scope.showModal = function(image){
                    console.log(image);
                    $scope.isImageShowing = !$scope.isImageShowing;
                    $scope.image = image.img;
                    $scope.name = image.name;
                    $scope.tech = image.tech;
                }

                $scope.closeModal = function(){
                    $scope.isImageShowing = false;
                }
            }
        }
    })
