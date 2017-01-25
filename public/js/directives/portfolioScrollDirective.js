

angular.module('myApp')
    .directive('portfolioScrollDirective', function(){
        return {
            restrict: 'A',
            link: function(scope,element,attrs){
                $(window).on('scroll', function(){
                    var scrollPosition = $(this).scrollTop();
                    if(scrollPosition > 1550){
                        element.addClass('portfolio-slide');
                    }
                })
            }
        }
    })
