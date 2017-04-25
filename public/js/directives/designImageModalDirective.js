angular.module('myApp')
    .directive('designImageModal', function(){
        return {
            restrict: 'E',
            templateUrl: 'views/directives/designImageModal.template.html',
            controller: function($scope){
                $scope.isImageShowing = false;

                $scope.showModal = function(){
                    console.log('clicked')
                    $scope.isImageShowing = !$scope.isImageShowing;
                }
            }
        }
    })
