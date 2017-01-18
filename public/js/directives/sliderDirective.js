angular.module('myApp')
    .directive('sliderDirective', function(mainService){
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                images: '='
            },
            link: function(scope,element,attrs){
                scope.currentIndex = 0;

                scope.images = mainService.images;

                scope.next = function(){
                    console.log('clicked next')
                    scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
                }

                scope.prev = function(){
                    console.log('clicked prev')
                    scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
                }

                scope.$watch('currentIndex', function(){
                    scope.images.forEach(function(image){
                        image.visible = false;
                    })
                    scope.images[scope.currentIndex].visible = true;
                })
            },
            templateUrl: '../../views/directives/sliderDirective.html'

        } // RETURN
})// MODULE
