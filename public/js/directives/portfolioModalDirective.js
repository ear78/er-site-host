angular.module('myApp')
    .directive('portfolioModalDirective', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){

                $('.box1').on('click', function(){
                    $(this).next('.portfolio-modal').fadeIn("slow");
                })

                $('.close-menu').on('click', function(){
                    $(this).parent('.portfolio-modal').fadeOut("slow");
                })

                // $('.arrow-right, .arrow-left').on('click', function(){
                //     $('.portfolio-box').fadeOut();
                // })
            }
        }
    })
