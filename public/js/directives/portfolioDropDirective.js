angular.module('myApp')
    .directive('portfolioDropDirective', function(){
        return {
            restrict: 'A',
            link: function(scope,element,attrs){
                var $projectBox = $('.project-box');
                var $projectDrop = $('.project-drop');

                element.on('click', function(){
                    element.next().slideToggle(400);
                })
            }
        }
    })
