angular.module('myApp')
    .directive('menuScroll', function($window){
        return {
            restrict: 'EA',
            link: function(scope, element, attrs){
                $(window).on('scroll', function(){
                    var scrollPosition = $(this).scrollTop();
                    if(element.hasClass('main-header-container-alt')){
                        if(scrollPosition > 10){
                            element.addClass('scroll-change-alt');
                        }
                        else if(scrollPosition < 10){
                            element.removeClass('scroll-change-alt');
                        }
                    } else {
                        if(scrollPosition > 10){
                            element.addClass('scroll-change');
                        }
                        else if(scrollPosition < 10){
                            element.removeClass('scroll-change');
                        }
                    }// closing tag for outer if statement
                })
            }
        }
    })
