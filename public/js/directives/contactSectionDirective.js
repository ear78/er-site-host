angular.module('myApp')
    .directive('contactSectionDirective', function(){
        return {
            restrict: 'E',
            templateUrl: '../../views/directives/contactSectionDirective.html'
        }
    })
