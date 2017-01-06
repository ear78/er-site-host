angular.module('myApp')
    .directive('clickScrollDirective', function(){
        return {
            restrict: 'A',
            link: function(scope,element,attrs){
                element.on('click', function(){
                    $('body').animate({scrollTop: 0}, "slow");
                })
            }
        }
    })
