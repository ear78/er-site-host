angular.module('myApp')
    .directive('myScrollDirective', function($rootScope, $anchorScroll) {
        return function(scope, element) {
            $rootScope.$on('$routeChangeStart', function() {
                $anchorScroll();
            });
        }
    });
