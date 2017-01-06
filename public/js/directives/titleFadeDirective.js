angular.module('myApp')
    .directive('titleFadeDirective', function(){
        return {
            restrict: 'A',
            link: function(scope,element,attrs){
                    $(window).on('scroll', function(){
                    var scrollPosition = $(this).scrollTop();
                    if(scrollPosition > 30){
                        element.css('opacity', 1 - ( ($(window).scrollTop() - 30)/200));
                    }
                })
            }
        }
    })
